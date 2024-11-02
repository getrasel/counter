
let counter = 0

function plus(){
    counter++;
    document.getElementById('counterValue').innerHTML = counter;
}
function minus(){
    if(counter > 0){
        counter--;
        document.getElementById('counterValue').innerHTML = counter;
    }
}
