import TrendingNews from "./TrendingNews";

export default function Trending(){
    return (
        <div className="flex flex-col gap-[30px]">
            <div className="font-24-black"><b>Trending</b></div>
            <div className="flex gap-[20px]">
                <TrendingNews/>
            </div>
        </div>
    )
}