import * as crypto from 'crypto-js'
/**
 * 密码编码
 * @param pwd 
 * @param secret 
 */
export function password_hash(pwd: string, secret: string) {
    return crypto.enc.Base64.stringify(crypto.HmacSHA256(pwd, secret));
}
/**
 * 密码验证
 * @param pwd 
 * @param hash 
 * @param secret 
 */
export function password_verify(pwd: string, hash: string, secret: string) {
    return hash == password_hash(pwd, secret)
}
