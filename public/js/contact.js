// connexion avec la base donnees avec des requete ajax
// -------------------------------------------------------------------------------
// appelle des fonctions utilisées

ajaxRequest();

// fin d' appel des fonctions
// -------------------------------------------------------------------------------

function ajaxRequest(){
    
    // on va soumettre le formulaire puis on teste les champs 
    // si un seul champs est vide on n' envoie pas les donnees
    $("#enregistrement").submit(function(e){
        e.preventDefault();
        if(
            !$("#fname").val() || !$("#lname").val() || !$("#avis").val() || !$("#Note").val() || !$("#formation").val()
        ){
            e.preventDefault();
            alert("Vous devez completer tous les champs !");
        }else{
            $.ajax({
                url: "/enregistrement",
                method: "post",
                dataType: "json",
                data:{
                    fname: $("#fname").val(),
                    lname: $("#lname").val(),
                    avis: $("#avis").val(),
                    Note: $("#Note").val(),
                    formation: $("#formation").val()
                },
                success: function(response)
                {
                    alert("Ton avis et le categorie sont enrégistrer")
                    $("#enregistrement").trigger('reset');
                },
                error: function(response)
                {
                    console.log(response);
                }

            });
        }
    });

}