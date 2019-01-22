let box1 = document.getElementById('box1');
let pos = 0;
dirDox=true;
second=true;
let t=setInterval(move,5);
function move() {
    if(dirDox===true){
        if(pos<350){
    pos++;
    box1.style.left=pos+'px';
    box1.style.top=pos+"px";



}
        else {
            dirDox = false;

return;
        }
    }
    else
        {
        if(pos>=0){
        pos--;
        box1.style.left=pos+'px';
        box1.style.top=pos+'px';


        }
        else
            {
        dirDox=true;
        return;
    }

    }


}

