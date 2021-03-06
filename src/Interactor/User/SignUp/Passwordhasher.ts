import bcrypt from "bcrypt";

export class PasswordHasher {
    constructor(private hashSaltLogRounds: number) {}
    async hash(password: string){
        const salt = await bcrypt.genSalt(this.hashSaltLogRounds);
        const hash = await bcrypt.hash(password,salt);
        return hash;
    }
    async verify (hashPassWord: string, passWordUser: string): Promise<boolean>{
        return await bcrypt.compare(hashPassWord, passWordUser);
    }
}