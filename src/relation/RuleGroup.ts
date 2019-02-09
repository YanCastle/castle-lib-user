import Relation, { R } from "castle-relation";
/**
  * 权限组 RuleGroup
  * RGID RGID 自增序号(bigint)
  * 组名 Title 字符50(char(50))
  * PRGID PRGID 序号(bigint)
*/
export default class RuleGroup extends Relation{    
    constructor(ctx,table){
        super(ctx,table)
    }
}
