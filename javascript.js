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

    var tab=[-2,1,4];
    function soustrait(x)
    {
    if (x >= 0) return (x-2); else return "Nombre négatif!";
    }
    function affiche()
    {
    alert(soustrait(tab[0]));
    alert(soustrait(tab[tab.length-1]));
    }
    
    //exo7:

    function jourDeLaSemaine(){
        var aujourdhui= new Date;
        jour=aujourdhui.getDay();
        var jourFrancais ;
        switch (jour) {
        case 0 : jourFrancais="dimanche";break;
        case 1 : jourFrancais="lundi";break;
        case 2 : jourFrancais="mardi";break;
        case 3 : jourFrancais="mercredi";break;
        case 4 : jourFrancais="jeudi";break;
        case 5 : jourFrancais="vendredi";break;
        case 6 : jourFrancais="samedi";break;
        default: jourFrancais="jour inexistant"; break;
        }
        alert("Nous sommes "+jourFrancais+".");
        }

    //exo10:

    
    function MouseRollover(MyImage) 
    {
        MyImage.src = "img1.jpg";
    }
    function MouseOut(MyImage) 
    {
        MyImage.src = "img2.jpeg";
    }

    //exo11:

    function ModifParagraphe(){
        return 0;
    }
    var element=document.getElementById(id);

    function Centrage_H1(){
        return 0;
    }

    //exo12:

    var myWindow;

            function openWin() 
            {
            myWindow = window.open("", "myWindow", "width=200, height=200");
            myWindow.document.write("<p>coucou</p>");
            }

            function moveWin() 
            {
            myWindow.moveBy(50, 50);
            myWindow.focus();
            }

            function moveWinRelative() 
            {
            myWindow.moveBy(-50, -50);
            myWindow.focus();
            }

            function resizeWin() 
            {
                myWindow.resizeTo(300, 100);
                myWindow.focus();
            }
