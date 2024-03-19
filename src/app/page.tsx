"use client"
import Image from "next/image";
import Header from "./components/Header";
import PropertyList from "./components/PropertyList";
import { useEffect } from "react";
import axios from "axios";
export default function Home() {
  useEffect(()=>{
    fetch("http://localhost:8080/api/users").then(response=>response.json()).then(data=>{console.log(data)})
  },[])

  const userData = {
    fName:"Alfonso",
    lName:"Lima",
    pass:"password123",
    confPass:"password123"
  }
  const registerUser = (fName:string,lName:string,pass:string,confPass:string)=>{
    const registrationData = {
      fName: fName,
      lName: lName,
      pass: pass,
      confPass: confPass
    };

    axios.post('http://localhost:8080/api/registration', registrationData)
    .then(response => console.log(response.data)) // Handle success response
    .catch(error => console.error('Error:', error.response.data)); // Handle error response
  
  }
  return (
    <div className="">
        <Header/>
        <PropertyList/>

    </div>
  );
}
