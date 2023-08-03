import  mariadb from 'mariadb';
import mysql from 'mysql'
const pool = mariadb.createPool({
    host: 'localhost', 
    user:'root', 
    password: '',
    connectionLimit: 5,
    port: 3306,
    database: 'itaystoredb'
});

async function executeQuery(sqlQuery){
    let conn = null
    try{
    conn = await pool.getConnection()
    return await conn.query(sqlQuery)
    }
    catch(err){
        console.log(err)
    }
    finally{
        if(conn){
            conn.end(); 
        }
        
    }

}

export async function getProduct(partialString){
    return await executeQuery(`select * from products where ProductName like '%${partialString}%'`)
}
console.log(mysql.escape(''))
getProduct('cla')
