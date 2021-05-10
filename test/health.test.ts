import app from "./fixtures/app";
import request from "supertest";

describe("Health tests", () => {
  test("health check returns ok", () =>
    request(app.callback())
      .get("/health-check")
      .expect(200));
});
