const products = [
    {
        name: "Naranja",
        description: "Fresco, cítrico y dulce, afrutado en su aroma, ideal como digestivo. Servir bien frío.",
        img: "assets/img/products/naranja.png",
        logo: "assets/img/products/naranjaLogo.png",
        award: [],
        category: "frutales citricos",
        id: 1
    },
    {
        name: "Mandarina",
        description: "Fino, equilibrado en lo dulce y cítrico de mandarinas seleccionadas. Consumir  bien frío.",
        img: "assets/img/products/mandarina.png",
        logo: "assets/img/products/mandarinaLogo.png",
        award: [],
        category: "frutales citricos",
        id: 2
    },
    {
        name: "Lemoncello",
        description: "Receta italiana, fresco, natural, de sabor dulce y notas cítricas, ideal como digestivo. Servir bien frío.",
        img: "assets/img/products/lemoncello.png",
        logo: "assets/img/products/lemoncelloLogo.png",
        award: ["VINUS 2009 - Medalla de oro."],
        category: "frutales citricos",
        id: 3  
    },
    {
        name: "Boysemberry",
        description: "Ideal para quienes disfrutan de las sensaciones de aroma sabor y color que nos provocan los frutos rojos. Ideal para repostería, tragos y cócteles.",
        img: "assets/img/products/boysemberry.png",
        logo: "assets/img/products/boysemberryLogo.png",
        award: [],
        category: "frutos regionales",
        id: 4
    },
    {
        name: "Durazno",
        description: "Maceración de duraznos maduros de la quinta, que con su delicado aroma y sabor son el sello inconfundible de nuestra región. Disfrutarlo solo o acompañando tortas caseras y postres.",
        img: "assets/img/products/durazno.png",
        logo: "assets/img/products/duraznoLogo.png",
        award: [],
        category: "frutos regionales",
        id: 5 
    },
    {
        name: "Miel",
        description: "Elaborado con miel de la mejor calidad, multifloral,  propia de la zona. Licor aromático, suave, para disfrutar solo, en tragos o cocteles.",
        img: "assets/img/products/miel.png",
        logo: "assets/img/products/mielLogo.png",
        award: [],
        category: "naturales",
        id: 6
    },
    {
        name: "Manzanilla",
        description: "Suave y aromático. Elaborado con miel. Digestivo y excelente para suavizar la garganta",
        img: "assets/img/products/manzanilla.png",
        logo: "assets/img/products/manzanillaLogo.png",
        award: [],
        category: "naturales",
        id: 7
    },
    {
        name: "Licor seco tipo Cognac",
        description: "Especial infusión de hierbas aromáticas seleccionadas con un toque de roble. Se disfruta con café o solo con hielo.",
        img: "assets/img/products/licorSeco.png",
        logo: "assets/img/products/licorSecoLogo.png",
        award: [],
        category: "clasicos",
        id: 8  
    },
    {
        name: "Tia mimi (de cafe)",
        description: "Aroma y sabor exclusivos a café. Agradable en boca. Gran compañia para endulzar el café de todos los dias. Se disfruta solo o como ingrediente de postres y cócteles.",
        img: "assets/img/products/tiaMimi.png",
        logo: "assets/img/products/tiaMimiLogo.png",
        award: [],
        category: "clasicos",
        id: 9  
    },
    {   
        name: "Amaretto",
        description: "Fino licor de almendras y especias. Se disfruta solo, con café, en postres o como acompañante.",
        img: "assets/img/products/amaretto.png",
        logo: "assets/img/products/amarettoLogo.png",
        award: ["La mujer elige 2010 - Medalla de oro."],
        category: "clasicos",
        id: 10
    },
    {
        name: "Con menta",
        description: "¡Choco - Menta! Exquisito, único, original, macerado con menta fresca. Ideal después de cena, para postres, tragos y salsas. Para el disfrute, solo o con hielo.",
        img: "assets/img/products/chMenta.png",
        logo: "assets/img/products/chMentaLogo.png",
        award: ["Vinus2014 - Doble medalla de oro."],
        category: "cremas de chocolate",
        id: 11
    },
    {
        name: "Con naranja",
        description: "Notas dulces de chocolate y la frescura de la naranja que combinan a la perfección. Ideal como ingrediente de postres y tragos o solo como acompañante.",
        img: "assets/img/products/chNaranja.png",
        logo: "assets/img/products/chNaranjaLogo.png",
        award: [
            "WRW&S 2014 - 4° Puesto del Ranking.", 
            "Vinus 2014 - Doble medalla de oro / Gran campeon de licores no vinicos."
        ],
        category: "cremas de chocolate",
        id: 12  
    },
    {
        name: "Con coco",
        description: "El equilibrio ideal entre el aroma natural del cacao y el frescor del coco, ideal para beber todo el año, solo o con hielo, especial para tragos",
        img: "assets/img/products/chCoco.png",
        logo: "assets/img/products/chCocoLogo.png",
        award: ["Vinus 2017 - Doble medalla de oro."],
        category: "cremas de chocolate",
        id: 13  
    },
    {   
        name: "Con almendra",
        description: "Suave y elegante, exquisito maridaje entre almendras de la zona y nuestro licor crema de chocolate.",
        img: "assets/img/products/chAlmendra.png",
        logo: "assets/img/products/chAlmendraLogo.png",
        award: [
            "Vinus - Doble medalla de oro.",
            "La mujer elige - Doble medalla de oro y Gran campeon de licores.",
            "WRW&S - 3° Puesto del Ranking."],
        category: "cremas de chocolate",
        id: 14  
    },
    {
        name: "Clasico",
        description: "La especialidad de la casa en todas sus variedades, textura suave, ligera cremosidad y un aroma a cacao que cautiva.",
        img: "assets/img/products/chClasico.png",
        logo: "assets/img/products/chClasicoLogo.png",
        award: ["Vinus 2018 - Medalla de plata."],
        category: "cremas de chocolate",
        id: 15 
    },
    {
        name: "De vino Malbec",
        description: "Gran Noble Coctel Rojo, nacido de un gran vino Malbec del oasis Sur de Mendoza, de quien toma su cuerpo, su aroma,  su color y la raiz de su sabor. Ideal como aperitivo, en postres y un gran aliado al momento de comer helado... para golosos!",
        img: "assets/img/products/granNoble.png",
        logo: "assets/img/products/granNobleLogo.png",
        award: [
            "Vinus 2009 - Medalla de oro.",
            "La mujer elige 2008 - Medalla de plata."
        ],
        category: "de vino",
        id: 16
    },
    {
        name: "De vino Chardonnay",
        description: "Gran Noble Coctel Ambar, nacido de un armonioso vino de uvas blancas Chardonnay del oasis Sur de Mendoza. Suave, Dulce, Amigable. Simple, elegante. Disfrutar como aperitivo o acompañante de postres.",
        img: "assets/img/products/granNobleChardonay.png",
        logo: "",
        award: [],
        category: "de vino",
        id: 17  
    },
    {
        name: "De vino Chardonnay con durazno real",
        description: "Delicada armonía entre un exquisito vino blanco Chardonnay del Oasis Sur Mendocino y las gotas de Durazno que le dan una frescura muy especial. Servir muy frío, solo o en tragos y cócteles.",
        img: "assets/img/products/granNobleDurazno.png",
        logo: "assets/img/products/granNobleDuraznoLogo.png",
        award: [],
        category: "de vino",
        id: 18  
    },
    {
        name: "De Dulce de leche",
        description: "Licor que destaca su ingrediente principal, un exquisito dulce de leche orgánico. Placer de todos, para disfrutar en cualquier ocasión.",
        img: "assets/img/products/dDeLeche.png",
        logo: "assets/img/products/dDeLecheLogo.png",
        award: [],
        category: "de crema",
        id: 19  
    },
    {
        name: "Mimí cream",
        description: "Nuestra especial y exquisita versión de la Crema Irlandesa. Con personalidas propia y equilibrada de whisky, crema y chocolate. Perfecto anfitrión de amigos y familia. Servir bien frío y con hielo",
        img: "assets/img/products/mimiCream.png",
        logo: "assets/img/products/mimiCreamLogo.png",
        award: [
            "Vinus 2015 - Medalla de oro.",
            "La mujer elige 2010 - Medalla de plata", 
            "Vinus 2009 - Medalla de oro"],
        category: "de crema",
        id: 20  
    }
]

export default products