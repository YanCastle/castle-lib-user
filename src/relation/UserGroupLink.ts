import Relation, { R } from "castle-relation";
/**
  * 用户分组 UserGroupLink
  * UGLID UGLID 自增序号(bigint)
  * 用户编号 UID 大整数(bigint)
  * UGID UGID 大整数(bigint)
*/
export default class UserGroupLink extends Relation{    
    constructor(ctx,table){
        super(ctx,table)
    }
}
