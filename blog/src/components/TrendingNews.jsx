import TrendingCategory from "./TrendingCategory";

export default function TrendingNews(){
    return (
        <div className="relative w-[293px] h-[320px] flex flex-col justify-end items-center rounded-[12px]">
            <div className="w-[293px] h-[320px] bg-black opacity-[40%] absolute rounded-[12px]"></div>
            <img className="w-[293px] h-[320px] rounded-[12px] object-cover" src="https://s3-alpha-sig.figma.com/img/21a4/f878/0943144e7126909a96868bd7542caf21?Expires=1702857600&Signature=pSWj7~T8FkEgg3IG4myLmybU8Im2fCEhMKR~sZkMLc6lFredr8jb6YL~cL7q5sD1Fz6B5fsRuxeNUrn72GxGgR6yMAkHcJuftovCLrhJDegOQtF-TgTpRy1UamH9vPZlTwV3T1UKigVhmnGNUIhUaKePxOg64nX-zViv1ecY1YWz3Ls~GhX8W1Z74U9lv76qsPp2JGrZMRzm8LtvLmzrE4iBlDQEyA2rW0SZeJA2nAWJZCu2wzALbMnCsCeeVmYzRh20DYRgoV~5UqK1DFWMoz8C~vgFPT3D8i8LoXALhvaE7i8sSh6nct3Lh8nKTjRT2N7FWbpMweVMQvvaLdY06g__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="" />
            <div className="p-[25px] flex absolute flex-col gap-[16px]">
                <TrendingCategory/>
                <p className="font-18-white w-[230px] h-[76px]">The Impact of Technology on the Workplace: How Technology is Changing</p>
            </div>
        </div>
    )
}