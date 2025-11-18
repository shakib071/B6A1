
//problem 1

type formatType =  string | number | boolean;

const formatValue = (value: formatType): formatType=> {

    if(typeof value === "string"){
        return value.toUpperCase();
    }

    else if(typeof value === "number"){
        return value*10;
    }

    else if(typeof value === "boolean"){
        return !value;
    }
    else{
        return 'Invalid Type';
    }

}


//problem 2

type lengthType = string | any[];
const getLength = (value: lengthType):(number | undefined) =>{
    if(typeof value === "string"){
        return value.length;
    }
    else if(Array.isArray(value)){
        return value.length;
    }
    
}


//problem 3

class Person {
    name: string;
    age:  number;

    constructor(name:string,age:number){
        this.name = name;
        this.age = age;
    }

    getDetails(): string {
        return `Name: ${this.name}, Age: ${this.age}`;
    }
}




//problem 4


type ItemType = {
    title:string;
    rating: number;
}

const filterByRating = (items: ItemType[]):ItemType[] => {
    const filter = items.filter(item => item.rating >= 4);
    return filter;
}


//problem 5

type UserType = {
    id:number;
    name:string;
    email: string;
    isActive: boolean;
}

const filterActiveUsers = (users: UserType[]):UserType[] => {
    const filteredUser = users.filter(user => user.isActive === true);
    return  filteredUser;
}


//problem 6


interface Book {
    title : string;
    author : string;
    publishedYear : number;
    isAvailable : boolean;
}

const printBookDetails = (book:Book) =>{
    const avail = book.isAvailable ? "Yes" : "No";
    console.log(`Title: ${book.title}, Author: ${book.author}, Published: ${book.publishedYear}, Available: ${avail}`);
}


//problem 7


type uniqueType = string | number;

const getUniqueValues = (arr1: uniqueType[],arr2:uniqueType[]): uniqueType[] => {
    const result : uniqueType[] = [];

    for(let i=0;i<arr1.length;i++){
        let exists = false;

        for(let j=0;j<result.length;j++){
            if(result[j] === arr1[i]){
                exists=true;
                break;
            }
        }

        if(!exists){
            result.push(arr1[i]);
        }
    }


    for(let i=0;i<arr2.length;i++){
        let exists = false;

        for(let j=0;j<result.length;j++){
            if(result[j] === arr2[i]){
                exists=true;
                break;
            }
        }

        if(!exists){
            result.push(arr2[i]);
        }
    }

    return result;
}



//problem 8


type ProductType = {
    name:string;
    price: number;
    quantity: number;
    discount?: number;
}

const calculateTotalPrice = (products: ProductType[]): number => {
    if(products.length === 0){
        return 0;
    }

    const total = products.map(product => {
        let price = product.price * product.quantity;

        if(product.discount !== undefined){
            price = price - (price * product.discount) / 100;
        }
        
        return price;
    }).reduce((sum,val)=> sum+val,0);

    return total;
}
