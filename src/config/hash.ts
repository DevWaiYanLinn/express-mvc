export default {
    driver:  process.env.HASH_DRIVER  || 'bcrypt',
    bcrypt:{
        salt: process.env.SALT || 10,
    }
}