module.exports = {
    dialect: 'postgres',
    host: 'localhost',
    username: 'postgres',
    password: '1234',
    database: 'sqlnode',
    define: {
        timestamps: true, //ele coloca pardão o createdOn e o update on
        underscored: true,   // deixa padrão os nomes das tabelaa: type_user com o undersocre - underline
    }
};