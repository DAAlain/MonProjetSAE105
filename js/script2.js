let str=window.location.href    //recherche de l'url de la page
var url= new URL(str)           //création d'une variable nomme url avec une copie de l'url de la page
var name= url.searchParams.get("numéro")    //recherche de la valeur du parametre numéro soit ici le numéro de la SAE
let module=SAE[name]                        //création d'un variable module qui correspond a l'objet d'une SAE
document.querySelector("#numero").innerText=name    //Affichage du numéro de la SAE dans la balise h1 prévu avec l'id numero
document.querySelector("#titre").innerText=module.titre     //Affichage du titre de la SAE dans la balise h2 prévu avec l'id titre
document.querySelector("#description").innerHTML=module.description     //Affichage de la description dans la div prévu avec l'id description

let comp=""         //création d'une variable vide pour y inserer grace a la boucle les valeurs souhaitées 
for(i=0;i<SAE[name]["compétences"].length; i++)             //Création d'un boucle pour afficher dans la div prévu avec l'id Compétences les différents compétences mobilisées lors de la SAE
{
    let module=SAE[name]["compétences"]
    comp+="<h3 class=' marge0 competence-infosSAE flou1 blanc'>"+module[i]+"</h3>"
}
document.querySelector("#Compétences").innerHTML=comp

let ac=""           //création variable vide pour y inserer grace a la boucle les valeurs souhaitées            
for (let key in SAE[name]["AC"])            //Création d'un boucle pour afficher dans la div prévu avec l'id AC les différents AC étudiés lors de la SAE
{
    let module=SAE[name]["AC"][key]
    ac+="<a href='AC.html?numéro="+key+"' class='flexcentre1 AC-infosSAE flou1'><div class='flexcolonne blanc'><h2 class='marge0 blanc'>"+key+"</h2><b>"+module+"</b></div></a>"
}
document.querySelector("#AC").innerHTML=ac

let ressources=""           //création variable vide pour y inserer grace a la boucle les valeurs souhaitées      
for (let key in SAE[name]["ressources"])        //Création d'un boucle pour afficher dans la div prévu avec l'id Ressources les différents ressources mises en oeuvre dans la SAE
{
    let module=SAE[name]["ressources"][key]
    ressources+="<div class='flexcolonne ressource-infosSAE blanc flou1'><h2 class='marge0 blanc'>"+key+"</h2><div>"+module+"</div></div>"
}
document.querySelector("#Ressources").innerHTML=ressources