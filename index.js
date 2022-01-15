// Code your solution in this file!
let hq = 42;

function distanceFromHqInBlocks(blocks){
   if (blocks > hq){
        return (blocks - hq);
   }else if (blocks < hq){
        return (hq - blocks);
   }
};

function distanceFromHqInFeet(blocks){
    if (blocks > hq){
        return ((blocks - hq)*264);
   }else if (blocks < hq){
        return ((hq - blocks)*264);
   }
}

function distanceTravelledInFeet(start,destination){
    if (start > destination){
        return ((start - destination)*264);
   }else if (start < destination){
        return ((destination - start)*264);
   }
}

function calculatesFarePrice(start,destination){
    const distance = distanceTravelledInFeet(start,destination)
    if (distance < 400){
        return 0;
    }else if (distance >= 400 && distance <= 2000){
        return ((distance - 400)* 0.02);
    }else if (distance > 2000 && distance < 2500){
        return 25;    
    }else if (distance >= 2500){
        return 'cannot travel that far'
    }
}