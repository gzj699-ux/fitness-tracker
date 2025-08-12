
import { useEffect, useState } from 'react'
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY)

export default function Home() {
  const [logs, setLogs] = useState([])
  const [activity, setActivity] = useState('')
  const [feeling, setFeeling] = useState('')

  useEffect(() => {
    fetchLogs()
  }, [])

  async function fetchLogs() {
    const { data } = await supabase.from('logs').select('*').order('created_at', { ascending: false })
    setLogs(data || [])
  }

  async function addLog() {
    await supabase.from('logs').insert({ activity, feeling })
    setActivity('')
    setFeeling('')
    fetchLogs()
  }

  return (
    <div style={{ padding: 20 }}>
      <h1>健身打卡系统</h1>
      <input placeholder="今天练了什么" value={activity} onChange={e => setActivity(e.target.value)} />
      <input placeholder="感受" value={feeling} onChange={e => setFeeling(e.target.value)} />
      <button onClick={addLog}>提交</button>
      <ul>
        {logs.map(log => (
          <li key={log.id}>{log.activity} - {log.feeling} ({log.created_at})</li>
        ))}
      </ul>
    </div>
  )
}
