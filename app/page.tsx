// import Image from "next/image";

import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { FaBook, FaHome } from "react-icons/fa";
import { FaBookAtlas, FaPhone } from "react-icons/fa6";

export default function Home() {
  return (
    <main className="relative flex flex-col items-center justify-center min-h-screen py-2 overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={[
          { name: "Home", link: "/", icon: <FaHome /> },
          { name: "About", link: "/about", icon: <FaBook />},
          { name: "Projects", link: "/projects", icon: <FaBookAtlas /> },
          { name: "Contact", link: "/contact", icon: <FaPhone /> },
        ]} />
        <Hero />
        <Grid />
      </div>
    </main>
  );
}
