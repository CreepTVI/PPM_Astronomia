let targetWind;
function start(){
    targetWind = window.open('','_self','');
}

function closeApp(){
    if (confirm("Sei sicuro di voler uscire dall'applicazione?")){
        try {
            targetWind.open('exit.html', '_self','');
        }catch (e){

        }
    }
}

function closeApp1(){
    if (confirm("Sei sicuro di voler uscire dall'applicazione?")){
        try {
            targetWind.open('../exit.html', '_self','');
        }catch (e){

        }
    }
}

function closeApp2(){
    if (confirm("Sei sicuro di voler uscire dall'applicazione?")){
        try {
            targetWind.open('../../exit.html', '_self','');
        }catch (e){

        }
    }
}