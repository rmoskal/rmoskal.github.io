const fs = require('fs');
const {map, pipe, set, filter, identity, join, isBlank, trim} = require('lodash/fp');



const f = _in =>pipe(
  filter(identity),
  map(trim),
  filter(isBlank),
  join('<br/></br/>')
)(_in.split(/\r?\n/))



const chrons = pipe(
  map(each=>require('./src/chronology/'+each)),
  map(each=> set('body', f(each.body), each))
  )(fs.readdirSync( './src/chronology/' ))






function pLog(_in, ...more) {
  console.log('===>', _in, ...more);
  return _in;
}



module.exports = {
  build: {
    srcPath: './src',
    outputPath: './docs'
  },
  site: {
    title: 'Nanogen site',
    chrons

  }
};
