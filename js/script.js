let liste=""        //création variable vide pour y inserer grace a la boucle les valeurs souhaitées.   

//Création d'une boucle pour chercher les valeurs dans la base de données et les insérer dans des liens cliquables simples.
for (let key in SAE)            //création d'une boucle pour afficher pour chaque SAE, leur numero, titre et compétences mobilisées.
{
    let module= SAE[key]                        
    let infos=`<a href='infos_S.A.É.html?numéro=${key}' id=${key}>              
                    <div class='flou carre-listeSAE flexcolonne'>
                        <h1 class='margepetite gris texte'>${key}</h3>
                        <h3 class='marge0 gris texte1'>${module.titre}</h3>
                        <h3 class='marge0 competence-listeSAE flexcentre1 texte1'>${module.compétences}</h3>
                    </div>
                </a>`           //utilisation d'un littéral de gabarits
    liste+= infos
}
document.querySelector(".sae").innerHTML=liste  

function Quitter()
{
    window.close()
}
