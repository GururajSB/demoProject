module.exports = {
  Mutation: require("./mutations/index"),
  Query: require("./queries/index"),
  ...require("./type/index"),
};
