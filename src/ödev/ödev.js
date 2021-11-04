//1 
let kontrol=0;

function calculate(...numbers) {
 for (let i = 0; i < numbers.length; i++) {

        for(let j=2;j<numbers[i];j++){
            if (numbers[i]%j==0) {
                kontrol++;
            }
        }
        if(kontrol!=0){console.log(numbers[i]+"sayisi asal degildir")}
        else {console.log(numbers[i]+"sayisi asaldir")}
        kontrol=0;
    }
    
}
calculate(4,8,7,3,65,79,87,25,77,61,114)
//2

function findIfFriendsOrNot(sayi1,sayi2) {
    let toplam1=0,toplam2=0;
    for(let i =1 ; i<sayi1 ; i++)
    {
        if(sayi1%i==0){ toplam1+=i }
    }
    for(let j =1; j<sayi2; j++){
        if(sayi2%j==0){ toplam2+=j }
    }
    if(toplam1==sayi2 && toplam2==sayi1){console.log(sayi1+" ve "+ sayi2 +" arkadas sayilardir.")}
    else { console.log("Bu sayilar arkadas sayi degillerdir.")}
    
}
findIfFriendsOrNot(284,220)

//3
function findIfPerfectNumberOrNot(){
    let toplam=0;
    for(let sayi=1;sayi<1000;sayi++)
    {
        for(let j=1;j<=sayi;j++)
        {
            if(sayi%j==0){ toplam+=j }
        }

        if(toplam==sayi*2){ console.log(sayi)}
        toplam=0;
    }
}
findIfPerfectNumberOrNot()

//4
function ListPrimeNumbers() {
    let kontrol =0;
    for(let sayi=1;sayi<1000;sayi++)
    {
        if(sayi==1){continue;}
        for(let j=2;j<sayi;j++)
        {
            if(sayi%j==0){kontrol++;} 
        }
        if(kontrol==0)
        {console.log(sayi);}
        kontrol=0;
    }
    
}
ListPrimeNumbers()