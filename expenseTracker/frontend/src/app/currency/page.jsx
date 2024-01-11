"use client";
import CurrencyLogo from "@/components/icons/CurrencyLogo";
import Geld from "../../components/icons/Geld";
import Logo from "../../components/icons/Logo";
import { useRouter } from "next/navigation";
import { useState } from "react";



export default function Currency(){
    const router = useRouter();
    let data = JSON.parse(localStorage.getItem("data"));

    const [currency, setcurrency] = useState("MNT");
    const handler = async () => {
        data.currency = currency; 
        localStorage.setItem("data", JSON.stringify(data));
        router.push("/finish");
    };

    return (
        <div className="flex flex-col items-center pt-[40px] pb-[399px] bg-white gap-[141px]">
            <div className="flex flex-col items-center gap-[48px]">
                <div className="flex p-[6px] gap-[10px] items-center">
                    <Logo/>
                    <Geld/>
                </div>
                <div className="flex">
                    <ul className="steps w-[200px]">
                        <li className="step step-primary text-black">Currency</li>
                        <li className="step text-black">Finish</li>
                    </ul>
                </div>
            </div>
            <div className="flex flex-col gap-[32px] w-[384px]">
                <div className="flex flex-col gap-[12px]">
                    <div className="flex flex-col gap-[24px] items-center">
                        <div className="flex flex-col gap-[16px] items-center">
                            <div className="bg-[#0166FF] rounded-[100px] flex p-[8px] w-fit">
                                <CurrencyLogo/>
                            </div>
                            <div className="text-[#0F172A] text-[24px]">Select base currency</div>
                        </div>
                        <select value={currency} onChange={(event) => setcurrency(event.target.value)} className="select select-bordered bg-white text-black w-full max-w-xs">
                            <option className="text-black" value="MNT">MNT - Mongolian Tugrik</option>
                            <option className="text-black" value="USD">USD - United States Dollar</option>
                        </select>
                    </div>
                    <div className="text-[12px] text-[#475569]">Your base currency should be the one you use most often. All transaction in other currencies will be calculated based on this one </div>
                </div>
                <button onClick={handler} className="bg-[#0166FF] h-[48px] flex items-center justify-center rounded-[20px] text-white">Confirm</button>
            </div>
        </div>
    )
}