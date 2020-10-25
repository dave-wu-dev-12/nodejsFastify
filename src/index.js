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

// init routes
const routes = require("./routes");
routes.forEach((route, index) => {
  fastify.route(route);
});

// Run the server!
const start = async () => {
  try {
    await fastify.listen(3000);
    fastify.swagger();
    fastify.log.info(`server listening on ${fastify.server.address().port}`);
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

start();
