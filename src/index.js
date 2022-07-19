require("./bootstrap");
const { ApolloServer } = require("apollo-server-express");
const {
  ApolloServerPluginUsageReportingDisabled,
} = require("apollo-server-core");
const { SchemaDirectiveVisitor } = require("@graphql-tools/utils");
const express = require("express");
const typeDefs = require("./typedefs");
const resolvers = require("./resolvers/index");
const getTokenMetadata = require("./lib/getTokenMetadata");
const server = new ApolloServer({
  typeDefs,
  resolvers,
  csrfPrevention: true,
  cache: "bounded",
  plugins: [ApolloServerPluginUsageReportingDisabled()],
  context: async function ({ req, connection }) {
    let c = {};
    if (connection) {
      c.token = connection.context.authorization;
    } else {
      c.token = req.headers.authorization;
    }
    if (c.token) {
      c.token = c.token.indexOf("earer ") >= 0 ? c.token.slice(7) : c.token;
      let tokenMetadata = await getTokenMetadata(c.token);
      return tokenMetadata;
    }
    return c;
  },
  formatError: (error) => {
    console.log(error);
    return {
      ...error,
    };
  },
});

const port = process.env.PORT;
server.start().then(() => {
  const app = express();
  server.applyMiddleware({ app, path: "/" });
  app.listen(port, () => {
    console.log(`🚀 User Service ready at http://localhost:${port}`);
  });
});
