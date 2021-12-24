// const chaiTest = require("chai");
// const assert = chaiTest.assert;
// const server = require("../../dist/bundle");
// const chaiHttp = require("chai-http");
// chaiTest.use(chaiHttp);
import chai from "chai";
import chaiHttp from "chai-http";
import server from "../index";
var assert = chai.assert;
chai.use(chaiHttp);

// import chai from "chai";
// const assert = chai.assert;

// function rrr(params) {}d
// ./src/test/**/*.ts
describe("index.test.ts", () => {
  it("equal to 1", () => {
    assert.equal(1, 1);
  });
  it("hello equal hello", () => {
    assert.equal("hello", "hello");
  });
});

describe("Test HTTP Methods", () => {
  it("test GET api hello", (done) => {
    chai
      .request(server)
      .get("/api/hello")
      .end((err, res) => {
        assert.equal(res.status, 200);
        assert.equal(res.text, "hello");
        done();
      });
  });
  it("Create a task", (done) => {
    chai
      .request(server)
      .post("/api/tasks")
      .send({
        title: "test",
        description: "test",
      })
      .end((err, res) => {
        // console.log(res);
        console.log(res);
        assert.equal(res.status, 500);
        assert.equal(res.created, false);
        done();
      });
  });
  it("get the corresponding task", (done) => {
    chai
      .request(server)
      .get("/api/tasks/39")
      .end((err, res) => {
        const { id, title, description, status } = res.body[0];
        const { files, ok, setEncoding } = res;
        // console.log(res);
        assert.equal(res.status, 200);
        assert.strictEqual(id, 39);
        assert.isNumber(id);
        assert.equal(res.type, "application/json");
        assert.equal(title, "test2");
        assert.equal(description, "todo2");
        assert.notEqual(description, "todo1");
        assert.isNull(status);
        assert.isUndefined(files);
        assert.isTrue(ok);
        assert.isFunction(setEncoding);
        done();
      });
  });
  it("update a task", (done) => {
    chai
      .request(server)
      .put("/api/tasks/39")
      .send({
        title: "test2",
        description: "todo2",
      })
      .end((err, res) => {
        // console.log(res);
        // const { rows } = res.body;
        assert.equal(res.status, 200);
        // assert.equal(res.body.rowCount, 1);
        assert.equal(res.body.body.id, 39);
        assert.equal(res.body.body.title, "test2");
        assert.equal(res.body.body.description, "todo2");
        assert.isNull(res.body.body.status);
        done();
      });
  });
});
