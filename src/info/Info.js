import self from "../img/self.png"



export let colors = ["rgb(0,255,164)", "rgb(166,104,255)"];


export const info = {
    firstName: "Vitor",
    lastName: "Silva",
    initials: "vs", // the example uses first and last, but feel free to use three or more if you like.
    position: "QA",
    selfPortrait: self, // don't change this unless you want to name your self-portrait in the "img" folder something else!
    gradient: `-webkit-linear-gradient(135deg, ${colors})`, // don't change this either
    baseColor: colors[0],
    miniBio: [
        {
            emoji: '☕',
            text: 'Movido à café'
        },
        {
            emoji: '🌎',
            text: 'Moro no Brasil'
        },
        {
            emoji: "💼",
            text: "Em busca da minha primeira oportunidade como QA"
        },
        {
            emoji: "📧",
            text: "vitorigt@protonmail.com"
        }
    ],
    socials: [
        {
            link: "mailto:vitorigt@protonmail.com",
            icon: 'fa fa-envelope',
            label: 'e-mail'
        },
        
        {
            link: "https://github.com/vitortitz",
            icon: "fa fa-github",
            label: 'github'
        },
        {
            link: "https://www.linkedin.com/in/vitortsilva/",
            icon: "fa fa-linkedin",
            label: 'linkedin'
        },


    ],
    
}