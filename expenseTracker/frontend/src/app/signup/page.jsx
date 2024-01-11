"use client";
import Geld from "../../components/icons/Geld";
import Logo from "../../components/icons/Logo";
import { useEffect, useState } from 'react'
import axios from 'axios';
import { useRouter } from "next/navigation";



export default function SignUp(){

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const currency = "MNT";

    const handler = async () => {
        const input = {
            username,
            email,
            password,
            currency: "MNT",
        };
        localStorage.setItem("data", JSON.stringify(input));
        router.push("/currency");
    };
    const router = useRouter();

    return (
        <div className="flex">
            <div className="flex flex-col gap-[40px] justify-center items-center bg-white h-[100vh] w-[50%]">
                <div className="flex p-[6px] gap-[10px] items-center">
                    <Logo/>
                    <Geld/>
                </div>
                <div className="flex flex-col gap-[8px] items-center">
                    <p className="text-[24px] text-[#0F172A]">Create Geld account</p>
                    <p className="text-[16px] text-[#334155]">Sign up below to create your Wallet account</p>
                </div>
                <div className="flex flex-col gap-[16px]">
                    <input onChange={(event) => setUsername(event.target.value)} className="h-[48px] p-[16px] rounded-[8px] bg-white border-[1px] border-[#D1D5DB] text-black" type="text" placeholder="Name"/>
                    <input onChange={(event) => setEmail(event.target.value)} className="h-[48px] p-[16px] rounded-[8px] bg-white border-[1px] border-[#D1D5DB] text-black" type="text" placeholder="Email"/>
                    <input onChange={(event) => setPassword(event.target.value)} className="h-[48px] p-[16px] rounded-[8px] bg-white border-[1px] border-[#D1D5DB] text-black" type="password" placeholder="Password"/>
                    <input className="h-[48px] p-[16px] rounded-[8px] bg-white border-[1px] border-[#D1D5DB] text-black" type="password" placeholder="Re-Password"/>
                    <button onClick={handler} className="rounded-[20px] w-[384px] h-[48px] bg-[#0166FF] text-white text-[20px]">Sign up</button>
                </div>
                <div className="flex">
                    <p className="text-[#0F172A] text-[16px]">Already have account?</p>
                    <button onClick={() => router.push("/login")} className="px-[12px] h-[32px] text-[#0166FF] bg-none justify-center flex">Log in</button>
                </div>
            </div>
            <div className="bg-[#0166FF] w-[50%] h-[100vh]"></div>
        </div>
    )
}