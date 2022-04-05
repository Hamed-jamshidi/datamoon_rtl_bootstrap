
const fetch = require('sync-fetch')
var data = fetch("/constant.json").json();

console.log(data)

export const Credit_type="Credit_type" in data?data['Credit_type']:
{
    1 : 'یک هفته',
    2 : 'دو هفته',
    3 : 'یک ماه',
    4 : 'دایمی'
}

export const  Product_type="Product_type" in data?data['Product_type']:
{
    1: 'خودنگار',
    2: 'رخ نگار',
 }

 export const CreditData= 'CreditData' in data?data['CreditData'] :[
    {
      id: 0,
      credit_count:"نامعتبر",
      credit_type: 1,
      product_type: [1 , 2],
      maximum_camera_count: "نامعتبر",
      expire_date: "نامعتبر",
      
    },
    {
      id: 1,
      credit_count:"نامعتبر",
      credit_type: 2,
      product_type: [1 , 2],
      maximum_camera_count: "نامعتبر",
      expire_date: "نامعتبر",
      
    },
    {
      id: 2,
      credit_count:"نامعتبر",
      credit_type: 3,
      product_type: [1 , 2],
      maximum_camera_count: "نامعتبر",
      expire_date:"نامعتبر",
      
    },
    {
      id: 3,
      credit_count:"نامعتبر",
      credit_type: 4,
      product_type:[1 , 2],
      maximum_camera_count: "نامعتبر",
      expire_date: "نامعتبر",
      
    },   
   
  ]
