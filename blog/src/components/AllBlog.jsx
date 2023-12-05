import AllBlogCategory from "./AllBlogCategory";

export default function AllBlog(){
    return (
        <div className="flex flex-col gap-[16px] p-[16px] w-[392px] rounded-[12px] border-[1px]">
            <img className="w-[360px] h-[240px] rounded-[6px] object-cover" src="https://s3-alpha-sig.figma.com/img/3abf/26dd/585632b9d05dcfd0daffacedd55842f5?Expires=1702857600&Signature=GtIcIcyrku03di6uhi0mfVSqHwIdIsUNoUQebv4ln3q84G9ZINAh~g63In7v1hCCoAUoAP2aTUyCsm0UHjL-VzZqeJwqljXEBvlG38XfWgPV0jOZS41GSMMySeIgQ-5a6beEdkq3-nVqA8DtYQ5tFNSBjsKIZZlJohL6yXlNmptCXdFuApfCK6nWzmbfiNgeW-g3FK0QgNJNPlJaJFhYBW7ic31MDvl416i18XVjJb3BD8ahSb1F7OqOffjqQOGVpbAL4r4vPSLE8tV4YbaMpt1sknJsMh0hxR4lDqQ0txf88uFFFPq7xf9FpZyaEIntEtG8EVMtjjmahArIWExyCw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="" />
            <div className="flex flex-col gap-[20px] p-[8px]">
                <div className="flex flex-col gap-[16px]">
                    <AllBlogCategory/>
                    <p className="font-24-black">The Impact of Technology on the Workplace: How Technology is Changing</p>
                </div>
                <p className="font-16-gray">August 20, 2022</p>
            </div>
        </div>
    )
}