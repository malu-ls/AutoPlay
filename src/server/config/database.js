import express, { json } from 'express'
import { connect } from 'mongoose'

import routes from './router/routes'

const app = express()
// Conexão com o Banco Mongo
connect('mongodb+srv://Malu:Mm-@2809@cluster0-2mxgo.mongodb.net/auto_play')

app.use(json)
app.use(routes)
