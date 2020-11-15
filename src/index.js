// Require the framework and instantiate it
const fastify = require("fastify")({
  logger: true,
});

// Require external modules
const mongoose = require("mongoose");

// Connect to DB
mongoose
  .connect("mongodb://localhost/mycargarage")
  .then(() => console.log("MongoDB connected…"))
  .catch((err) => console.log(err));

// Import Swagger Options
const swagger = require("./config/swagger");
// Register Swagger
fastify.register(require("fastify-swagger"), swagger.options);

fastify.register(require("fastify-cors"), {
  // put your options here
});

// init car routes
const routes = require("./routes/index");
routes.forEach((route, index) => {
  fastify.route(route);
});

// init standup routes
const standupRoutes = require("./routes/standupRoutes");
standupRoutes.forEach((route, index) => {
  fastify.route(route);
});

// init standup routes
const postRoutes = require("./routes/postRoutes");
postRoutes.forEach((route, index) => {
  fastify.route(route);
});

// Run the server!
const start = async () => {
  try {
    await fastify.listen(4200);
    fastify.swagger();
    fastify.log.info(`server listening on ${fastify.server.address().port}`);
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

start();
