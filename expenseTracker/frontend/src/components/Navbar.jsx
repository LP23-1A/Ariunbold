"use client";
import { useRouter } from "next/navigation";
import Add from "./icons/Add";
import Logo from "./icons/Logo";
import Profile from "./icons/Profile";

export default function Navbar(){
    const router = useRouter();
    return (
        <div className="flex justify-between w-[100vw] py-[16px] px-[120px] bg-white">
            <div className="flex gap-[24px] items-center">
                <Logo/>
                <button onClick={() => router.push("/dashboard")} className="text-[#0F172A] text-[16px]">Dashboard</button>
                <button onClick={() => router.push("/records")} className="text-[#0F172A] text-[16px]">Records</button>
            </div>
            <div className="flex gap-[24px] items-center">
                <button className="bg-[#0166FF] rounded-[20px] p-[12px] gap-[4px] text-white h-[32px] justify-center items-center flex"><Add/> Record</button>
                <Profile/>
            </div>
        </div>
    )
}