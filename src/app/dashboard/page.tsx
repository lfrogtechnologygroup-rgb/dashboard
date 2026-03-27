"use client";

import Header from '@/components/Header';
import GenerateImagesCard from '@/components/GenerateImagesCard';
import GenerateVideosCard from '@/components/GenerateVideosCard';
import LivePreviewCard from '@/components/LivePreviewCard';

export default function DashboardPage() {
  return (
    <div className="flex-col" style={{ padding: '2.5rem', width: '100%', maxWidth: '1400px', margin: '0 auto', minHeight: '100vh' }}>
      
      <Header />

      {/* Main Grid */}
      <div className="flex gap-8 w-full" style={{ alignItems: 'flex-start' }}>
        
        {/* Left Column Controls */}
        <div className="flex-col gap-6" style={{ width: '420px', flexShrink: 0 }}>
          <GenerateImagesCard />
          <GenerateVideosCard />
        </div>

        {/* Right Column Previews */}
        <div className="flex-1 w-full" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem', alignContent: 'start' }}>
          <LivePreviewCard 
            title="Image1" 
            baseUrl="https://skouatixaenecztkzdtw.supabase.co/storage/v1/object/public/testing/short.png" 
            driveLinkId={1}
          />
          <LivePreviewCard 
            title="Image2" 
            baseUrl="https://skouatixaenecztkzdtw.supabase.co/storage/v1/object/public/image2/short.png" 
            driveLinkId={1}
          />
          <LivePreviewCard 
            title="video" 
            baseUrl="https://skouatixaenecztkzdtw.supabase.co/storage/v1/object/public/video/data.mp4" 
            driveLinkId={2}
          />
        </div>

      </div>
    </div>
  );
}
