import Relation, { R } from "castle-relation";
/**
  * 权限 Rule
  * RID RID 自增序号(bigint)
  * RGID RGID 序号(bigint)
  * 权限名称 Title 字符50(char(50))
  * 类型 Type 状态值(tinyint(1))
  * 规则 Rule char250(char(250))
  * 备注 Memo 字符250(char(250))
*/
export default class Rule extends Relation {
    constructor(ctx, table) {
        super(ctx, table)
        this.hasOne({
            name: "Group",
            table: "RuleGroup",
            fields: "RGID,Title,PRGID",
            pk: "RGID"
        })
    }
}
