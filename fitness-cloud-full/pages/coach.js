import useSWR from 'swr'
const fetcher = u => fetch(u).then(r=>r.json())
export default function Coach(){
  const { data } = useSWR('/api/coach/students', fetcher)
  const students = data?.students || []
  return (
    <main style={{maxWidth:900, margin:'36px auto', fontFamily:'-apple-system,system-ui'}}>
      <h2>教练视图（只读）</h2>
      <div style={{display:'grid', gap:8}}>
        {students.length===0 && <div>还没有学员授权给你。</div>}
        {students.map(s=>(
          <div key={s.user_id} style={{background:'#fff', padding:12, borderRadius:10}}>
            <b>{s.name || s.email || s.user_id}</b> · 过去7天训练 {s.last7_sessions} 次 · 总时长 {s.last7_minutes} 分钟
          </div>
        ))}
      </div>
    </main>
  )
}
