import Relation, { R } from "castle-relation";
/**
  * 用户 Users
  * 用户编号 UID 大数值自增(bigint)
  * 姓名 Name 字符50(char(50))
  * 性别 Sex 状态值(tinyint(1))
  * 电话 Tel 字符50(char(50))
  * 微信 Wechat 字符50(char(50))
  * QQ QQ 字符50(char(50))
  * DToken DToken 字符50(char(50))
*/
export default class Users extends Relation{    
    constructor(ctx,table){
        super(ctx,table)
    }
}
