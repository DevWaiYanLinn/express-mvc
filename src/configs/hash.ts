export enum HashDriver {
    bcrypt = 'bcrypt',
    scrypt = 'scrypt',
    argon2 = 'argon2',
}

export type THasConfig = {
    driver: HashDriver
    bcrypt: {
        salt: number;
    };
};
const hash: THasConfig = {
    driver: (process.env.HASH_DRIVER as THasConfig['driver']) || 'bcrypt',
    bcrypt: {
        salt: Number(process.env.SALT) || 10,
    },
};

export default hash;