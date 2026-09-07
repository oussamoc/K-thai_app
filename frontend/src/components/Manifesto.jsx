import { Flame, Leaf, Sparkles } from "lucide-react";
import { Eyebrow, Ornament, Reveal } from "./Reveal";
import { IMAGES } from "../data/menu";

const CHAPTERS = [
    {
        num: "01",
        icon: Leaf,
        title: "Produits Frais",
        desc: "Légumes croquants, herbes parfumées et viandes sélectionnées chaque semaine. Rien de surgelé, tout est préparé le jour même.",
    },
    {
        num: "02",
        icon: Flame,
        title: "Cuisine Maison au Wok",
        desc: "Le wok ne s'arrête jamais. Chaque plat est saisi minute à feu vif pour conserver les textures et concentrer les saveurs.",
    },
    {
        num: "03",
        icon: Sparkles,
        title: "L'Asie dans l'Assiette",
        desc: "Citronnelle, galanga, lait de coco et basilic thaï : les recettes authentiques de la street-food de Bangkok, servies à Talence.",
    },
];

export const Manifesto = () => (
    <section id="concept" data-testid="manifesto-section" className="relative py-28 lg:py-36">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-16 lg:gap-20 items-center">
                <div>
                    <Reveal>
                        <Eyebrow>Le Concept</Eyebrow>
                        <h2 className="mt-5 font-serif-display text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight leading-tight">
                            Une cuisine de marché,
                            <br />
                            <span className="gold-text">un geste de chef.</span>
                        </h2>
                    </Reveal>

                    <div className="mt-12 space-y-0">
                        {CHAPTERS.map((c, i) => (
                            <Reveal key={c.num} delay={i * 0.12}>
                                <div
                                    data-testid={`manifesto-chapter-${c.num}`}
                                    className="group flex gap-6 sm:gap-8 border-t border-zinc-800/80 py-8 transition-colors duration-500 hover:border-[#D4AF37]/40"
                                >
                                    <span className="font-serif-display text-3xl sm:text-4xl gold-text font-semibold shrink-0 w-14">
                                        {c.num}
                                    </span>
                                    <div>
                                        <div className="flex items-center gap-3">
                                            <c.icon size={18} className="text-[#D4AF37]" />
                                            <h3 className="text-xl sm:text-2xl font-medium text-zinc-100">
                                                {c.title}
                                            </h3>
                                        </div>
                                        <p className="mt-3 text-sm sm:text-base text-zinc-400 font-light leading-relaxed max-w-md">
                                            {c.desc}
                                        </p>
                                    </div>
                                </div>
                            </Reveal>
                        ))}
                    </div>
                    <Ornament className="mt-4 max-w-md" />
                </div>

                <Reveal delay={0.2} className="relative">
                    <div className="relative overflow-hidden rounded-3xl border border-[#D4AF37]/25 shadow-[0_0_50px_rgba(212,175,55,0.12)]">
                        <img
                            src={IMAGES.nems}
                            alt="Nems croustillants faits maison"
                            data-testid="manifesto-image"
                            className="h-[420px] sm:h-[540px] w-full object-cover transition-transform duration-700 hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                        <p className="absolute bottom-6 left-6 right-6 font-serif-display text-2xl italic text-zinc-100">
                            « Chaque nem est roulé à la main, chaque matin. »
                        </p>
                    </div>
                </Reveal>
            </div>
        </div>
    </section>
);
