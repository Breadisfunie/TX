var rev = "forward";
function titlebar(val){
    var msg  = "​Terminators X";
    var res = " ";
    var speed = 300;
    var pos = val;
    msg = msg;
    var le = msg.length - 1;
    if(rev == "forward"){
        if(pos < le){
            pos = pos+1;
            scroll = msg.substr(0,pos);
            document.title = scroll;
            timer = window.setTimeout("titlebar("+pos+")",speed);
        }
        else {
            rev = "backward";
            timer = window.setTimeout("titlebar("+pos+")",speed);
        }
    }
    else {
        if(pos > 0) {
            pos = pos-1;
            var ale = le-pos;
            scrol = msg.substr(ale,le);
            document.title = scrol;
            timer = window.setTimeout("titlebar("+pos+")",speed);
        }
        else {
            rev = "forward";
            timer = window.setTimeout("titlebar("+pos+")",speed);
        }
    }
}
titlebar(0);
