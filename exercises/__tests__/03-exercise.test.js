const supertest = require("supertest");

const app = require("../03-exercise/server");
const userData = require("../03-exercise/user-data");

const request = supertest(app);

describe("03-exercise", () => {
  test("GET '/user-data': sends the user data in a `data` property", async () => {
    const res = await request.get("/user-data");

    expect(res.status).toBe(200);
    expect(res.body.data).toEqual(userData);
  });

  test("DELETE '/users/:userId': sends a confirmation of the deletion", async () => {
    const res = await request.delete("/users/user-12345");

    expect(res.status).toBe(200);
    expect(res.body.data).toMatch(`user-12345`);
  });

  test("PATCH '/users/:userId': sends back the updates made", async () => {
    const res = await request.patch("/users/user-12345").send({
      firstName: "alex",
      lastName: "spence",
    });

    expect(res.status).toBe(200);
    expect(res.body.data).toEqual({
      id: "user-12345",
      firstName: "alex",
      lastName: "spence",
    });
  });
});
