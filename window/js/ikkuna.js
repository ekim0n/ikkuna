//Aki Strömberg
function window_calculation(){
    //Rivientyhjennys
    document.getElementById("error").innerHTML = "";
    document.getElementById("window_height").innerHTML = "";
    document.getElementById("window_width").innerHTML = "";
    document.getElementById("window_amount").innerHTML = "";
    document.getElementById("wood").innerHTML = "";
    document.getElementById("glass").innerHTML = "";
    document.getElementById("woods").innerHTML = "";
    document.getElementById("glasses").innerHTML = "";

    //Muuttujat
    let korkeus = Number(document.getElementById("window_height").value);
    let leveys = Number(document.getElementById("window_width").value);
    let määrä = Number(document.getElementById("window_amount").value);

   //Laskutoimitukset
    let ikkuna = ((korkeus - 10) * (leveys - 10)) / 10000;
    let pituus = ((((korkeus * 2) + ((leveys-12) * 2))) + (((korkeus-12) * 2 ) + (leveys * 2))) / 100;
    //Monikot
    let ikkunat = ikkuna * määrä;
    let pituudet = pituus * määrä; 

    //Virheilmoitukset koossa
    if(korkeus > 200){
        document.getElementById("error").innerHTML = "Maximum height and width of window is 200cm.";
        return;
    }else if(leveys > 200){
        document.getElementById("error").innerHTML = "Maximum height and width of window is 200cm.";
        return;
    }else if(korkeus < 50){
        document.getElementById("error").innerHTML = "Minimum height and width of window is 50cm.";
        return;
    }else if(leveys < 50){
        document.getElementById("error").innerHTML = "Minimum height and width of window is 50cm.";
        return;
    }
    //Virheilmoitukset määrässä
    if(määrä == 0){
        document.getElementById("error").innerHTML = "No amount. 1 assumed." ;
        return;
    }else if(määrä > 10){
        document.getElementById("error").innerHTML = "No more than 10 equal size windows." ;
        return;
    }

    //Ikkunan koon määritys
    if(ikkuna < 0.5){
        koko = "Small window";
    }else if(ikkuna > 0.6 && ikkuna < 1.5){
        koko = "medium window";
    }else if(ikkuna > 1.6 && ikkuna < 2.5){
        koko = "large window";
    }else if(ikkuna > 2.6){
        koko = "huge window"
    }
    
    //Input
    document.getElementById("wood").innerHTML = pituus;
    document.getElementById("glass").innerHTML = ikkuna;
    document.getElementById("woods").innerHTML = pituudet.toFixed(2);
    document.getElementById("glasses").innerHTML = ikkunat.toFixed(2);
    document.getElementById("size").innerHTML = koko;
    
}