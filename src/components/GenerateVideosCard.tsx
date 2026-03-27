export default function GenerateVideosCard() {
  return (
    <div className="card-solid flex-col" style={{ padding: '1.5rem' }}>
       <div className="flex items-center gap-3" style={{ marginBottom: '1.5rem' }}>
          <div className="flex items-center justify-center" style={{ width: '36px', height: '36px', borderRadius: '8px', background: 'rgba(236, 72, 153, 0.1)', color: '#F472B6' }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18"></rect><line x1="7" y1="2" x2="7" y2="22"></line><line x1="17" y1="2" x2="17" y2="22"></line><line x1="2" y1="12" x2="22" y2="12"></line><line x1="2" y1="7" x2="7" y2="7"></line><line x1="2" y1="17" x2="7" y2="17"></line><line x1="17" y1="17" x2="22" y2="17"></line><line x1="17" y1="7" x2="22" y2="7"></line></svg>
          </div>
          <h2 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#fff' }}>Generate Videos</h2>
        </div>

        {/* Sub-item 1 */}
        <div className="flex-col" style={{ marginBottom: '1.5rem' }}>
           <div className="flex justify-between items-center" style={{ marginBottom: '0.25rem' }}>
              <span style={{ fontWeight: 600, fontSize: '0.875rem', color: '#fff' }}>Blog Post Video</span>
              <span className="badge-small">FAST</span>
           </div>
           <p style={{ fontSize: '0.75rem', color: '#9CA3AF', marginBottom: '0.75rem' }}>Quick generation with default settings.</p>
           
           <a 
             href="https://leapfrog.app.n8n.cloud/form/d89edf8b-e816-46d2-804c-6514f98a1c5a" 
             target="_blank" 
             rel="noopener noreferrer"
             className="btn btn-secondary flex justify-center gap-2" 
             style={{ width: '100%', padding: '0.75rem', textDecoration: 'none' }}
           >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
              Run Process
           </a>
        </div>

        {/* Sub-item 2 */}
        <div className="flex-col">
           <div className="flex justify-between items-center" style={{ marginBottom: '0.25rem' }}>
              <span style={{ fontWeight: 600, fontSize: '0.875rem', color: '#fff' }}>Dynamic Trigger</span>
              <span className="badge-small blue">CUSTOM</span>
           </div>
           <p style={{ fontSize: '0.75rem', color: '#9CA3AF', marginBottom: '0.75rem' }}>Open configuration for tailored content.</p>
           <button className="btn btn-secondary flex justify-center gap-2" style={{ width: '100%', padding: '0.75rem' }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>
              Configure & Run
           </button>
        </div>
    </div>
  );
}
