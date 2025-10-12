import React from 'react'
 import { object,string } from 'yup'
 export default object ({
name:string().required().min(4).max(50),

   //email 
    email: string().required("Email is required").email() ,
   

//message 
message:string(). min(5).max(100).required(),              
 

  //phone 
  number: string()
  .matches(/^[0-9]{10}$/, "Phone number must be 10 digits")
  .required("Phone is required")
  .min(10)
  .max(10)
 })