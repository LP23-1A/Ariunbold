import axios from "axios";
import { useState } from "react";

export default function CategoryModal( modalOpener ) {
    const api = "http://localhost:8001/category";
    const [name, setName] = useState("");
    
    const handler = async () => {
        let res = await axios.post(api, {name: name});
        console.log(modalOpener)
    }

  return (
    <div className="absolute top-0 left-0 flex justify-center items-center w-[100vw] h-[100vh]">
        <div className="bg-white z-20 flex rounded-[12px] flex-col">
            <div className="px-[24px] py-[20px] flex justify-between w-[494px]">
                <p className="text-[#0F172A] text-[20px]">Add Category</p>
                <button className="text-[#0F172A] text-[20px]">Exit</button>
            </div>
            <div className="flex flex-col justify-center p-[24px] gap-[32px]">
                <input onChange={(event) => setName(event.target.value)} className="bg-[#F9FAFB] p-[16px] h-[48px] rounded-[8px] border-[#D1D5DB] border-[1px] text-black" type="text" placeholder="Name"/>
                <button onClick={handler} className="bg-[#16A34A] h-[40px] justify-center items-center flex rounded-[20px]">Add Category</button>
            </div>
        </div>
        <div className="w-[100%] h-[100%] z-10 bg-black opacity-[0.2] absolute left-0 top-0"></div>
    </div>
  );
}
