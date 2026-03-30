"use client";

import { useState, useEffect, useRef } from 'react';
import { supabase } from '@/lib/supabase';

interface LivePreviewCardProps {
  title?: string;
  baseUrl: string;
  driveLinkId?: number;
}

export default function LivePreviewCard({ title = "Live Preview", baseUrl, driveLinkId }: LivePreviewCardProps) {
  const [timestamp, setTimestamp] = useState(Date.now());
  const [driveLink, setDriveLink] = useState('');
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.pause();
    }
  }, [baseUrl]);

  useEffect(() => {
    // Fetch custom drive link from Supabase
    async function fetchDriveLink() {
      if (!driveLinkId) return;
      try {
        const { data } = await supabase.from('files').select('id, link');
        if (data) {
          // Robust client-side matcher for ID to avoid case-sensitivity issues
          const row = data.find((d: any) => d.id === driveLinkId || String(d.ID) === String(driveLinkId));
          if (row && row.link) {
            setDriveLink(row.link);
          }
        }
      } catch (err) {
        console.error("Error fetching drive link:", err);
      }
    }
    fetchDriveLink();

    // If the URL is a video, continuously refreshing the src every 3 seconds will restart playback constantly and look awful.
    // So we only enable automatic 3-second cache-busting sweeps for images! Videos rely on the 'Force Refresh' button!
    if (baseUrl.toLowerCase().endsWith('.mp4')) return;

    const interval = setInterval(() => {
      setTimestamp(Date.now());
    }, 3000);
    return () => clearInterval(interval);
  }, [baseUrl]);

  // Only append cache-busting timestamp for images. 
  // Videos don't strictly need it and some servers reject query params on mp4 files.
  const isVideo = baseUrl.toLowerCase().endsWith('.mp4');
  const previewUrl = isVideo ? baseUrl : `${baseUrl}?t=${timestamp}`;

  return (
    <div className="card-solid flex-col w-full" style={{ background: '#0F0F15', padding: '1.5rem', display: 'flex' }}>
      
      <div className="flex justify-between items-center" style={{ marginBottom: '1rem' }}>
        <h2 style={{ fontWeight: 700, fontSize: '1.25rem', color: '#fff' }}>{title}</h2>
        <span style={{ fontSize: '0.75rem', fontWeight: 600, color: '#9CA3AF' }}>Latest Output</span>
      </div>

      {/* Video/Image Box */}
      <div className="w-full relative fade-in" style={{ minHeight: '300px', borderRadius: '12px', overflow: 'hidden', border: '1px solid #2A2A36', display: 'flex', justifyContent: 'center', alignItems: 'center', background: '#0B0B11' }}>
        {isVideo ? (
          <video 
            src={previewUrl} 
            ref={videoRef}
            controls
            onLoadedMetadata={(e) => e.currentTarget.pause()}
            style={{ maxWidth: '100%', maxHeight: '400px', width: '100%', objectFit: 'contain' }} 
            autoPlay={false}
            preload="none"
            muted 
            playsInline
          >
            Your browser does not support the video tag.
          </video>
        ) : (
          <img 
            src={previewUrl} 
            alt={`${title} output`} 
            style={{ maxWidth: '100%', maxHeight: '400px', objectFit: 'contain', transition: 'opacity 0.3s ease-in-out' }} 
            onError={(e) => { e.currentTarget.style.opacity = '0'; }}
            onLoad={(e) => { e.currentTarget.style.opacity = '1'; }}
          />
        )}
      </div>

      {/* Drive Link Button */}
      <a 
        href={driveLink || baseUrl} 
        target="_blank" 
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-2 w-full" 
        style={{ 
          marginTop: '1.25rem',
          background: 'rgba(255, 255, 255, 0.05)', 
          border: '1px solid rgba(255, 255, 255, 0.1)', 
          padding: '0.6rem', 
          borderRadius: '8px',
          color: '#E0E7FF',
          fontSize: '0.85rem',
          fontWeight: 600,
          textDecoration: 'none',
          transition: 'background 0.2s ease'
        }}
        onMouseOver={(e) => e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)'}
        onMouseOut={(e) => e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)'}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
        Drive Link
      </a>

    </div>
  );
}
