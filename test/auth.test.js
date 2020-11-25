const request = require("supertest");
const app = require("../app");
beforeEach(() => {
  console.log("before each run");
});
afterEach(() => {
  console.log("after each run");
});
test("should do a staff signup", async () => {
  await request(app)
    .post("/api/v1/staff/register")
    .send({
      name: "Hamza",
      email: "joshi123@gmail.com",
      password: "password",
    })
    .expect(200);
});
test("should do a staff login", async () => {
  await request(app)
    .post("/api/v1/staff/login")
    .send({
      email: "joshi123@gmail.com",
      password: "password",
    })
    .expect(200);
});

test("should do a user signup", async () => {
  await request(app)
    .post("/api/v1/auth/register")
    .send({
      name: "Hamza",
      email: "joshi1234@gmail.com",
      password: "password",
      companyEmail: "joshi@gmail.com",
    })
    .expect(200);
});

test("should do a user login", async () => {
  await request(app)
    .post("/api/v1/auth/login")
    .send({
      email: "joshi1234@gmail.com",
      password: "password",
    })
    .expect(200);
});
