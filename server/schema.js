const ShoeModel = require('./models/Shoe');
const UserModel = require('./models/User');
const ReviewModel = require('./models/Review');
const GraphQLDateType = require('../GraphQL Scalar/graphql-date');

const { GraphQLObjectType, GraphQLID, GraphQLString, GraphQLSchema, GraphQLList,
GraphQLNonNull, GraphQLEnumType } = require('graphql');

const ShoeType = new GraphQLObjectType({
    name: 'Shoe',
    fields: () => ({
        description: { type: GraphQLString },
        color: { type: GraphQLString },
        origin: { type: GraphQLString },
        size: { type: GraphQLString },
        status: { type: GraphQLString },
    })
})

const UserType = new GraphQLObjectType({
    name: 'User',
    fields: () => ({
        name: { type: GraphQLString },
        email: { type: GraphQLString },
        password: { type: GraphQLString },
    })
})

const ReviewType = new GraphQLObjectType({
    name: 'Review',
    fields: () => ({
        username: { type: GraphQLString },
        content: { type: GraphQLString },
        date: { type: GraphQLDateType },
    })
})

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: () => ({
        user: { type: new GraphQLList() }
    })
})