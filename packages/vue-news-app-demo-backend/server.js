const express = require('express')
const cors = require('cors')
const { ApolloServer, gql, graphiqlExpress } = require('apollo-server-express')
const db = require('./database.js')

// The GraphQL schema in string form
const typeDefs = gql`
  type Article {
    id: Int!
    title: String!
    summary: String
    body: String
    imageUrl: String
    author: Author
    postedDate: String
  }
  type Author {
    id: Int!
    name: String!
    bio: String
    avatarUrl: String
    articles: [Article]
  }
  type Query {
    author (id: Int!): Author
    article (id: Int!): Article
    articles: [Article]
    authors: [Author]
  }
  type Mutation {
    setAuthorName (id: Int!, name: String!): Author
  }
`

// The resolvers
const resolvers = {
  Article: {
    author: (root) => db.getAuthor(root.authorId)
  },
  Author: {
    articles: (root) => db.getArticlesByAuthor(root.id)
  },
  Query: {
    author: (root, args) => db.getAuthor(args.id),
    article: (root, args) => db.getArticle(args.id),
    articles: () => db.getArticles(),
    authors: () => db.getAuthors()
  },
  Mutation: {
    setAuthorName: (root, args) => db.setAuthorName(args.id, args.name)
  }
}

// GraphQL: Schema
const server = new ApolloServer({
  typeDefs: typeDefs,
  resolvers: resolvers,
  playground: {
    endpoint: `http://localhost:3000/graphql`,
    settings: {
      'editor.theme': 'light'
    }
  }
})

// Imports: Express
const app = express()

// Middleware: GraphQL
  server.applyMiddleware({
  app
})

app.use(cors())
app.use('/assets', express.static('assets'))

// Start the server
app.listen(3000, () => {
  console.log('Go to http://localhost:3000/graphql to run queries!')
})
