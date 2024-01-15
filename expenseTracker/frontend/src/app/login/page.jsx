"use client";
import { useRouter } from "next/navigation";
import Geld from "../../components/icons/Geld";
import Logo from "../../components/icons/Logo";
import { useState } from "react";
import axios from "axios";


export default function Login()
{
    const api = "http://localhost:8001/users"; 
    const router = useRouter();
    
    const [email,  setemail] = useState('');
    const [password,  setpassword] = useState('');

    const handler = async () => {
      let res = await axios.get(api, {  email , password });
      let checker = 0;
      res.data.map((index) => {
        if ( index.email === email && index.password === password ){
            checker++;
        }
      })
      if ( checker === 1 ){
        router.push("/dashboard")
        console.log(checker)
      } else {
        console.log('check password and username', checker)
      }
    }

    return (
        <div className="flex">
            <div className="flex flex-col gap-[40px] justify-center items-center bg-white h-[100vh] w-[50%]">
                <div className="flex p-[6px] gap-[10px] items-center">
                    <Logo/>
                    <Geld/>
                </div>
                <div className="flex flex-col gap-[8px] items-center">
                    <p className="text-[24px] text-[#0F172A]">Welcome Back</p>
                    <p className="text-[16px] text-[#334155]">Welcome back, Please enter your details</p>
                </div>
                <div className="flex flex-col gap-[16px]">
                    <input onChange={(event) => setemail(event.target.value)} className="h-[48px] p-[16px] rounded-[8px] border-[1px] bg-white text-black border-[#D1D5DB]" type="text" placeholder="Email"/>
                    <input onChange={(event) => setpassword(event.target.value)} className="h-[48px] p-[16px] rounded-[8px] border-[1px] bg-white text-black border-[#D1D5DB]" type="password" placeholder="Password"/>
                    <button onClick={handler} className="rounded-[20px] w-[384px] h-[48px] bg-[#0166FF] text-white text-[20px]">Log in</button>
                </div>
                <div className="flex">
                    <p className="text-[#0F172A] text-[16px]">Don’t have account?</p>
                    <button onClick={() => router.push("/signup")} className="px-[12px] h-[32px] text-[#0166FF] bg-none justify-center flex">Sign up</button>
                </div>
            </div>
            <div className="bg-[#0166FF] w-[50%] h-[100vh]"></div>
        </div>
    )
}