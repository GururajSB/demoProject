const fs = require('fs')
const { gql } = require('apollo-server');

module.exports = gql(fs.readFileSync('./schema.graphql', { encoding: 'utf-8' }))

//fs.writeFileSync('schema.json', JSON.stringify(module.exports), { encoding: 'utf-8' })