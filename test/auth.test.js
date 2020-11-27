const request = require("supertest");
const app = require("../app");

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

test("should do a staff signup", async () => {
  await request(app)
    .post("/api/v1/staff/register")
    .send({
      name: "Hamza",
      email: "joshi1234443@gmail.com",
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

test("should do a staff login", async () => {
  await request(app)
    .post("/api/v1/staff/login")
    .send({
      email: "joshi123@gmail.com",
      password: "pasdffffffffffsword",
    })
    .expect(200);
});

test("should do a getprofile staff", async () => {
  await request(app)
    .get("/api/v1/staff/me")
    .set(
      "Authorization",
      `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmYmU0MDc2MjVkODBlMjIyMGUyMmQxMCIsImlhdCI6MTYwNjQ1MDEzMSwiZXhwIjoxNjA5MDQyMTMxfQ.aAZIenC-6rG0SGjo3nhQ1ZLpPsi_xpnGi2PgQwl_7vM`
    )
    .send({
      email: "joshi123@gmail.com",
      password: "password",
    })
    .expect(200);
});

test("should do a getprofile staff", async () => {
  await request(app)
    .get("/api/v1/staff/me")
    .set(
      "Authorization",
      `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjdfdfsVmYmU0MDc2MjVkODBlMjIyMGUyMmQxMCIsImlhdCI6MTYwNjQ1MDEzMSwiZXhwIjoxNjA5MDQyMTMxfQ.aAZIenC-6rG0SGjo3nhQ1ZLpPsi_xpnGi2PgQwl_7vM`
    )
    .send({
      email: "joshi123@gmail.com",
      password: "password",
    })
    .expect(200);
});

test("should do a staff forgotpassword", async () => {
  await request(app)
    .post("/api/v1/staff/forgotpassword")
    .send({
      email: "joshi123@gmail.com",
    })
    .expect(200);
});

test("should do a staff forgotpassword", async () => {
  await request(app)
    .post("/api/v1/staff/forgotpassword")
    .send({
      email: "joshi12dfdfdfdf3@gmail.com",
    })
    .expect(200);
});

test("should do a staff resetPassword", async () => {
  await request(app)
    .post("/api/v1/staff/resetpassword")
    .send({
      email: "joshi123@gmail.com",
    })
    .expect(200);
});

test("should do a staff resetPassword", async () => {
  await request(app)
    .post("/api/v1/staff/resetpassword")
    .send({
      token:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmYmU0MDc2MjVkODBlMjIyMGUyMmQxMCIsImlhdCI6MTYwNjUwMDI2OCwiZXhwIjoxNjA2NTg2NjY4fQ.35nXIpsKuwX_3MzYZKGTTJHzPTrUAHJDb6bdRdiVAM4",
      newPassword: "joshi123",
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

test("should do a user signup", async () => {
  await request(app)
    .post("/api/v1/auth/register")
    .send({
      name: "Hamza",
      email: "joshi123ds4@gmail.som",
      password: "password",
      companyEmail: "joshi@gmaisl.com",
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

test("should do a user login", async () => {
  await request(app)
    .post("/api/v1/auth/login")
    .send({
      email: "joshi1234@gmail.com",
      password: "passwosddfrd",
    })
    .expect(200);
});

test("should do a getprofile user", async () => {
  await request(app)
    .get("/api/v1/auth/me")
    .set(
      "Authorization",
      `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmYmU0NjEyOTRjM2NiMmJhMDVkMTNkNiIsImlhdCI6MTYwNjQ1MDE3NCwiZXhwIjoxNjA5MDQyMTc0fQ.6Rbz00AJAEnwnpT2WNJ_VBpbLcsjXerQFmjCyrEzX2w`
    )
    .send({
      email: "joshi123@gmail.com",
      password: "password",
    })
    .expect(200);
});

test("should do a getprofile user", async () => {
  await request(app)
    .get("/api/v1/auth/me")
    .set(
      "Authorization",
      `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVdddmYmU0NjEyOTRjM2NiMmJhMDVkMTNkNiIsImlhdCI6MTYwNjQ1MDE3NCwiZXhwIjoxNjA5MDQyMTc0fQ.6Rbz00AJAEnwnpT2WNJ_VBpbLcsjXerQFmjCyrEzX2w`
    )
    .send({
      email: "joshi123@gmail.com",
      password: "password",
    })
    .expect(200);
});

test("should do a user forgotpassword", async () => {
  await request(app)
    .post("/api/v1/auth/forgotpassword")
    .send({
      email: "joshi1234@gmail.com",
    })
    .expect(200);
});

test("should do a user forgotpassword", async () => {
  await request(app)
    .post("/api/v1/auth/forgotpassword")
    .send({
      email: "joshi12sdsd34@gmail.com",
    })
    .expect(200);
});

test("should do a user resetPassword", async () => {
  await request(app)
    .post("/api/v1/auth/resetpassword")
    .send({
      email:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmYmU0NjEyOTRjM2NiMmJhMDVkMTNkNiIsImlhdCI6MTYwNjQ5OTc5MSwiZXhwIjoxNjA2NTg2MTkxfQ.AYTyvJzI1aLVk-WgOXOG4EbsIQLNrQTgym8ybQVpSEQ",
    })
    .expect(200);
});

test("should do a user resetPassword", async () => {
  await request(app)
    .post("/api/v1/auth/resetpassword")
    .send({
      token:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmYmU0NjEyOTRjM2NiMmJhMDVkMTNkNiIsImlhdCI6MTYwNjUwMDM0NCwiZXhwIjoxNjA2NTg2NzQ0fQ.QW7vEsNNFryyf1EblyxT1BdeCNb0-jirff5Uou8pZcI",
      newPassword: "hamzajoshan",
    })
    .expect(200);
});
/*
login token staff 
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmYmU0MDc2MjVkODBlMjIyMGUyMmQxMCIsImlhdCI6MTYwNjQ1MDEzMSwiZXhwIjoxNjA5MDQyMTMxfQ.aAZIenC-6rG0SGjo3nhQ1ZLpPsi_xpnGi2PgQwl_7vM


login token auth

eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmYmU0NjEyOTRjM2NiMmJhMDVkMTNkNiIsImlhdCI6MTYwNjQ1MDE3NCwiZXhwIjoxNjA5MDQyMTc0fQ.6Rbz00AJAEnwnpT2WNJ_VBpbLcsjXerQFmjCyrEzX2w



*/
