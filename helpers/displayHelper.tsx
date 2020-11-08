class DisplayHelpers {
    constructor() {}
    displayCurrency=(currencyCode:string):string=>{
        return currencyCode?"$" : "USD $";
    }
    formatPrice=(price:number) : string=>{         
        return price.toLocaleString('de-De');
    }
    showCondition=(condition:string):string=>{
        return condition =="new"? "Nuevo" : "Usado";
    }
    quantitySold=(quantity:number):string=>{
        return quantity>0? " - "+ quantity + " vendidos" : "";
    }
}
export default DisplayHelpers;
