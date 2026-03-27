export default function GenerateImagesCard() {
  return (
    <div className="card-solid flex-col" style={{ padding: '1.5rem' }}>
      <div className="flex items-center gap-3" style={{ marginBottom: '1rem' }}>
        <div className="flex items-center justify-center" style={{ width: '36px', height: '36px', borderRadius: '8px', background: 'rgba(236, 72, 153, 0.1)', color: '#F472B6' }}>
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
            <circle cx="8.5" cy="8.5" r="1.5"></circle>
            <polyline points="21 15 16 10 5 21"></polyline>
          </svg>
        </div>
        <h2 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#fff' }}>Generate Images</h2>
      </div>
      <p style={{ fontSize: '0.875rem', fontWeight: 500, color: '#fff', marginBottom: '0.25rem' }}>Create stunning visuals for your campaigns.</p>
      <p style={{ fontSize: '0.875rem', color: '#9CA3AF', marginBottom: '1.5rem' }}>Automatically uploads to Instagram & Facebook.</p>
      
      <a 
        href="https://leapfrog.app.n8n.cloud/form/13b8cc78-3940-4d15-a2b4-328f3e61dacf" 
        target="_blank" 
        rel="noopener noreferrer"
        className="btn btn-secondary flex justify-center gap-2" 
        style={{ width: '100%', padding: '0.75rem', textDecoration: 'none' }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>
        Start Generation
      </a>
    </div>
  );
}
