    //exo1:

function surfaceRectangle(){

    var longueur;
    var largeur;

    longueur = prompt("saisissez la longueur ");
    largeur = prompt("saisissez la largeur ");

    alert("La surface vaut "+longueur*largeur);
    alert("Le périmètre vaut "+2*(Number(longueur)+Number(largeur)));

}

    //exo2:

function surfaceCercle(){

    var rayon=parseFloat(prompt("saisissez le rayon du cercle"));
    alert ("Le périmètre vaut "+(Math.PI*(rayon*2)));
    alert ("La surface vaut "+(Math.PI*(rayon*rayon)));
}

    //exo3:
    
    var a = 3;
    var b = 2;

    function multiplie(x=8){

    

    return 3*x;
}
    function affiche(){

    alert(multiplie(a));
    alert(multiplie(b));
}

    //exo4:

    var tab=[-2,1,4];
    function additionne(x){

    return (x+2);
}

    function afficher(){

    alert(additionne(tab[0]));
    alert(additionne(tab[tab.length-2]));
    alert(additionne(tab[tab.length-1]));
    
}

    //exo5:

    function boucle(){

    var tab = new Array(x);

    for (var i=0;i<tab.length;i++)
        {
    tab[i]=i*i;
        }
    alert(tab);
        }
    function boucle2(){

    var longueur=parseInt(prompt('Quelle est la longueur souhaitée du tableau?'));
    var tab= new Array();

    for (var i=0;i<longueur;i++)
        {
    tab[i]=i*i;
        }
    alert(tab);
        } 

        
        //exo6: