const ITEMS = [
    "PAD THAÏ",
    "BO BUN",
    "BŒUF CITRONNELLE",
    "THAÏ WINGS",
    "NEMS MAISON",
    "POULET SATÉ",
    "TALENCE",
];

const Row = () => (
    <div className="flex shrink-0 items-center">
        {ITEMS.map((item) => (
            <span key={item} className="flex items-center">
                <span className="font-serif-display text-4xl sm:text-5xl lg:text-6xl font-semibold marquee-outline px-6 whitespace-nowrap">
                    {item}
                </span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="shrink-0">
                    <path
                        d="M12 2l2.4 7.6L22 12l-7.6 2.4L12 22l-2.4-7.6L2 12l7.6-2.4L12 2z"
                        fill="rgba(212,175,55,0.6)"
                    />
                </svg>
            </span>
        ))}
    </div>
);

export const Marquee = () => (
    <div
        data-testid="editorial-marquee"
        className="relative overflow-hidden border-y border-[#D4AF37]/15 bg-[#0A0A0B] py-7"
    >
        <div className="marquee-track flex w-max">
            <Row />
            <Row />
        </div>
    </div>
);
