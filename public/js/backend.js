// connexion avec la base donnees avec des requete ajax
// -------------------------------------------------------------------------------
// appelle des fonctions utilisées

ajaxRequestBack();

// fin d' appel des fonctions
// -------------------------------------------------------------------------------

function ajaxRequestBack(){
    
    // ----------------------------------
    // récuperation des données venant du serveur
    // ----------------------------------
    $.ajax({
        url: "/backRecupere",
        dataType: "json",
        method: "get",
        success: function(response)
        {
            let compteur = 0;
            let text = ""
            console.log(response);
            response.forEach(element => {
                $(".contentAvis").append(`
                    <div class="flip-box">
                        <div class="flip-box-inner">
                            <div class="flip-box-front">
                                <h2>Avis des utilisateurs sur le backend</h2>
                                <div>
                                    <h3><i class="fas fa-user"></i> ${element.firstname} ${element.lastname}</h3>
                                </div>
                                <div style="margin-top: 20px">
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
                    </div>
                `)
            });

        },
        error: function(response)
        {
            console.log(response);
        }
    })

}