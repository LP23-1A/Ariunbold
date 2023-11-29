import Category from "@/components/Category";
import ExInfo from "@/components/ExInfo";


export default function Experience(){
    return (
        <div className="flex column max-[900px]:py-[64px] max-[900px]:px-[16px] pad-96-80 container gray-bg gap-48">
            <div className="flex column gap-16">
            <div className="category center">
                Experience
            </div>
                <div className="center font-20-gray">Here is a quick summary of my most recent experiences:</div>
            </div>
            <div className="center column gap-48">{<ExInfo/>}</div>
        </div>
    )
}