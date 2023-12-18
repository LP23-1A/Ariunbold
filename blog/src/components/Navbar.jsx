import Link from "next/link";
import Logo from "./icons/Logo";
import SearchIcon from "./icons/SearchIcon";

export default function Navbar(){
    return (
        <div className="flex w-[1917px] gap-[118px] py-[32px] px-[350px]">
            <div>
                <Logo/>
            </div>
            <div className="flex items-center gap-[21px]">
                <div className="flex w-[667px] justify-center gap-[40px]">
                    <Link href="/" className="font-16-gray">Home</Link>
                    <Link href="/blog" className="font-16-gray">Blog</Link>
                    <Link href="/contact" className="font-16-gray">Contact</Link>
                </div>
                <div className="bg-[#F4F4F5] rounded-[5px] gap-[12px] flex pr-[8px] pl-[16px] py-[8px] items-center">
                    <input className="outline-none" type="text" placeholder="Search"/>
                    <SearchIcon/>
                </div>
            </div>
        </div>
    )
}