const db = require('../dbconfig');
const axios = require('axios');
module.exports = {add
};

async function add(subject){
    //const [id] = await db('subjects').insert(subject);
    axios
  .post('https://cudjoesresolve.herokuapp.com/api/subjects', subject)
  .then(res => {
    console.log(`statusCode: ${res.statusCode}`)
    console.log(res)
  })
  .catch(error => {
    console.error(error)
  })
}