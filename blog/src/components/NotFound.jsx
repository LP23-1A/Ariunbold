import Link from "next/link";

export default function NotFound(){
    return (
        <div className="flex gap-[40px]">
            <p className="text-[72px] text-black">404</p>
            <hr className="h-[100%]"/>
            <div className="flex flex-col gap-[20px]">
                <p className="text-[24px] text-black">Page Not Found</p>
                <p className="text-[18px] text-[#696A75]">We're sorry, This page is unknown or does not exist the page you are looking for.</p>
                <Link href="/" className="bg-[#4B6BFB] text-white text-[14px] rounded-[6px] px-[16px] py-[10px] flex items-center justify-center">Back To Home</Link>
            </div>
        </div>
    )
}