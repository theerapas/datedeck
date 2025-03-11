import Image from "next/image";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Test from "./components/Test";

export default function Home() {
  return (
    <div className="items-center justify-center">
      <Navbar />
      <Hero />
    </div>
  );
}