module.exports = {
  APPLICATION_ID:
    process.env.APPLICATION_ID ||
    "91c0b28a5c4b499a89fc68151f2d40bd994ccf6d5957f57b94d5a17c082fcc1c",
  SECRET:
    process.env.SECRET ||
    "27074897c2e56fc41055c9018aabb67ab56d5fb05f7133774262049cf6d9164e",
  CALLBACK_URL: process.env.CALLBACK_URL || "http://localhost:3000"
};
