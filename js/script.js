const teamMembers = {
    nome: ["Wayne Barnett", "Angela Caroll", "Walter Gordon", "Angela Lopez", "Scott Estrada", "Barbara Ramos"],
    position: ["Founder & CEO", "Chief Editor", "Office Manager", "Social Media Manager", "Developer", "Graphic Designer"],
    photo: ["wayne-barnett-founder-ceo.jpg", "angela-caroll-chief-editor.jpg", "walter-gordon-office-manager.jpg", "angela-lopez-social-media-manager.jpg", "scott-estrada-developer.jpg", "barbara-ramos-graphic-designer.jpg"]
}

for(let i = 0; i < teamMembers.nome.length; i++){
    console.log(`Nome:${teamMembers.nome[i]}`,`Ruolo:${teamMembers.position[i]}`,`Foto:${teamMembers.photo[i]}`);
}
    
