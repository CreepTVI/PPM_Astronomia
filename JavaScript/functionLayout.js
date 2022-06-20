let targetWind;
function start(){
    targetWind = window.open('','_self','');
}

function closeApp(){
    if (confirm("Sei sicuro di voler uscire dall'applicazione?")){
        targetWind.close();
    }
}