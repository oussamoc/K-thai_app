import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, Clock, MapPin, Phone } from "lucide-react";
import { IMAGES, RESTAURANT } from "../data/menu";

const MaskedLine = ({ children, delay }) => (
    <span className="block overflow-hidden pb-1">
        <motion.span
            className="block"
            initial={{ y: "115%" }}
            animate={{ y: 0 }}
            transition={{ duration: 1, delay, ease: [0.16, 1, 0.3, 1] }}
        >
            {children}
        </motion.span>
    </span>
);

export const Hero = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    });
    const imgY = useTransform(scrollYProgress, [0, 1], [0, 130]);
    const fade = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

    return (
        <section
            id="top"
            ref={ref}
            data-testid="hero-section"
            className="relative min-h-screen flex items-center overflow-hidden pt-24 pb-16"
        >
            <div
                className="absolute inset-0 pointer-events-none"
                style={{
                    background:
                        "radial-gradient(ellipse 60% 50% at 75% 40%, rgba(212,175,55,0.13), transparent 65%), radial-gradient(ellipse 50% 40% at 15% 85%, rgba(212,175,55,0.07), transparent 60%)",
                }}
            />

            <div className="relative max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-14 lg:gap-8 items-center w-full">
                <motion.div style={{ opacity: fade }}>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                        className="flex flex-wrap items-center gap-3 mb-8"
                    >
                        <span className="rounded-full border border-[#D4AF37]/40 bg-[#D4AF37]/10 px-4 py-1.5 text-[11px] uppercase tracking-[0.25em] text-[#F3C649]">
                            Cuisine maison
                        </span>
                        <span className="rounded-full border border-zinc-700 px-4 py-1.5 text-[11px] uppercase tracking-[0.25em] text-zinc-400">
                            Produits frais
                        </span>
                    </motion.div>

                    <h1 className="font-serif-display text-5xl sm:text-6xl lg:text-7xl font-semibold leading-[1.02] tracking-tight">
                        <MaskedLine delay={0.25}>L'ASIE</MaskedLine>
                        <MaskedLine delay={0.4}>
                            <em className="gold-text not-italic font-bold">
                                dans l'assiette
                            </em>
                        </MaskedLine>
                    </h1>

                    <motion.p
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.9, delay: 0.65 }}
                        className="mt-7 max-w-xl text-base sm:text-lg text-zinc-400 font-light leading-relaxed"
                    >
                        Restaurant thaïlandais à Talence. Wok, citronnelle,
                        lait de coco et basilic thaï — chaque plat est préparé
                        minute, sur place, à emporter ou livré chez vous.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.9, delay: 0.8 }}
                        className="mt-10 flex flex-wrap items-center gap-4"
                    >
                        <a
                            href={`tel:${RESTAURANT.phoneClean}`}
                            data-testid="hero-call-button"
                            className="group flex items-center gap-3 rounded-full bg-[#D4AF37] px-7 py-4 text-sm font-bold text-black transition-all duration-300 hover:bg-[#F3C649] hover:shadow-[0_0_40px_rgba(212,175,55,0.45)]"
                        >
                            <Phone size={16} className="transition-transform duration-300 group-hover:rotate-12" />
                            Commander · {RESTAURANT.phone}
                        </a>
                        <a
                            href="#carte"
                            data-testid="hero-menu-button"
                            className="group flex items-center gap-2 rounded-full border border-zinc-700 px-7 py-4 text-sm font-medium text-zinc-200 transition-all duration-300 hover:border-[#D4AF37]/60 hover:text-[#F3C649]"
                        >
                            Découvrir la carte
                            <ArrowDown size={15} className="transition-transform duration-300 group-hover:translate-y-1" />
                        </a>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 1 }}
                        className="mt-12 flex flex-wrap gap-x-8 gap-y-3 text-sm text-zinc-500"
                    >
                        <span className="flex items-center gap-2">
                            <Clock size={14} className="text-[#D4AF37]" />
                            Lun–Ven · 11h30–14h00 · 19h00–21h30
                        </span>
                        <span className="flex items-center gap-2">
                            <MapPin size={14} className="text-[#D4AF37]" />
                            {RESTAURANT.address}
                        </span>
                    </motion.div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.94 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.2, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    className="relative mx-auto w-full max-w-md lg:max-w-none"
                >
                    <div className="relative rounded-t-[999px] rounded-b-3xl border border-[#D4AF37]/30 p-3 shadow-[0_0_60px_rgba(212,175,55,0.15)]">
                        <div className="overflow-hidden rounded-t-[999px] rounded-b-2xl">
                            <motion.img
                                style={{ y: imgY }}
                                src={IMAGES.heroPadThai}
                                alt="Pad Thaï aux crevettes, plat signature de K-THAI"
                                data-testid="hero-dish-image"
                                className="h-[420px] sm:h-[520px] lg:h-[560px] w-full object-cover scale-110"
                            />
                        </div>
                        <div className="absolute -left-4 bottom-10 rounded-2xl border border-[#D4AF37]/30 bg-[#121214]/90 backdrop-blur-md px-5 py-3 shadow-[0_0_30px_rgba(212,175,55,0.2)]">
                            <p className="text-[10px] uppercase tracking-[0.25em] text-zinc-400">
                                Plat signature
                            </p>
                            <p className="font-serif-display text-xl text-[#F3C649] font-semibold">
                                Pad Thaï · 13,50 €
                            </p>
                        </div>
                        <div className="absolute -right-3 top-16 rounded-full border border-[#D4AF37]/40 bg-[#0A0A0B]/90 backdrop-blur-md px-4 py-3 text-center">
                            <p className="text-[10px] uppercase tracking-[0.2em] text-zinc-400 leading-tight">
                                Livraison
                                <br />
                                <span className="text-[#F3C649] font-bold">gratuite</span>
                                <br />
                                dès 25 €
                            </p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};
