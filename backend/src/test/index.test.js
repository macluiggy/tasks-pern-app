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
  it("get the corresponding task", (done) => {
    chai
      .request(server)
      .get("/api/task/39")
      .end((err, res) => {
        assert.equal(res.status, 200);
        // assert.equal(res.body.id, 39);
        // console.log(res.body);
        assert.isNotOk(res.body.id);
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
        console.log(res);
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
