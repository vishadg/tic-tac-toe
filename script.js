var myGamePiece;
var myObstacles = [];
var mySound;
var myMusic;
let sign="X";
let disp= document.getElementById("player");


function printx(number){
  let ele = document.getElementById("r"+number);
  console.log(ele);
  if(ele.innerText==""){
  ele.innerText=sign;
  winner();
  checkSign();
  disp.innerText= sign+" 's turn";
  
  }




}

function checkSign(){
     if(sign=='X'){
       sign='O';
     }
     else{
       sign='X';
   }
}
function getbox(no){
    return document.getElementById("r"+no).innerHTML;
}

function checkmove(a,b,c,m){
  if(getbox(a)==m && getbox(b)==m && getbox(c)==m)
  return true;
  else return false;
 

}
function winner()
{
    if(checkmove(1,2,3,sign)||checkmove(4,5,6,sign)||checkmove(7,8,9,sign)||checkmove(1,4,7,sign)||
    checkmove(2,5,8,sign)||checkmove(7,8,9,sign)||checkmove(1,5,9,sign)||checkmove(3,5,7,sign))
    {
   disp.innerHTML = sign+" wins";
   for(i=1;i<=9;i++){
    document.getElementById("r"+i).innerHTML="";
  }
  throw "game ends";
    }
    else{
      if(getbox(1)!=""&& getbox(2)!=""&& getbox(3)!=""&& getbox(4)!=""&&
      getbox(5)!=""&& getbox(6)!=""&& getbox(7)!=""&& getbox(8)!=""&& getbox(9)!="")
      {
      disp.innerHTML="It's a tie";
      throw "Its a tie";
      }
    }
  
 }