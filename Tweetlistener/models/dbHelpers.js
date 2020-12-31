const db = require('../dbconfig');

module.exports = {add
};

async function add(subject){
    const [id] = await db('subjects').insert(subject);
}