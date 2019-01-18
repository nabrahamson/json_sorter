import { each } from 'lodash'
import * as fs from 'fs'

import data from './in.json'

var dict = {}

const sortJson = () => {
  each(data, obj => {
    if ( obj.topic in dict ) {
      dict[obj.topic].push(obj)
    } else {
      dict[obj.topic] = [obj]
    }
  })
}

sortJson()
console.log(dict)
fs.writeFileSync('./out.json', JSON.stringify(dict))
console.log('coontents written to out.json')
