"use client";

import { useRouter } from "next/navigation";
import Header from "@/components/organism/header";
import Footer from "@/components/organism/footer";
import CanvaAnimated from "@/components/molecules/canvaAnimated"

export default function Home() {
  return (
    <div className="min-h-screen relative overflow-x-hidden">
      <Header />
      <main className="w-full">
        <CanvaAnimated />
      </main>
      <Footer />
    </div>
  );
}
