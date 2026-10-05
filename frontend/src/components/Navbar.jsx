import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu as MenuIcon, Phone, X } from "lucide-react";
import { RESTAURANT } from "../data/menu";

const LINKS = [
    { href: "#carte", label: "La Carte", id: "nav-link-carte" },
    { href: "#concept", label: "Le Concept", id: "nav-link-concept" },
    { href: "#infos", label: "Infos Pratiques", id: "nav-link-infos" },
    { href: "#contact", label: "Contact", id: "nav-link-contact" },
];

export const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [open, setOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 40);
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <header
            data-testid="main-navbar"
            className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
                scrolled
                    ? "backdrop-blur-xl bg-[#0A0A0B]/80 border-b border-[#D4AF37]/15"
                    : "bg-transparent"
            }`}
        >
            <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 lg:px-10 h-20">
                <a href="#top" data-testid="nav-logo" className="flex items-center">
                    <img
                        src="/images/logo.webp"
                        alt="K-THAI · cuisine maison"
                        data-testid="nav-logo-image"
                        className="h-12 sm:h-14 w-auto transition-transform duration-300 hover:scale-[1.03]"
                    />
                </a>

                <div className="hidden md:flex items-center gap-8">
                    {LINKS.map((l) => (
                        <a
                            key={l.href}
                            href={l.href}
                            data-testid={l.id}
                            className="text-sm text-zinc-300 hover:text-[#F3C649] transition-colors duration-300 tracking-wide"
                        >
                            {l.label}
                        </a>
                    ))}
                    <a
                        href={`tel:${RESTAURANT.phoneClean}`}
                        data-testid="nav-call-button"
                        className="group flex items-center gap-2 rounded-full border border-[#D4AF37]/40 bg-[#D4AF37]/10 px-5 py-2.5 text-sm font-semibold text-[#F3C649] transition-all duration-300 hover:bg-[#D4AF37] hover:text-black hover:shadow-[0_0_30px_rgba(212,175,55,0.4)]"
                    >
                        <Phone size={15} className="transition-transform duration-300 group-hover:rotate-12" />
                        {RESTAURANT.phone}
                    </a>
                </div>

                <button
                    data-testid="nav-mobile-toggle"
                    onClick={() => setOpen((v) => !v)}
                    className="md:hidden text-[#F3C649] p-2"
                    aria-label="Menu"
                >
                    {open ? <X size={24} /> : <MenuIcon size={24} />}
                </button>
            </nav>

            <AnimatePresence>
                {open && (
                    <motion.div
                        data-testid="nav-mobile-menu"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                        className="md:hidden overflow-hidden backdrop-blur-xl bg-[#0A0A0B]/95 border-b border-[#D4AF37]/15"
                    >
                        <div className="flex flex-col px-6 py-4 gap-1">
                            {LINKS.map((l) => (
                                <a
                                    key={l.href}
                                    href={l.href}
                                    data-testid={`${l.id}-mobile`}
                                    onClick={() => setOpen(false)}
                                    className="py-3 text-base text-zinc-200 border-b border-zinc-800/60"
                                >
                                    {l.label}
                                </a>
                            ))}
                            <a
                                href={`tel:${RESTAURANT.phoneClean}`}
                                data-testid="nav-call-button-mobile"
                                className="mt-3 mb-2 flex items-center justify-center gap-2 rounded-full bg-[#D4AF37] px-5 py-3 text-sm font-bold text-black"
                            >
                                <Phone size={15} />
                                Commander · {RESTAURANT.phone}
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};
