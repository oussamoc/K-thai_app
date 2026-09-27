import { Clock, MapPin } from "lucide-react";
import { Eyebrow, Reveal } from "./Reveal";
import { RESTAURANT } from "../data/menu";

export const Contact = () => (
    <section id="contact" data-testid="contact-section" className="relative py-28 lg:py-36">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <Reveal>
                <Eyebrow>Nous Trouver</Eyebrow>
                <h2 className="mt-5 font-serif-display text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight">
                    À deux pas de <span className="gold-text">chez vous</span>
                </h2>
            </Reveal>

            <div className="mt-14 grid lg:grid-cols-[0.9fr_1.1fr] gap-6 items-stretch">
                <Reveal delay={0.1}>
                    <div className="h-full rounded-2xl border border-zinc-800 bg-[#121214]/70 p-8 sm:p-10">
                        <div className="flex items-center gap-3 text-[11px] uppercase tracking-[0.3em] text-zinc-400">
                            <MapPin size={14} className="text-[#D4AF37]" />
                            Adresse
                        </div>
                        <p className="mt-4 font-serif-display text-2xl sm:text-3xl text-zinc-50 font-semibold leading-snug">
                            {RESTAURANT.address}
                        </p>
                        <div className="mt-8 flex items-start gap-3 text-sm sm:text-base text-zinc-400">
                            <Clock size={15} className="mt-1 text-[#D4AF37] shrink-0" />
                            <p className="leading-relaxed">
                                Du lundi au vendredi
                                <br />
                                11h30 – 14h00 · 19h00 – 21h30
                            </p>
                        </div>
                    </div>
                </Reveal>

                <Reveal delay={0.2}>
                    <div
                        data-testid="contact-map"
                        className="h-full min-h-[380px] overflow-hidden rounded-3xl border border-[#D4AF37]/25 shadow-[0_0_50px_rgba(212,175,55,0.1)]"
                    >
                        <iframe
                            title="K-THAI — 94 avenue Roul, 33400 Talence"
                            src={RESTAURANT.mapsEmbed}
                            className="map-dark h-full min-h-[380px] w-full"
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            allowFullScreen
                        />
                    </div>
                </Reveal>
            </div>
        </div>
    </section>
);
