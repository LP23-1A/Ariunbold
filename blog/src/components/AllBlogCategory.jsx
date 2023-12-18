import { v4 as uuidv4 } from "uuid"

export default function AllBlogCategory({cate}){
    return (
        <>
        {cate.map((el) => {
            let key = uuidv4()
            return (
                <div key={key} className="w-fit py-[4px] px-[10px] flex justify-center items-center font-14-blue rounded-[6px] bg-[#4b6bfb0d]">
                    {el}
                </div>
            )
            
        })}
        </>
    )
}