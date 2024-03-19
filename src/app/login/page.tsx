"use client";
import React from "react";
import Link from "next/link";
import { useState } from "react";
import axios from "axios";
export default function Login() {
  const [formData, setFormData] = useState({
    fName: "",
    lName: "",
    pass: "",
  });
  const loginUser = (
    fName: string,
    lName: string,
    pass: string,
  ) => {
    const registrationData = {
      fName: fName,
      lName: lName,
      pass: pass,
    };

    axios
      .post("http://localhost:8080/api/login", registrationData)
      .then((response) => console.log(response.data)) // Handle success response
      .catch((error) => console.error("Error:", error.response.data)); // Handle error response
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // Prevent default form submission behavior

    // Call registerUser function with form data
    loginUser(
      formData.fName,
      formData.lName,
      formData.pass,
    );
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div className="bg-[#1D3461] px-[190px] py-[47px] min-h-screen">
      <div className="text-center text-white text-[32px] font-bold">Login</div>
      <form className="flex flex-col gap-[6px]" onSubmit={handleSubmit}>
        <label className="text-white">First Name:</label>
        <input
          className="rounded-[15px] px-2 py-2"
          type="text"
          name="fName"
          value={formData.fName}
          onChange={handleChange}
        />
        <label className="text-white">Last Name:</label>
        <input
          className="rounded-[15px] px-2 py-2"
          type="text"
          name="lName"
          value={formData.lName}
          onChange={handleChange}
        />
        <label className="text-white">Password:</label>
        <input
          className="rounded-[15px] px-2 py-2"
          type="password"
          name="pass"
          value={formData.pass}
          onChange={handleChange}
        />
        <input
          className="mt-6 w-fit rounded-[20px] px-[40px] bg-slate-500"
          type="submit"
          value="Login"
        />
      </form>
      <div className="mt-6 w-fit rounded-[20px] px-[40px] bg-slate-500">
        Register
      </div>
    </div>
  );
}
