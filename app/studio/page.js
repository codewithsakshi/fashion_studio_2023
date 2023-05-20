'use client';
 
import { useRouter } from 'next/navigation';
 
export default function Studio() {
  const router = useRouter();
 
  return (
    <button type="button" onClick={() => router.push('/studio/feed')}>
      FEED
    </button>
  );
}