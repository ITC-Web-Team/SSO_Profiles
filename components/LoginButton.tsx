import { FC } from 'react';
import { useRouter } from 'next/router';

const LoginButton: FC = () => {
  const router = useRouter();

  const handleLogin = () => {
    router.push('http://localhost:8000/project/e2a23a12-2a8e-4af0-80ec-64971b76d4f0/ssocall');
  };

  return (
    <button
      className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
      onClick={handleLogin}
    >
      Login with SSO
    </button>
  );
};

export default LoginButton;
