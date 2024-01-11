"use client";
import Navbar from "@/components/Navbar";
import DotBlue from "@/components/icons/DotBlue";
import DotGreen from "@/components/icons/DotGreen";
import Down from "@/components/icons/Down";
import GeldWhite from "@/components/icons/GeldWhite";
import LogoWhite from "@/components/icons/LogoWhite";
import Noisy from "@/components/icons/Noisy";
import Rounded from "@/components/icons/Rounded";
import Signal from "@/components/icons/Signal";
import Up from "@/components/icons/Up";

export default function Dashboard(){
    return(
        <div>
            <Navbar/>
            <div className="py-[24px] bg-[#E2E8F0] h-[100vh]">
                <div className="flex gap-[24px] justify-center">
                    <div className="w-[384px] h-[229px] rounded-[12px] overflow-hidden relative">
                        <div className="bg-[#0166FF] w-full h-full absolute"></div>
                        <Noisy/>
                        <Rounded/>
                        <Signal/>
                        <div className="absolute flex items-center gap-[4px] top-[36px] left-[36px]">
                            <LogoWhite/>
                            <GeldWhite/>
                        </div>
                        <div className="absolute left-[32px] bottom-[32px]">
                            <p className="text-[16px] opacity-[50%] text-white">Cash</p>
                            <p className="text-[24px] text-white">10,000,00</p>
                        </div>
                    </div>
                    <div className="flex flex-col bg-white w-[384px] rounded-[12px]">
                        <div className="px-[24px] flex py-[20px] items-center gap-[8px] text-[#0F172A]">
                            <DotGreen/>
                            Your Income
                        </div>
                        <hr className="w-[100vw]"/>
                        <div className="px-[24px] pt-[20px] pb-[24px] gap-[16px] flex flex-col">
                            <div>
                                <p className="text-black text-[36px]">1,200,000₮</p>
                                <p className="text-[#64748B] text-[18px]">Your Income Amount</p>
                            </div>
                            <div className="flex gap-[8px]">
                                <Up/>
                                <p>32% from last month</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col bg-white w-[384px] rounded-[12px]">
                        <div className="px-[24px] flex py-[20px] items-center gap-[8px] text-[#0F172A]">
                            <DotBlue/>
                            Total Expenses
                        </div>
                        <hr className="w-[100vw]"/>
                        <div className="px-[24px] pt-[20px] pb-[24px] gap-[16px] flex flex-col">
                            <div>
                                <p className="text-black text-[36px]">-1,200,000₮</p>
                                <p className="text-[#64748B] text-[18px]">Your Income Amount</p>
                            </div>
                            <div className="flex gap-[8px]">
                                <Down/>
                                <p>32% from last month</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div></div>
                <div></div>
            </div>
            
        </div>
    )
}