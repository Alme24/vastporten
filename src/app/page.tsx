import { Title } from "@/components/molecules/Title";
import Image from "next/image";
import Button from "@/components/molecules/boton";
import Header from "@/components/organism/header";
import Footer from "@/components/organism/footer";
import CanvaAnimated from "@/components/molecules/canvaAnimated"

export default function Home() {
  return (
    <div className="min-h-screen relative overflow-x-hidden">
      <Header/>
      <main className="w-full">
        <CanvaAnimated />
      </main>
      <Footer />
    </div>
  );
}
