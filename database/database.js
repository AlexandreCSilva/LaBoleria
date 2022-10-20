import pg from 'pg';

const { Pool } = pg;

const dataBase = new Pool({
    user: 'postgres',
    password: '05062001M@du',
    connectionString: process.env.DATABASE_URL,
    database: 'LaBoleria',
})

export { dataBase };