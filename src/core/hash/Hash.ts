import hashConfig from "../../config/hash";
import * as bcrypt from "bcrypt";

class Hash {
  public async make(payload: string, driver:string|null|undefined) {
    const hasDriver = driver || hashConfig.driver;
    if (hasDriver === "bcrypt") {
      return bcrypt.hashSync(payload, hashConfig[hasDriver].salt);
    }
  }

  public async check(payload:string, hash:string) {
    return bcrypt.compare(payload, hash)
  }
}

export default new Hash();