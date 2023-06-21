export enum TDriver {
    bcrypt = 'bcrypt',
    scrypt = 'scrypt',
    argon2 = 'argon2',
}
export type THasConfig = {
    driver: TDriver;
    bcrypt: {
        salt: number;
    };
};
export default {
    driver: process.env.HASH_DRIVER || 'bcrypt',
    bcrypt: {
        salt: process.env.SALT || 10,
    },
};
