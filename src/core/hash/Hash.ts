import hashConfig, { HashDriver } from '../../configs/hash';
import * as bcrypt from 'bcrypt';

class Hash {
    public async make(payload: string, driver?: HashDriver.bcrypt): Promise<string> {
        return bcrypt.hashSync(payload, hashConfig[driver || HashDriver.bcrypt].salt);
    }

    public async check(
        payload: string,
        hash: string,
        driver: string = 'bcrypt',
    ): Promise<boolean> {
        const hashDriver = driver || hashConfig.driver;
        if (hashDriver === 'bcrypt') {
            return bcrypt.compare(payload, hash);
        }
        return false;
    }
}

export default new Hash();
