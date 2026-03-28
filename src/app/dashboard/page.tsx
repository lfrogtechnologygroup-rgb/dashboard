"use client";

import Header from '@/components/Header';
import GenerateImagesCard from '@/components/GenerateImagesCard';
import GenerateVideosCard from '@/components/GenerateVideosCard';
import LivePreviewCard from '@/components/LivePreviewCard';

export default function DashboardPage() {
  return (
    <div className="dashboard-container">
      
      <Header />

      {/* Main Grid */}
      <div className="main-grid">
        
        {/* Left Column Controls */}
        <div className="left-sidebar">
          <GenerateImagesCard />
          <GenerateVideosCard />
        </div>

        {/* Right Column Previews */}
        <div className="right-previews">
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
