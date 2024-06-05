import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <div className="h-screen bg-[#FFFC00]">
      <Navbar />
      <Header />
    </div>
  );
}
