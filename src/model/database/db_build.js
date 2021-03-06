const path = require('path');
const { QueryFile } = require('pg-promise');
const dbConnect = require('./db_connect.js');

const sql = file => QueryFile(path.join(__dirname, file), { minify: true });

let build;

build = sql('./db_build.sql');

const runDbBuild = () => {
  return dbConnect
    .query(build)
    .then()
    .catch(e => console.error('error', e));
};

runDbBuild();
//export function for testing
module.exports = runDbBuild;
