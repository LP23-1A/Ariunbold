"use client";
import { useRouter } from "next/navigation";
import Arrow from "../../components/icons/Arrow";
import Geld from "../../components/icons/Geld";
import Logo from "../../components/icons/Logo";
import axios from "axios";

export default function Finish(){
    const router = useRouter();
    const api = "http://localhost:8001/users";
    let data = JSON.parse(localStorage.getItem("data"));
    const handler = async () => {
        let res = await axios.post(api, {name: data.username,email: data.email, password: data.password, currency_type: data.currency});
        console.log(res);
        router.push("/dashboard");
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
                        <li className="step step-primary">Currency</li>
                        <li className="step step-primary">Finish</li>
                    </ul>
                </div>
            </div>
            <div className="w-[384px] flex flex-col justify-center gap-[32px]">
                <div className="flex flex-col items-center gap-[12px]">
                    <div className="flex flex-col items-center gap-[16px]">
                        <div className="bg-[#0166FF] rounded-[100px] w-fit p-[8px]">
                            <Arrow/>
                        </div>
                        <div className="text-[#0F172A] text-[24px]">Good Job!</div>
                    </div>
                    <div className="text-[#475569] text-center text-[16px]">Your very first account has been created. Now continue to dashboard and start tracking</div>
                </div>
                <button onClick={handler} className="bg-[#0166FF] text-[20px] text-white h-[48px] rounded-[20px]">Go to Dashboard</button>
            </div>
        </div>
    )
}