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
    let articleEl = createEl(cardEl, divAppend, "article", "")
    
    let nameEl = document.createElement("h2");
    nameEl.append(`Nome:${teamMembers.nome[i]}`);
    articleEl.replaceChild(nameEl);

    let positionEl = document.createElement("h4");
    positionEl.append(`Ruolo:${teamMembers.position[i]}`);
    articleEl.replaceChild(nameEl);

    let photoEl  = document.createElement("img");
    photoEl.append(`Foto:${teamMembers.photo[i]}`);
    articleEl.replaceChild(nameEl);

    articleEl.replaceChild()
    
}



//*****************FUNZIONI****************//
function createEl(elemento, elementoAppend, tag, qualcosa){
    elemento = document.createElement(tag);
    elemento.append(qualcosa);
    elementoAppend.appendChild(elemento);
}
