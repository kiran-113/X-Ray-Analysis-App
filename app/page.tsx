"use client";

import { useState } from "react";
import ImageUpload from "./components/ImageUpload";
import PlantInfo from "./components/PlantInfo";
import FeatureCard from "./components/FeatureCard";
import Footer from "./components/Footer";
import { XrayInfoType } from "@/types/types";

export default function Home() {
  const [plantInfo, setXrayInfo] = useState<XrayInfoType | null>(null);
  const [imageUrl, setImageUrl] = useState<string | null>(null);

  return (
    <main className="min-h-screen bg-gradient-to-br from-orange-900 to-green-900 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold text-center mb-8 text-white drop-shadow-md">
          X-Ray-Analysis
        </h1>
        <p className="text-center mb-8 text-gray-200 text-lg">
        Upload a high-quality X-ray image and let our AI detect key features and potential abnormalities.
        Receive clear, data-driven insights to better understand your health and well-being.
        </p>
        <ImageUpload setXrayInfo={setXrayInfo} setImageUrl={setImageUrl} />
        {plantInfo && <PlantInfo info={plantInfo} imageUrl={imageUrl} />}
        <FeatureCard />
      </div>
      <Footer />
    </main>
  );
}
