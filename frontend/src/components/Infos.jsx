import { Bike, Clock, ShoppingBag, UtensilsCrossed } from "lucide-react";
import { Eyebrow, Reveal } from "./Reveal";
import { SERVICES } from "../data/menu";

const ICONS = [UtensilsCrossed, ShoppingBag, Bike];

export const Infos = () => (
    <section id="infos" data-testid="infos-section" className="relative py-28 lg:py-36 bg-[#0D0D0F]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <Reveal className="text-center">
                <Eyebrow>Infos Pratiques</Eyebrow>
                <h2 className="mt-5 font-serif-display text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight">
                    Comme vous <span className="gold-text">l'aimez</span>
                </h2>
            </Reveal>

            <div className="mt-14 grid sm:grid-cols-3 gap-5">
                {SERVICES.map((s, i) => {
                    const Icon = ICONS[i];
                    return (
                        <Reveal key={s.title} delay={i * 0.12}>
                            <div
                                data-testid={`service-card-${i}`}
                                className="group h-full rounded-2xl border border-zinc-800 bg-[#121214]/70 p-8 text-center transition-all duration-500 hover:border-[#D4AF37]/40 hover:shadow-[0_0_35px_rgba(212,175,55,0.1)]"
                            >
                                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-[#D4AF37]/30 bg-[#D4AF37]/10 transition-transform duration-500 group-hover:scale-110">
                                    <Icon size={22} className="text-[#F3C649]" />
                                </div>
                                <h3 className="mt-6 font-serif-display text-2xl font-semibold text-zinc-50">
                                    {s.title}
                                </h3>
                                <p className="mt-3 text-sm text-zinc-400 font-light leading-relaxed">
                                    {s.desc}
                                </p>
                            </div>
                        </Reveal>
                    );
                })}
            </div>

            <Reveal delay={0.1} className="mt-8 max-w-2xl mx-auto">
                <div
                    data-testid="hours-card"
                    className="rounded-2xl border border-zinc-800 bg-[#121214]/70 p-8 sm:p-10"
                >
                    <div className="flex items-center gap-3">
                        <Clock size={20} className="text-[#D4AF37]" />
                        <h3 className="font-serif-display text-2xl font-semibold text-zinc-50">
                            Horaires d'ouverture
                        </h3>
                    </div>
                    <div className="mt-7 space-y-4">
                        <div className="flex items-baseline justify-between border-b border-dashed border-zinc-800 pb-4">
                            <span className="text-sm text-zinc-400">Jours</span>
                            <span className="text-base text-zinc-100 font-medium">
                                Lundi → Vendredi
                            </span>
                        </div>
                        <div className="flex items-baseline justify-between border-b border-dashed border-zinc-800 pb-4">
                            <span className="text-sm text-zinc-400">Midi</span>
                            <span className="font-serif-display text-xl gold-text font-semibold">
                                11h30 – 14h00
                            </span>
                        </div>
                        <div className="flex items-baseline justify-between">
                            <span className="text-sm text-zinc-400">Soir</span>
                            <span className="font-serif-display text-xl gold-text font-semibold">
                                19h00 – 21h30
                            </span>
                        </div>
                    </div>
                </div>
            </Reveal>
        </div>
    </section>
);
