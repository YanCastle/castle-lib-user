import BaseController from 'castle-controller/dist/base_controller'
import { Models } from '../iface/models';
import { password_verify } from '../utils';

export default class LibUser extends BaseController {
    async login(Account: string, PWD: string) {
        let a: any = this.M(Models.Account).where({ A: Account }).find();
        if (a && password_verify(PWD, a.P, this._ctx._config.Secret || "123456")) {
            await this._session("UID", a.UID);

            return a;
        }
        return false;
    }
    async logout() {
        await this._session("UID", 0);
        await this._session(null);
        return true;
    }
    async bindAccount(UID: number, Account: string) { }
    async regist(Account: string, PWD: string, ) { }
    async forget() { }
    async forbiden() { }
    async unforbiden() { }
}