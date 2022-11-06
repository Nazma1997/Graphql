const graphql= require('graphql');
const _= require('lodash')
const {GraphQLObjectType,GraphQLSchema,GraphQLString, GraphQLID, GraphQLInt} = graphql;


const books = [
  {name: 'Name of the wind', genre: 'Fantasy', id: '1'},
  {name: 'Name of the wind', genre: 'Cokomo', id: '2'},
  {name: 'Name of the wind', genre: 'Wi-Fi', id: '3'},
  {name: 'The name of air', genre: 'eeeee', id: '4'}
];


const authors = [
  {name: 'Sania', age: 22, id : '1'},
  {name: 'Hafsa',age: 33, id:'2'},
  {name: 'Tanbir', age: 55, id: '3'}
]

const children =  [
  {name: 'Maryeam', id: '1'},
  {name: 'Inteha', id: '2'}
]

const BookType = new GraphQLObjectType({
  name: 'Book',
  fields: () => ({
    id: {type: GraphQLID},
    name: {type: GraphQLString},
    genre: {type: GraphQLString},
  })
});


const AuthorType = new GraphQLObjectType({
  name: 'Author',
  fields: ()=> ({
    id: {type: GraphQLID},
    name: {type: GraphQLString},
    age: {type: GraphQLInt}
  })
});


const ChildrenType = new GraphQLObjectType({
  name: 'Children',
  fields: () => ({
    id: {type: GraphQLID},
    name: {type: GraphQLString  }
})
})


const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    book: {
      type: BookType,
      args: {id: {type: GraphQLID}},
      resolve(parent,args){
       // code to get data from db / other resources

       console.log(typeof (args.id))
       return _.find(books, {id: args.id})
      }
    },
    author: {
      type: AuthorType,
      args: {id: {type: GraphQLID}},
      resolve(parent, args){
        return _.find(authors,{id: args.id})
      }
    },

    children: {
      type: ChildrenType,
      args: {id: {type: GraphQLID}},
      resolve(parent, args){
        return _.find(children,{id: args.id})
      }
    }



  
  }

  
  })



module.exports = new GraphQLSchema({
  query: RootQuery
})