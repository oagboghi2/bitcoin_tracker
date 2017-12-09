const pgp = require('pg-promise')();
const connectionString = 'postgres://localhost:5432/bitcoin';
const db = pgp(connectionString);

function getAllUsers(){
  return db.any(`SELECT * FROM users JOIN bitcoin ON users.id = bitcoin.users_id;
`);
}

function getAUser(id){
  return db.any(`SELECT * FROM users WHERE id = $1`, id);
}


module.exports = {getAllUsers, getAUser}
