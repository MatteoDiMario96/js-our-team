const teamMembers = {
    nome: ["Wayne Barnett", "Angela Caroll", "Walter Gordon", "Angela Lopez", "Scott Estrada", "Barbara Ramos"],
    position: ["Founder & CEO", "Chief Editor", "Office Manager", "Social Media Manager", "Developer", "Graphic Designer"],
    photo: ["wayne-barnett-founder-ceo.jpg", "angela-caroll-chief-editor.jpg", "walter-gordon-office-manager.jpg", "angela-lopez-social-media-manager.jpg", "scott-estrada-developer.jpg", "barbara-ramos-graphic-designer.jpg"]
}
const divAppend = document.querySelector("div.container");
let cardEl;
let cardDescriptionEl;
for(let i = 0; i < teamMembers.nome.length; i++){
    console.log(`Nome:${teamMembers.nome[i]}`,`Ruolo:${teamMembers.position[i]}`,`Foto:${teamMembers.photo[i]}`);
    // createEl(cardEl, divAppend, "article",`Nome:${teamMembers.nome[i]} `+` Ruolo:${teamMembers.position[i]} `+` Foto:${teamMembers.photo[i]} `)
    let articleAppend = document.createElement("article");
    // let nomeHTwoEl = createEl(cardDescriptionEl, articleAppend, "h2", "ciao")
    articleAppend = createEl(cardEl, divAppend, "article", createEl(cardDescriptionEl, articleAppend, "h2", "ciao"));
}



//*****************FUNZIONI****************//
function createEl(elemento, elementoAppend, tag, qualcosa){
    elemento = document.createElement(tag);
    elemento.append(qualcosa);
    elementoAppend.appendChild(elemento);
}
