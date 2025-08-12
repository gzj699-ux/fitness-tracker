import { getSession, signIn, signOut } from 'next-auth/react'

export default function Login(){
  return (
    <main style={{maxWidth:520, margin:'40px auto', fontFamily:'-apple-system,system-ui'}}>
      <h2>登录</h2>
      <p>推荐使用 Authing（微信/Apple）。也保留邮箱登录作为兜底。</p>
      <div style={{display:'grid', gap:12, marginTop:16}}>
        <button onClick={()=>signIn('authing', { callbackUrl: '/dashboard' })}>用微信/Apple 登录（Authing）</button>
        <button onClick={()=>signIn('email', { callbackUrl: '/dashboard' })}>邮箱验证码登录</button>
      </div>
    </main>
  )
}
