import hashConfig from '../../configs/hash';
import * as bcrypt from 'bcrypt';
import type { TDriver } from '../../configs/hash';

class Hash {
    public async make(payload: string, driver: TDriver | null | undefined) : Promise<boolean|string> {
        const hashDriver = driver || hashConfig.driver;
        if (hashDriver === 'bcrypt') {
            return bcrypt.hashSync(payload, hashConfig[hashDriver].salt);
        }
        return false
    }

    public async check(
        payload: string,
        hash: string,
        driver: TDriver | null | undefined
    ) : Promise<boolean> {
		const hashDriver = driver || hashConfig.driver;
		if (hashDriver === 'bcrypt') {
			return bcrypt.compare(payload, hash);
        }
		return false;
    }
}

export default new Hash();
