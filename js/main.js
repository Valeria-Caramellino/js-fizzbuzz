const contentitore = document.getElementById("container");

for (let num = 0; num < 101; num++) {
    
    if (num %3==0  && num %5==0 ) {
        contentitore.innerHTML += `<div class="box">${"FixBuzz"}</div>`;
        
        console.log (num + "fixxzBBBUUUZ");
    }else if (num %3==0){
        contentitore.innerHTML += `<div class="box">${"Buzz"}</div>`;
        console.log (num +"buz" );
    }else if ( num %5==0){
        contentitore.innerHTML += `<div class="box">${"Fizz"}</div>`;
        console.log (num + "fixxz");
    }else{
        contentitore.innerHTML += `<div class="box">${num}</div>`;
        console.log (num );
    }
}

