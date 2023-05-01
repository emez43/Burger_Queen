//udvozles
const d: Date = new Date()
let hour: number = d.getHours()

if(hour<9){
    document.querySelector('h2')!.innerHTML= `Jó reggelt! <h5>Ennél egy reggelit, vagy ebédet? </h5>`
}
else
if(hour>17){
    document.querySelector('h2')!.innerHTML= `Jó estét! <h5>Ennél egy vacsorát?</h5>`
}
else{
    document.querySelector('h2')!.innerHTML= `Jó napot! <h5>Ennél egy ebédet, vagy vacsorát?</h5>`
}


// refresh              

//function refreshPage(){
//    window.location.reload();
//} 


let logo= document.querySelector('#pic')! as HTMLImageElement
//let logo = document.querySelector<HTMLImageElement>('#pic')!;


logo.style.left = '0%';

logo.onclick = function logoMove(evt){

    

    if (logo.style.left === '0%' || logo !== null) {
        setTimeout(function x(){logo.style.left = 'calc(100% - 290px)';},10)
        setTimeout(function x(){logo.style.left = 'calc(100% - 240px)';},500)
        setTimeout(function x(){logo.style.left = 'calc(100% - 190px)';},1000)
        setTimeout(function x(){logo.style.left = 'calc(100% - 140px)';},1500)
        setTimeout(function x(){logo.style.left = 'calc(100% - 90px)';},2000)
        setTimeout(function y (){window.location.reload()} , 2500)
    } else {
        window.location.reload(); 
     // logo.style.left = '0%';
    }
}