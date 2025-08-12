// pages/index.tsx
import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function Home() {
  const router = useRouter();
  useEffect(() => {
    router.replace('/login'); // 没有登录页就改成 /dashboard
  }, [router]);

  return <div style={{padding:20}}>正在跳转…</div>;
}
