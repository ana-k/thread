import { gql } from 'apollo-server'


const query = gql`
  type Query {
    "root for all queries"
    hello: String
  }
`


export default query
