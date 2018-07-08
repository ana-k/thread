import { graphqlExpress, graphiqlExpress } from 'apollo-server-express'
import bodyParser from 'body-parser'
import express from 'express'

import schema from './schema'


const thread = express()

const graphqlExpressware = graphqlExpress({ schema })
const graphiqlExpressware = graphiqlExpress({ endpointURL: '/graphql' })

thread.use('/graphql', bodyParser(), graphqlExpressware)
thread.use('/graphiql', graphiqlExpressware)


export default thread
