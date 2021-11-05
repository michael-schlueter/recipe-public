const recipes = [
    {
        title: "Hamburger amerikanischer Art",
        id: 0,
        description: "Mmmmh. Das ist ein leckerer Burger! Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
        prepTime: "10 min",
        cookTime: "10 min",
        servings: "4 Personen",
        tags: ["hauptgerichte", "eigene gerichte", "soßen / dips"],
        ingredients: ["800g Fleisch", "Brötchen", "2 Gurken", "2 Tomaten", "Burgersauce"],
        instructions: ["Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat", "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat", "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat", "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat", "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat"],
        imgsrc: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8aGFtYnVyZ2VyfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        tools: ["große Pfanne"],
        quelle: "https:www.google.de"
    },
    {
        title: "Schokoladenkuchen",
        id: 1,
        description: "Mmmmh. Das ist ein leckerer Kuchen! Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
        prepTime: "12 min",
        cookTime: "14 min",
        servings: "2 Personen",
        tags: ["kuchen", "desserts"],
        ingredients: ["Mehl", "2 Tafeln Schokolade", "Teig", "2 Becher Sahne", "Backmischung"],
        instructions: ["Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat", "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat", "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat", "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat", "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat"],
        imgsrc: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Y2FrZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        tools: ["Mixer"],
        quelle: "https:www.google.de"
    },
    {
        title: "Chocolate Cookies",
        id: 2,
        description: "Mmmmh. Das ist sind leckere Cookies! Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
        prepTime: "10 min",
        cookTime: "10 min",
        servings: "4 Personen",
        tags: ["snacks", "plätzchen"],
        ingredients: ["Teig", "2 Tafeln Schokolade", "Mehl", "Backmischung"],
        instructions: ["Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat", "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat", "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat", "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat", "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat"],
        imgsrc: "https://images.unsplash.com/photo-1590080874088-eec64895b423?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8Y29va2llc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        tools: ["Mixer"],
        quelle: "https:www.google.de"
    },
    {
        title: "Pasta mit Lachs und Zucchini",
        id: 3,
        description: "Mmmmh. Das ist ein leckeres Gericht! Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
        prepTime: "10 min",
        cookTime: "10 min",
        servings: "4 Personen",
        tags: ["hauptgerichte", "fisch", "nudelgerichte"],
        ingredients: ["800g Fisch", "300g Zucchini", "2 Gurken", "2 Tomaten"],
        instructions: ["Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat", "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat", "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat", "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat", "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat"],
        imgsrc: "https://images.unsplash.com/photo-1576831438132-7b74c94006b2?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGZpc2glMjBwYXN0YXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        tools: ["große Pfanne", "Schneidebrett"],
        quelle: "https:www.google.de"
    },
    {
        title: "Scharfe Tomatensuppe",
        id: 4,
        description: "Mmmmh. Das ist ein leckerer Burger! Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
        prepTime: "60 min",
        cookTime: "30 min",
        servings: "4 Personen",
        tags: ["suppen", "eigene gerichte"],
        ingredients: ["800g Fleisch", "20 Tomaten", "Pfeffer", "2 Chili"],
        instructions: ["Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat", "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat", "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat", "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat", "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat"],
        imgsrc: "https://images.unsplash.com/photo-1578861256505-d3be7cb037d3?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8c291cHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        tools: ["großer Topf"],
        quelle: "https:www.google.de"
    },
];


export const tags = ["snacks", "desserts", "salate", "hauptgerichte", "soßen / dips", "suppen", "fisch", "nudelgerichte", "eigene gerichte", "plätzchen", "kuchen"];

export default recipes;