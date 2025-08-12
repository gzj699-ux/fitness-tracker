import Link from 'next/link'
export default function Home(){
  return (
    <main style={{maxWidth:900, margin:'36px auto', fontFamily:'-apple-system,system-ui,Segoe UI,Roboto'}}>
      <h1>训练打卡 · 云端版（多人/教练只读）</h1>
      <p>登录后即可跨设备同步；支持邀请教练只读查看。</p>
      <div style={{display:'flex', gap:12, marginTop:16}}>
        <Link href="/login">登录</Link>
        <Link href="/dashboard">我的面板</Link>
        <Link href="/coach">教练视图</Link>
      </div>
    </main>
  )
}
