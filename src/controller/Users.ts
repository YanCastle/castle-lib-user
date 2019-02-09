import Controller from "castle-controller/dist/controller";

export default class Users extends Controller {
    get _KeywordFields() {
        return ['Name', 'Wechat', 'QQ', 'Tel']
    }
    get _KeywordTable() {
        return 'Users'
    }
    async add() { throw new Error("禁止操作") }
    async save() { throw new Error("禁止操作") }
    async saveW() { throw new Error("禁止操作") }
    async adds() { throw new Error("禁止操作") }
    async del() { throw new Error("禁止操作") }
    async delW() { throw new Error("禁止操作") }
    async replaceW() { throw new Error("禁止操作") }
}