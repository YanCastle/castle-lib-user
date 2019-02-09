import BaseController from "castle-controller/dist/base_controller";
import LibUser from "../lib/User";

export default class Account extends BaseController {
    protected _user: LibUser;
    constructor(ctx: any) {
        super(ctx);
        this._user = new LibUser(ctx);
    }
    async login({ Account, PWD }) {
        return await this._user.login(Account, PWD);
    }
    async logout() {
        return await this._user.logout();
    }
    async regist() { }
    async forget() { }
    async forbiden() { }
    async unforbiden() { }
}