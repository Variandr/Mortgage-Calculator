//psql --host=ec2-52-48-159-67.eu-west-1.compute.amazonaws.com --port=5432 --username=zmgqzlkavwrbzp --password --dbname=d9d109fu1h6c5c
//password: 866828a7f02cb4c998aefb821959c0428975c81fed981373037d71a1c8f4bde5
const Pool = require('pg').Pool;
const pool = new Pool({
    connectionString: "postgres://zmgqzlkavwrbzp:866828a7f02cb4c998aefb821959c0428975c81fed981373037d71a1c8f4bde5@ec2-52-48-159-67.eu-west-1.compute.amazonaws.com:5432/d9d109fu1h6c5c",
    ssl: {
        rejectUnauthorized: false,
    }
})
module.exports = pool;