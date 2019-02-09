import { DbDataType } from "castle-model";
/**
  * 用户分组 UserGroupLink
  * UGLID UGLID 自增序号(bigint)
  * 用户编号 UID 大整数(bigint)
  * UGID UGID 大整数(bigint)
*/
export default {    
    UGLID:{
        type:DbDataType.bigint,
        primaryKey:true,
        autoIncrement:true,
        defaultValue:0,
        allowNull:false
    },    
    UID:{
        type:DbDataType.bigint,
        primaryKey:false,
        autoIncrement:false,
        defaultValue:0,
        allowNull:false
    },    
    UGID:{
        type:DbDataType.bigint,
        primaryKey:false,
        autoIncrement:false,
        defaultValue:0,
        allowNull:false
    },
}