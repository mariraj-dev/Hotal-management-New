const path = require('path');
// let templatePath = path.join(process.cwd(),'')
export default () => ({
    port: parseInt(process.env.PORT, 10) || 3000,
    database: {
        type: 'postgres',
        host: process.env.TYPEORM_HOST,
        username: process.env.TYPEORM_USERNAME,
        password: process.env.TYPEORM_PASSWORD,
        database: process.env.TYPEORM_DATABASE,
        port: parseInt(process.env.TYPEORM_PORT),
        entities: (process.env.TYPEORM_ENTITIES ? process.env.TYPEORM_ENTITIES : "dist/*/.entity.ts").split(','),

    },
})