import { useEffect } from "react";
import Lenis from "lenis";
import "@/App.css";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Marquee } from "@/components/Marquee";
import { Manifesto } from "@/components/Manifesto";
import { MenuSection } from "@/components/MenuSection";
import { Infos } from "@/components/Infos";
import { Contact } from "@/components/Contact";
import { Footer, StickyCallBar } from "@/components/Footer";

function App() {
    useEffect(() => {
        const lenis = new Lenis({ lerp: 0.09, anchors: true });
        let rafId;
        const raf = (time) => {
            lenis.raf(time);
            rafId = requestAnimationFrame(raf);
        };
        rafId = requestAnimationFrame(raf);
        return () => {
            cancelAnimationFrame(rafId);
            lenis.destroy();
        };
    }, []);

    return (
        <div className="grain bg-[#0A0A0B] text-[#FAF9F5] min-h-screen">
            <Navbar />
            <main>
                <Hero />
                <Marquee />
                <Manifesto />
                <MenuSection />
                <Infos />
                <Contact />
            </main>
            <Footer />
            <StickyCallBar />
            <div className="h-[76px] md:hidden" />
        </div>
    );
}

export default App;
