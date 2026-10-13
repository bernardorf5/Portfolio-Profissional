export const projetos = [
    {
        id: "blackjack",
        nome: "BlackJack-PUC",
        periodo: { pt: "Maio 2026", en: "May 2026" },
        descricao: {
            pt: "Jogo de blackjack em Python com Pygame. O jogador enfrenta o dealer, escolhe entre Hit e Stand e acompanha a pontuação da rodada na tela.",
            en: "Blackjack game in Python with Pygame. The player faces the dealer, chooses between Hit and Stand, and follows the round score on screen.",
        },
        tecnologias: ["Python", "Pygame"],
        github: "https://github.com/bernardorf5/BlackJack-PUC",
        imagem: "/projetos/blackjack.png",
    },
    {
        id: "clima",
        nome: "Clima API",
        periodo: { pt: "Ago 2026", en: "Aug 2026" },
        descricao: {
            pt: "API REST de clima com Java e Spring Boot. Recebe o nome de uma cidade (/clima?cidade=Lisboa) e devolve em JSON as condições atuais e a previsão de temperatura máxima e mínima dos próximos dias.",
            en: "Weather REST API with Java and Spring Boot. It takes a city name (/clima?cidade=Lisboa) and returns, as JSON, the current conditions and the max/min temperature forecast for the coming days.",
        },
        tecnologias: ["Java", "Spring Boot"],
        github: "https://github.com/chicortes/DIAW-At01",
        imagem: "/projetos/clima.png",
    },
]