//feet to mile converter
function feetToMile(feetValue){
   if (feetValue < 0){
       console.log("Distance can't be a negative value!! Please input corretct value.")
   }
   else if(feetValue> 0){
       // 1 Mile = 5280 foot.
    var convertTOMile = feetValue / 5280;
   }
return convertTOMile;
}





//wood calculator for furniture
function woodCalculator(chair, table, bed){
    if( chair < 0 || table < 0 || bed < 0){
        console.log("Input can't be in negative format!!!");
    }
    else if(chair >= 0 && table >= 0 && bed >= 0){
           var woodForChair = chair * 1;
           var woodForTable = table * 3;
           var woodForBed   = bed * 5;

           var totalWoodCount= woodForChair+ woodForTable + woodForBed;
           return totalWoodCount;
    }

}




//calucate brick 
function brickCalculator(buildingSize){
if(buildingSize <= 0){
    console.log("Buliding Size can't be in negative or null fromat!! Please insert positive value.")
}
else if( buildingSize > 0){
        if( buildingSize <= 10){
            var ammountOfBrickForFirstTenFloor = (buildingSize * 15) * 1000 ;
            return ammountOfBrickForFirstTenFloor;
        }
    
        else if( buildingSize <= 20 && buildingSize > 10){
            var ammountOfBrickForFirstTenFloorAndTOTwentyFloor = ((15 * 10) * 1000) + (((buildingSize - 10) * 12) * 1000 );
             return ammountOfBrickForFirstTenFloorAndTOTwentyFloor;

        }
         else if(buildingSize > 20){
             var topFloors = ((15 * 10) * 1000) + ((12 * 10) * 1000) + (((buildingSize - 20) * 10) * 1000);
             return topFloors;
         }  
}

}




//find friend with smallest name 

//You can insert your friends name in the list to figure out your tiny frineds name>>>> Enjoy!!!
var names = ["Rahim", "Rajib", "kamal", "Islmail", "Rizwanur", "Tom", "Dola"];

function tinyFriend(){
var tinyFriend = names[0].length;
for(var i = 0; i < names.length; i++){
    var find = names[i].length;
    if( find < tinyFriend){
        tinyFriend = names[i];
    }
}
return tinyFriend;
}





//Input Segment!!!

//Please insert Feet value to covert in Mile:
console.log("Mile:"+" "+feetToMile(6700));

//Please insert value of Chairs, Tables and Beds you need bellow:
console.log("Total number of Wood Needed:"+" "+ woodCalculator(4, 1, 3));

//Please Insert Bulfing Floor size to figure out amount of Bricks Needed:
console.log("Total Amount of Bricks Needed:"+" "+ brickCalculator(16));

//Figure out tiny friend
console.log(tinyFriend());


