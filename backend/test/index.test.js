const chaiTest = require("chai");
const assert = chaiTest.assert;
const server = require("../dist/bundle.js");
const chaiHttp = require("chai-http");
chaiTest.use(chaiHttp);
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
    chaiTest
      .request(server)
      .get("/api/hello")
      .end((err, res) => {
        assert.equal(res.status, 200);
        done();
      });
  });
});

module.exports = true;
