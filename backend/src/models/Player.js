import { Schema, model } from 'mongoose'

const playersSchema = new Schema({
  name: String,
  short_name: String,
  player_code: String
})

export default model('Player', playersSchema)