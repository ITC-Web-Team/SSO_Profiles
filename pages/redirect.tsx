import { useEffect } from 'react';
import { useRouter } from 'next/router';

const RedirectPage = () => {
  const router = useRouter();

  useEffect(() => {
    const token = router.query.accessid;

    if (token) {
      localStorage.clear();
      localStorage.setItem('token', token as string);
      router.push('/profile'); 
    }
  }, [router.query.accessid, router]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-2xl font-semibold">Redirecting...</h1>
    </div>
  );
};

export default RedirectPage;
