class Customer{
    constructor(id,customerNumber){
        //instance a id ve customerNumber id field larını ekliyorum.
        this.id=id //instance ın yani customer ın id si
        this.customerNumber=customerNumber
    }
}

let customer =new Customer(1,"12345")
//instance a yapılan prototyping
customer.name="Murat Kurtboğan"
console.log(customer.id)
//class a yapılan prototyping. Yeni özellik ekliyoruz.
Customer.bisey="bisey" //static
console.log(Customer.bisey)

console.log(customer.customerNumber)

class IndividualCustomer extends Customer{
    constructor(firstName,id,customerNumber){
        super(id,customerNumber) // bunları customer class ına yollayacak. C# daki base yapısıdır.
        this.firstName=firstName
    }
}

class CorporateCustomer extends Customer{
    constructor(companyName,id,customerNumber){
        super(id,customerNumber)
        this.companyName=companyName
    }
}