const graphql= require('graphql');
const _= require('lodash')
const {GraphQLObjectType,GraphQLSchema,GraphQLString, GraphQLID, GraphQLInt} = graphql;


const books = [
  {name: 'Name of the wind', genre: 'Fantasy', id: '1', authorId: '1'},
  {name: 'Name of the wind', genre: 'Cokomo', id: '2', authorId: '2'},
  {name: 'Name of the wind', genre: 'Wi-Fi', id: '3', authorId: '3'},
  {name: 'The name of air', genre: 'eeeee', id: '4', authorId: '4'}
];


const authors = [
  {name: 'Sania', age: 22, id : '1', bookId: '1'},
  {name: 'Hafsa',age: 33, id:'2', bookId: '2'},
  {name: 'Tanbir', age: 55, id: '3', bookId: '3'},
  {name: 'Nazma', age:103, id: '4', bookId: '4'}
]



const BookType = new GraphQLObjectType({
  name: 'Book',
  fields: () => ({
    id: {type: GraphQLID},
    name: {type: GraphQLString},
    genre: {type: GraphQLString},
    author: {
      type: AuthorType,
      resolve(parent, args){
        return _.find(authors, {id: parent.authorId})
      }
    }
  })
});


const AuthorType = new GraphQLObjectType({
  name: 'Author',
  fields: ()=> ({
    id: {type: GraphQLID},
    name: {type: GraphQLString},
    age: {type: GraphQLInt},
    book: {
      type: BookType,
      resolve(parent, args){
        return _.find(books, {id: parent. bookId})
      }
    }
  })
});





const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    book: {
      type: BookType,
      args: {id: {type: GraphQLID}},
      resolve(parent,args){
       // code to get data from db / other resources

      
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

   



  
  }

  
  })



module.exports = new GraphQLSchema({
  query: RootQuery
})