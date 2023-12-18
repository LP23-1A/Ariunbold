import TrendingCategory from "./TrendingCategory"
import { MockData } from "./MockData"
import { v4 as uuidv4 } from "uuid"

const News = ({ img, title }) => {
    return (
        <div className="relative w-[293px] h-[320px] flex flex-col justify-end items-center rounded-[12px]">
                <div className="w-[293px] h-[320px] bg-black opacity-[40%] absolute rounded-[12px]"></div>
                <img className="w-[293px] h-[320px] rounded-[12px] object-cover" src={img} alt="" />
                <div className="p-[25px] flex absolute flex-col gap-[16px]">
                    <TrendingCategory/>
                    <p className="font-18-white w-[230px] h-[76px]">{title}</p>
                </div>
            </div>
    );
};

export default function TrendingNews(){
    return (
        <>
        {MockData.map((item) => {
            let key = uuidv4();
            return (<News key={key} img={item.img} title={item.title}/>)
        })}
        </>
    )
}