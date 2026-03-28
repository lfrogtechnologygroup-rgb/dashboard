"use client";

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';

export default function Header() {
  const router = useRouter();
  const [dbStatus, setDbStatus] = useState('Fetching status...');

  useEffect(() => {
    async function fetchStatus() {
      try {
        const { data, error } = await supabase.from('your_table_name').select('*');
        if (error) {
          console.error("Supabase Error:", error.message);
          return;
        }
        if (data && data.length > 0) {
          // Frontend-side filtering to avoid case-sensitive ID challenges
          const row = data.find(d => d.id === 1 || String(d.ID) === '1');
          if (row && row.status) {
            setDbStatus(row.status);
          } else {
            console.log("Row 1 not found in data", data);
          }
        }
      } catch (err) {
        console.error("Fetch error:", err);
      }
    }
    
    // Initial fetch immediately
    fetchStatus();
    
    // Setup Supabase Realtime just in case it is enabled on the table
    const channel = supabase.channel('table-db-changes')
      .on(
        'postgres_changes',
        { event: '*', schema: 'public', table: 'your_table_name' },
        (payload) => {
          fetchStatus(); // Force fresh fetch on any change
        }
      )
      .subscribe();
    
    // Fallback polling every 1 second for absolute immediate freshness if realtime is disabled
    const interval = setInterval(fetchStatus, 1000);
    
    return () => {
      clearInterval(interval);
      supabase.removeChannel(channel);
    };
  }, []);

  return (
    <header className="header-container">
      <div>
        <h1 className="gradient-text" style={{ fontSize: '1.875rem', fontWeight: 700, margin: 0, letterSpacing: '-0.025em' }}>Creator Studio</h1>
        <p style={{ fontSize: '0.875rem', fontWeight: 500, color: '#E5E7EB', margin: 0 }}>Manage your content generation pipeline</p>
      </div>
      <div className="header-actions">
        <div className="badge-status">
          <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#3B82F6' }}></span>
          Status: {dbStatus}
        </div>
        <div className="badge-status" style={{ borderColor: 'rgba(16, 185, 129, 0.3)', color: '#10B981' }}>
          <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#10B981' }}></span>
          System Operational
        </div>
        
        <button 
          onClick={() => window.location.reload()} 
          className="btn btn-secondary flex items-center gap-2" 
          style={{ padding: '0.4rem 0.75rem', fontSize: '0.75rem', height: 'fit-content' }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 4 23 10 17 10"></polyline><polyline points="1 20 1 14 7 14"></polyline><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"></path></svg>
          Force Refresh
        </button>

        {/* Profile & Logout in the top right */}
        <div className="flex items-center gap-3" style={{ marginLeft: 'auto', borderLeft: '1px solid #2A2A36', paddingLeft: '1.5rem' }}>
          <div className="avatar-circle">N</div>
          <a href="/" className="flex items-center gap-2" style={{ fontSize: '0.875rem', fontWeight: 500, color: '#9CA3AF', transition: 'color 0.2s', textDecoration: 'none' }} onMouseOver={(e) => e.currentTarget.style.color = '#fff'} onMouseOut={(e) => e.currentTarget.style.color = '#9CA3AF'}>
             <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path><polyline points="16 17 21 12 16 7"></polyline><line x1="21" y1="12" x2="9" y2="12"></line></svg>
             Logout
          </a>
        </div>
      </div>
    </header>
  );
}
