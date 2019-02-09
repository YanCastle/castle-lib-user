/**
  * 账号 Account
  * AID AID 大数值自增(bigint)
  * 用户编号 UID 大整数(bigint)
  * A A 字符50(char(50))
  * P P 字符50(char(50))
  * S S 状态值(tinyint(1))
  * 类型 Type 字符50(char(50))
*/
export default class Account{
        
    public AID:number=0;    
    public UID:number=0;    
    public A:string="";    
    public P:string="";    
    public S:number=0;    
    public Type:string="";
}