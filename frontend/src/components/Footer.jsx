import { ArrowUp, Phone } from "lucide-react";
import { Ornament } from "./Reveal";
import { RESTAURANT } from "../data/menu";

export const Footer = () => (
    <footer data-testid="main-footer" className="relative border-t border-[#D4AF37]/15 bg-[#08080A]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16">
            <div className="flex flex-col items-center text-center">
                <p className="font-serif-display text-4xl font-bold gold-text">
                    K-THAI
                </p>
                <p className="mt-2 text-[11px] uppercase tracking-[0.35em] text-zinc-500">
                    {RESTAURANT.tagline}
                </p>
                <Ornament className="mt-8 w-full max-w-sm" />
                <p className="mt-8 font-serif-display text-xl italic text-zinc-300">
                    « Merci de votre confiance — K-Thaï vous souhaite un bon
                    appétit ! »
                </p>

                <div className="mt-8 flex flex-wrap justify-center gap-x-10 gap-y-3 text-sm text-zinc-400">
                    <span>{RESTAURANT.address}</span>
                    <a
                        href={`tel:${RESTAURANT.phoneClean}`}
                        data-testid="footer-phone-link"
                        className="flex items-center gap-2 text-[#F3C649] hover:text-[#F8E7A1] transition-colors"
                    >
                        <Phone size={13} />
                        {RESTAURANT.phone}
                    </a>
                    <span>Lun–Ven · 11h30–14h00 · 19h00–21h30</span>
                </div>

                <button
                    data-testid="back-to-top-button"
                    onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                    aria-label="Retour en haut"
                    className="mt-12 flex h-12 w-12 items-center justify-center rounded-full border border-[#D4AF37]/40 text-[#F3C649] transition-all duration-300 hover:bg-[#D4AF37] hover:text-black"
                >
                    <ArrowUp size={18} />
                </button>

                <p className="mt-10 text-xs text-zinc-600">
                    © {new Date().getFullYear()} K-THAI · Talence — Tous droits
                    réservés.
                </p>
            </div>
        </div>
    </footer>
);

export const StickyCallBar = () => (
    <div
        data-testid="sticky-call-bar"
        className="fixed bottom-0 inset-x-0 z-50 md:hidden border-t border-[#D4AF37]/30 bg-[#0A0A0B]/90 backdrop-blur-xl px-4 py-3"
    >
        <a
            href={`tel:${RESTAURANT.phoneClean}`}
            data-testid="sticky-call-button"
            className="flex items-center justify-center gap-2 rounded-full bg-[#D4AF37] px-6 py-3.5 text-sm font-bold text-black"
        >
            <Phone size={15} />
            Commander · {RESTAURANT.phone}
        </a>
    </div>
);
