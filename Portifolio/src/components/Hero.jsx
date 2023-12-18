import CatIcon from "./CatIcon";
import FigmaIcon from "./FigmaIcon";
import LocationIcon from "./LocationIcon";
import TwitterIcon from "./TwitterIcon";
import DotIcon from "./DotIcon";

export default function Hero(){
    return (
        <div className="flex max-[900px]:flex-col-reverse max-[900px]:py-[64px] max-[900px]:px-[16px] pad-96-80 space-bet gap-48">
            <div className="flex gap-48 hero--left-side" >
                <div className="top-text">
                    <p className="top-text--title max-[900px]:text-[36px]">Hi, I’m Sagar 👋</p>
                    <p className="font-16-gray">I'm a full stack developer (React.js & Node.js) with a focus on creating (and occasionally designing) exceptional digital experiences that are fast, accessible, visually appealing, and responsive. Even though I have been creating web applications for over 7 years, I still love it as if it was something new.</p>
                </div>
                <div className="flex column gap-8">
                    <p className="font-16-gray flex just-center remove-show">{<LocationIcon/>} Ahmedabad, India</p>
                    <p className="font-16-gray just-center remove">
                        <svg className="mar-r-8" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M20 10C20 16 12 22 12 22C12 22 4 16 4 10C4 7.87827 4.84285 5.84344 6.34315 4.34315C7.84344 2.84285 9.87827 2 12 2C14.1217 2 16.1566 2.84285 17.6569 4.34315C19.1571 5.84344 20 7.87827 20 10Z" stroke="#D1D5DB" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z" stroke="#D1D5DB" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        Ahmedabad, India
                    </p>
                    <p className="font-16-gray flex just-center">{<DotIcon/>} Available for new projects</p>
                </div>
                <div className="flex">
                    <button className="social-icon">{<CatIcon/>}</button>
                    <button className="social-icon">{<TwitterIcon/>}</button>
                    <button className="social-icon">{<FigmaIcon/>}</button>
                </div>
            </div>
            <div className="hero--right-side">
                <img className="heroImg max-[900px]:w-[240px] max-[900px]:h-[280px]" src="https://s3-alpha-sig.figma.com/img/f85c/f455/11cd2ba02a83d564218d6500a134a91d?Expires=1701648000&Signature=hHzQav0DnrcK4oKYy8j~cuTJJkhdnOZhsjbGxsQC2LUjPbjw4RwmjlR2~ZStctR1rnhZzyW66qQkm9KXJJbLvMQpBbiYxYtajpU4CGjxLIFBiJqkeIIkHlCS4mAxZVmLlkTXXqqhCSvkaOmPXhuQTAXDR8s60yIL1PLW1EFDA551L6LgN2A~ZXWuLsY02jSDxyKKyUwrToQ1CTL~Qy4YoZRVkLWc-4ze8mWcko575QBzXD0CsN3lSDCx3z1A4PuZSTdRifk6iV0poDtWi5wwlWQQJYYcuighgzIh8FPP1aSV9yxy72d~Gr20J9pQ0pk225U-AG9HYDSzgEZcAEKoXQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="" />
                <div className="hidden hero-bg"></div>
            </div>
        </div>
    )
}