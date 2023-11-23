import Category from "@/components/Category";
import ExInfo from "@/components/ExInfo";


export default function Experience(){
    return (
        <div className="flex column pad-96-80 container gap-48">
            <div className="flex column gap-16">
            <div className="category center">
                Experience
            </div>
                <div className="center">Here is a quick summary of my most recent experiences:</div>
            </div>
            <div className="center">{<ExInfo/>}</div>
            <div className="center">{<ExInfo/>}</div>
            <div className="center">{<ExInfo/>}</div>
        </div>
    )
}