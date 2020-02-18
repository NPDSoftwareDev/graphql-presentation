const data = {
  products: [
    {id:1,name:"S800",document:"https://S800DocumentUrl"},
    {id:2,name:"S900",document:"https://S900DocumentUrl"}
  ],
  customers: [
    {id:1,name:"TYSON CHICKEN LOUISIANA", contactLanguage:"English"},
    {id:2,name:"TYSON CHICKEN CAJUN", contactLanguage:"French"}
  ],
  orders: [
    {id:1,customerId:1,date:"01/01/1990",products:[1,2],services:[],invoiceAmount:17000,invoiceDocument:"http://invoiceDocumentUrl"},
    {id:2,customerId:1,date:"01/01/1990",products:[1],services:[],invoiceAmount:5600,invoiceDocument:"http://invoiceDocumentUrl"},
    {id:3,customerId:2,date:"01/01/1990",products:[1,2],services:[],invoiceAmount:100,invoiceDocument:"http://invoiceDocumentUrl"},
    {id:4,customerId:1,date:"01/01/1990",products:[1],services:[],invoiceAmount:8888,invoiceDocument:"http://invoiceDocumentUrl"},
  ],
  images: [
    {id:1,productId:1,imageUrl:"https://imageUrl1" },
    {id:2,productId:2,imageUrl:"https://imageUrl2" },
    {id:3,productId:2,imageUrl:"https://imageUrl2b" },
  ],
};

module.exports.data = data;
