let student={id:1,name:"Adem"}
function save(puan=10,ogrenci) {
    //console.log(ogrenci.name+" : "+puan)
}
save(undefined,student)

let students=["Engin Demiroğ","Halit Kalayi","Adem Yılmaz","Haşim Doğan"]

//console.log(students)

let students2=[student,{id:2,name:"Hasib"},"Ankara",{city:"Istanbul"}]
//console.log(students2)

//rest = geriye kalan parametreler bir dizidir. c# daki params gibi.
let showProducts = function(id,...products) {
    console.log(id)
    console.log(products)
}

//console.log(typeof showProducts)
//showProducts(10,["Elma","Armut","Karpuz"],"Istanbul",34)

//spread= ayrıştırmak. Elimizdeki bir array i ayrıştırıyoruz.
let points=[1,2,3,50,4,60,14]

//console.log(...points)
//Math.max dizi de direkt olarak işlem yapamaz. O nedenle spread ile bunları ayrıştıyoruz.
console.log(Math.max(...points))

console.log(..."ABC","D",..."EFG","H")

//Destructuring. Elimizdeki array in değerlerini değişkenlere atıyoruz.

let populantions =[10000,20000,30000,[40000,50000]]
let [small,medium,high,[veryhigh,maximum]]=populantions

console.log(small)
console.log(medium)
console.log(high)
console.log(veryhigh)
console.log(maximum)

function someFunction([small1],number) {
    console.log(small1)
    console.log(number)
}
someFunction(populantions,"Ankara")

let category = {id:1,name:"İçecek"}
console.log(category.id)
console.log(category["name"])

let {id,name}=category

console.log(id)
console.log(name)


