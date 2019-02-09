/**
  * 用户组 UserGroup
  * UGID UGID 自增序号(bigint)
  * 组名 Title 字符50(char(50))
  * 父组号 PUGID 序号(bigint)
  * 备注 Memo 字符50(char(50))
*/
export default class UserGroup{
        
    public UGID:number=0;    
    public Title:string="";    
    public PUGID:number=0;    
    public Memo:string="";
}