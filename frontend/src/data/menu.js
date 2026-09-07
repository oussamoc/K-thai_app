export const IMAGES = {
    heroPadThai:
        "https://images.unsplash.com/photo-1559314809-0d155014e29e?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxODF8MHwxfHNlYXJjaHwxfHxwYWQlMjB0aGFpJTIwc2hyaW1wJTIwZ291cm1ldCUyMGFzaWFuJTIwZm9vZHxlbnwwfHx8fDE3ODg4MDIxNzR8MA&ixlib=rb-4.1.0&q=85",
    padThaiAlt:
        "https://images.unsplash.com/photo-1742646803135-062f43c4e4ee?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxODF8MHwxfHNlYXJjaHw0fHxwYWQlMjB0aGFpJTIwc2hyaW1wJTIwZ291cm1ldCUyMGFzaWFuJTIwZm9vZHxlbnwwfHx8fDE3ODg4MDIxNzR8MA&ixlib=rb-4.1.0&q=85",
    nems: "https://images.unsplash.com/photo-1695712641569-05eee7b37b6d?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxODF8MHwxfHNlYXJjaHwxfHxzcHJpbmclMjByb2xscyUyMGRpbSUyMHN1bSUyMGFzaWFuJTIwYXBwZXRpemVyc3xlbnwwfHx8fDE3ODg4MDIxNzR8MA&ixlib=rb-4.1.0&q=85",
    wings: "https://images.pexels.com/photos/31552836/pexels-photo-31552836.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
};

export const RESTAURANT = {
    name: "K-THAI",
    tagline: "L'Asie dans l'assiette",
    phone: "05 57 93 91 46",
    phoneClean: "0557939146",
    address: "94 avenue Roul, 33400 Talence",
    mapsEmbed:
        "https://www.google.com/maps?q=94+Avenue+Roul,+33400+Talence,+France&output=embed",
    hours: [
        { label: "Du Lundi au Vendredi", value: "" },
        { label: "Midi", value: "11h30 – 14h00" },
        { label: "Soir", value: "19h00 – 21h30" },
    ],
};

export const MENU = {
    entrees: {
        id: "entrees",
        label: "Entrées",
        note: "Pour débuter le voyage en douceur — 4,00 € pièce",
        items: [
            {
                name: "Nems Poulet",
                desc: "Beignets croustillants dorés, poulet émincé et épices douces thaïlandaises",
                tag: "Incontournable",
                price: "4,00 €",
            },
            {
                name: "Nems Légumes",
                desc: "Rouleaux croustillants, julienne de légumes croquants et vermicelles",
                tag: "Végétarien",
                price: "4,00 €",
            },
            {
                name: "Thaï Wings",
                desc: "Ailerons de poulet caramélisés, sauce thaï aigre-douce et sésame grillé",
                tag: "Coup de cœur",
                price: "4,00 €",
            },
        ],
    },
    plats: {
        id: "plats",
        label: "Plats",
        note: "Sautés minute au wok — 13,50 € · Plat végétarien 12,00 €",
        items: [
            {
                name: "Pad Thaï",
                desc: "Nouilles de riz sautées, crevettes, œufs, cacahuètes pilées, soja et citron vert",
                tag: "Plat Signature",
                price: "13,50 €",
                featured: true,
            },
            {
                name: "Bo Bun",
                desc: "Vermicelles de riz, nems croustillants, menthe fraîche et cacahuètes — au choix : bœuf, crevettes, poulet ou végétarien",
                tag: "Populaire",
                price: "13,50 €",
            },
            {
                name: "Bœuf Citronnelle",
                desc: "Émincé de bœuf tendre mariné à la citronnelle fraîche et à l'ail, sauté minute",
                tag: "Parfumé",
                price: "13,50 €",
            },
            {
                name: "Bœuf Loc Lac",
                desc: "Dés de bœuf sautés sauce caramélisée, riz parfumé et crudités",
                tag: "Gourmand",
                price: "13,50 €",
            },
            {
                name: "Crevettes Aigre-Douce",
                desc: "Crevettes sautées aux poivrons, ananas et sauce maison aigre-douce",
                tag: "Exotique",
                price: "13,50 €",
            },
            {
                name: "Poulet Saté",
                desc: "Poulet tendre mijoté dans une crème de cacahuètes parfumée au lait de coco",
                tag: "Crémeux",
                price: "13,50 €",
            },
            {
                name: "Poulet Noix de Cajou",
                desc: "Poulet sauté aux noix de cajou torréfiées, poivrons croquants et oignons doux",
                tag: "Croquant",
                price: "13,50 €",
            },
            {
                name: "Poulet Croustillant",
                desc: "Filet de poulet pané façon thaï, croustillant dehors, moelleux dedans",
                tag: "Gourmand",
                price: "13,50 €",
            },
            {
                name: "Nouilles Chinoises",
                desc: "Nouilles sautées au wok, légumes croquants et sauce soja — au choix : bœuf, crevettes, poulet ou végétarien",
                tag: "Wok Classic",
                price: "13,50 €",
            },
            {
                name: "Plat Végétarien",
                desc: "Tofu mariné et légumes de saison sautés à la sauce soja douce",
                tag: "Végétarien",
                price: "12,00 €",
            },
        ],
    },
    desserts: {
        id: "desserts",
        label: "Desserts & Boissons",
        note: "Une touche sucrée et tropicale pour finir",
        items: [
            {
                name: "Salade de Fruits",
                desc: "Fruits de saison gorgés de soleil, fraîcheur légère",
                tag: "Frais",
                price: "4,00 €",
            },
            {
                name: "Ananas Frais",
                desc: "Tranches d'ananas frais juteuses découpées façon chef",
                tag: "Tropical",
                price: "4,00 €",
            },
            {
                name: "Boissons Fraîches",
                desc: "Sodas, thés glacés et jus tropicaux au choix (33cl)",
                tag: "Boisson",
                price: "2,00 €",
            },
            {
                name: "Eau Minérale",
                desc: "Bouteille d'eau plate ou gazeuse (50cl)",
                tag: "Boisson",
                price: "1,50 €",
            },
        ],
    },
};

export const SERVICES = [
    {
        title: "Sur Place",
        desc: "Une salle chaleureuse pour savourer votre repas dans une ambiance thaïe raffinée.",
    },
    {
        title: "À Emporter",
        desc: "Commandez par téléphone, votre repas chaud vous attend au comptoir.",
    },
    {
        title: "Livraison Gratuite",
        desc: "Offerte dès 25 € d'achat, tous les soirs de 19h00 à 21h00.",
    },
];
