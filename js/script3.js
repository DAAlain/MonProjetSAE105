let str=window.location.href    //recherche de l'url de la page
var url= new URL(str)           //création d'une variable nomme url avec une copie de l'url de la page
var name= url.searchParams.get("numéro")    //recherche de la valeur du parametre numéro soit ici le numéro de l'AC
console.log(name)

let module=AC[name]             //création d'un variable module qui correspond a l'objet d'un AC

document.querySelector("#numeroAC").innerText=name          //Affichage du numéro de l'AC dans la div prévu pour avec l'id numeroAC
document.querySelector("#titreAC").innerText=module.titre           //Affichage du titre de l'AC dans la div prévu avec l'id titreAC

let lien=""         //Création d'une variable vide pour y insérer le lien vers un pfj justificatif de l'AC
lien+="<a href='PDF/"+module.justification+".pdf' class='gris'><h2 class='gris'><u>Lien vers la justification en PDF</u></h2></a>"          //Code pour mettre dans la variable lien, le lien nécessaire pour chaque AC
document.querySelector(".lien").innerHTML=lien          //Affichage de la variable lien dans la div prévu avec la classe lien