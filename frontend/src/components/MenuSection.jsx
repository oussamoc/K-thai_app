import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Phone } from "lucide-react";
import { Eyebrow, Reveal } from "./Reveal";
import { IMAGES, MENU, RESTAURANT } from "../data/menu";

const TABS = [MENU.entrees, MENU.plats, MENU.desserts];

const Card = ({ item, index }) => (
    <motion.div
        data-testid={`menu-item-${item.name.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -12 }}
        transition={{ duration: 0.5, delay: index * 0.05, ease: [0.16, 1, 0.3, 1] }}
        className={`group relative flex flex-col justify-between rounded-2xl border p-6 transition-all duration-500 ${
            item.featured
                ? "border-[#D4AF37]/50 bg-gradient-to-b from-[#D4AF37]/10 to-transparent shadow-[0_0_40px_rgba(212,175,55,0.12)]"
                : "border-zinc-800 bg-[#121214]/60 hover:border-[#D4AF37]/40 hover:bg-[#1A1A1E]"
        }`}
    >
        <div>
            <div className="flex items-start justify-between gap-4">
                <h3 className="font-serif-display text-xl sm:text-2xl font-semibold text-zinc-50 leading-snug">
                    {item.name}
                </h3>
                <span className="font-serif-display text-xl font-bold gold-text whitespace-nowrap">
                    {item.price}
                </span>
            </div>
            <p className="mt-3 text-sm text-zinc-400 font-light leading-relaxed">
                {item.desc}
            </p>
        </div>
        <span className="mt-5 inline-flex w-fit rounded-full border border-[#D4AF37]/30 bg-[#D4AF37]/10 px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-[#F3C649]">
            {item.tag}
        </span>
    </motion.div>
);

export const MenuSection = () => {
    const [active, setActive] = useState("plats");
    const current = TABS.find((t) => t.id === active);

    return (
        <section id="carte" data-testid="menu-section" className="relative py-28 lg:py-36">
            <div
                className="absolute inset-0 pointer-events-none"
                style={{
                    background:
                        "radial-gradient(ellipse 55% 40% at 50% 0%, rgba(212,175,55,0.08), transparent 60%)",
                }}
            />
            <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
                <Reveal className="text-center">
                    <Eyebrow>La Carte</Eyebrow>
                    <h2 className="mt-5 font-serif-display text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight">
                        Des saveurs qui <span className="gold-text">voyagent</span>
                    </h2>
                    <p className="mt-4 text-base text-zinc-400 font-light max-w-xl mx-auto">
                        Commandes uniquement par téléphone, préparées minute au wok.
                    </p>
                </Reveal>

                <Reveal delay={0.15} className="mt-12">
                    <div
                        data-testid="menu-tabs"
                        className="flex flex-wrap justify-center gap-2 sm:gap-3"
                    >
                        {TABS.map((tab) => (
                            <button
                                key={tab.id}
                                data-testid={`menu-tab-${tab.id}`}
                                onClick={() => setActive(tab.id)}
                                className={`relative rounded-full px-6 py-3 text-sm font-medium transition-colors duration-300 ${
                                    active === tab.id
                                        ? "text-black"
                                        : "text-zinc-400 hover:text-[#F3C649] border border-zinc-800"
                                }`}
                            >
                                {active === tab.id && (
                                    <motion.span
                                        layoutId="tab-pill"
                                        className="absolute inset-0 rounded-full bg-[#D4AF37]"
                                        transition={{ type: "spring", stiffness: 350, damping: 32 }}
                                    />
                                )}
                                <span className="relative z-10">{tab.label}</span>
                            </button>
                        ))}
                    </div>
                    <p className="mt-5 text-center text-xs uppercase tracking-[0.25em] text-zinc-500">
                        {current.note}
                    </p>
                </Reveal>

                <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5 min-h-[300px]">
                    <AnimatePresence mode="popLayout">
                        {current.items.map((item, i) => (
                            <Card key={`${active}-${item.name}`} item={item} index={i} />
                        ))}
                    </AnimatePresence>
                </div>

                <Reveal delay={0.1} className="mt-14">
                    <div className="relative overflow-hidden rounded-3xl border border-[#D4AF37]/25">
                        <img
                            src={IMAGES.wings}
                            alt="Thaï Wings caramélisés"
                            data-testid="menu-spotlight-image"
                            className="h-52 sm:h-64 w-full object-cover opacity-80"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/50 to-transparent flex items-center">
                            <div className="px-8 sm:px-12">
                                <p className="font-serif-display text-2xl sm:text-3xl font-semibold text-zinc-50">
                                    Une envie ? Un coup de fil suffit.
                                </p>
                                <a
                                    href={`tel:${RESTAURANT.phoneClean}`}
                                    data-testid="menu-call-button"
                                    className="mt-5 inline-flex items-center gap-3 rounded-full bg-[#D4AF37] px-6 py-3.5 text-sm font-bold text-black transition-all duration-300 hover:bg-[#F3C649] hover:shadow-[0_0_35px_rgba(212,175,55,0.45)]"
                                >
                                    <Phone size={15} />
                                    {RESTAURANT.phone}
                                </a>
                            </div>
                        </div>
                    </div>
                </Reveal>
            </div>
        </section>
    );
};
