const request = require("supertest");
const app = require("../src/app");

describe("greeter-api endpoints (API)", () => {
  test("GET /health -> 200 { status: ok }", async () => {
    const res = await request(app).get("/health");
    expect(res.status).toBe(200);
    expect(res.body).toEqual({ status: "ok" });
  });

  test("GET /greet?name=Ada -> Hello, Ada!", async () => {
    const res = await request(app).get("/greet?name=Ada");
    expect(res.status).toBe(200);
    expect(res.body).toEqual({ message: "Hello, Ada!" });
  });

  test("GET /greet with no name -> Hello, world!", async () => {
    const res = await request(app).get("/greet");
    expect(res.status).toBe(200);
    expect(res.body.message).toBe("Hello, world!");
  });
});
