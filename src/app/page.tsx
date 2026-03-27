"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (email === 'lfrogtechnologygroup@gmail.com' && password === 'Lfrog@123') {
      router.push('/dashboard');
    } else {
      setError('Invalid email or password.');
    }
  };

  return (
    <main className="flex items-center justify-center w-full h-full" style={{ minHeight: '100vh' }}>
      <div className="card-solid flex-col" style={{ width: '420px', maxWidth: '90%', padding: '2.5rem' }}>
        <h1 className="gradient-text" style={{ fontSize: '1.875rem', fontWeight: 600, marginBottom: '0.25rem', textAlign: 'center' }}>Creator Studio</h1>
        <p className="text-secondary" style={{ fontSize: '0.875rem', marginBottom: '2.5rem', textAlign: 'center' }}>Manage your content generation pipeline</p>

        <form onSubmit={handleLogin} className="flex-col w-full" style={{ gap: '1.25rem' }}>
          <div className="flex-col gap-2">
            <label style={{ fontSize: '0.875rem', fontWeight: 600, color: '#fff' }}>Email</label>
            <input 
              type="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="input-field"
              placeholder="lfrogtechnologygroup@gmail.com"
              required
            />
          </div>

          <div className="flex-col gap-2">
            <label style={{ fontSize: '0.875rem', fontWeight: 600, color: '#fff' }}>Password</label>
            <input 
              type="password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="input-field"
              placeholder="••••••••"
              required
            />
          </div>

          {error && <p style={{ fontSize: '0.75rem', color: '#F87171' }}>{error}</p>}

          <button type="submit" className="btn btn-primary w-full" style={{ marginTop: '1rem' }}>
            Sign In
          </button>
        </form>
      </div>
    </main>
  );
}
