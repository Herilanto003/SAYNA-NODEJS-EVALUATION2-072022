// connexion avec la base donnees avec des requete ajax
// -------------------------------------------------------------------------------
// appelle des fonctions utilisées

ajaxRequestHome();

// fin d' appel des fonctions
// -------------------------------------------------------------------------------

function ajaxRequestHome(){
    
    // ----------------------------------
    // récuperation des données venant du serveur
    // ----------------------------------
    $.ajax({
        url: "/homeRecupere",
        dataType: "json",
        method: "get",
        success: function(response)
        {
            console.log(response);
            let formationElement = ""
            response.forEach(element=>{
               formationElement += `
            <div class="flip-box">
               <div class="flip-box-inner">
                 <div class="flip-box-front">
                   <h2>Le meilleur note de ${element.formation}</h2>
                   <div>
                     <h4><i class="fas fa-user"></i> ${element.firstname} ${element.lastname}</h4>
                   </div>
                   <div style="margin-top: 20px">
                        <h4 style="color: blue">Avis :</h4>
                        <p>${element.avis}</p>
                   </div>
                 </div>
                 <div class="flip-box-back">
                   <h2>Suite</h2>
                   <div style="margin-top: 20px; background-color: black">
                        <h4>Note : ${element.note}</h4>
                   </div>
                 </div>
               </div>
             </div>`
            });

            $(".contentAvis").append(formationElement);
        },
        error: function(response)
        {
            console.log(response);
        }
    })

}