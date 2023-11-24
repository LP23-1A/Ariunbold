import CatIcon from "./CatIcon";
import FigmaIcon from "./FigmaIcon";
import LocationIcon from "./LocationIcon";
import TwitterIcon from "./TwitterIcon";
import DotIcon from "./DotIcon";

export default function Hero(){
    return (
        <div className="flex pad-96-80 space-bet gap-48">
            <div className="flex gap-48 hero--left-side" >
                <div className="top-text">
                    <p className="top-text--title">Hi, I’m Sagar 👋</p>
                    <p className="font-16-gray">I'm a full stack developer (React.js & Node.js) with a focus on creating (and occasionally designing) exceptional digital experiences that are fast, accessible, visually appealing, and responsive. Even though I have been creating web applications for over 7 years, I still love it as if it was something new.</p>
                </div>
                <div className="flex column gap-8">
                    <p className="font-16-gray flex just-center">{<LocationIcon/>} Ahmedabad, India</p>
                    <p className="font-16-gray flex just-center">{<DotIcon/>} Available for new projects</p>
                </div>
                <div className="flex">
                    <button className="social-icon">{<CatIcon/>}</button>
                    <button className="social-icon">{<TwitterIcon/>}</button>
                    <button className="social-icon">{<FigmaIcon/>}</button>
                </div>
            </div>
            <div className="hero--right-side">
                <img className="heroImg" src="https://s3-alpha-sig.figma.com/img/f85c/f455/11cd2ba02a83d564218d6500a134a91d?Expires=1701648000&Signature=hHzQav0DnrcK4oKYy8j~cuTJJkhdnOZhsjbGxsQC2LUjPbjw4RwmjlR2~ZStctR1rnhZzyW66qQkm9KXJJbLvMQpBbiYxYtajpU4CGjxLIFBiJqkeIIkHlCS4mAxZVmLlkTXXqqhCSvkaOmPXhuQTAXDR8s60yIL1PLW1EFDA551L6LgN2A~ZXWuLsY02jSDxyKKyUwrToQ1CTL~Qy4YoZRVkLWc-4ze8mWcko575QBzXD0CsN3lSDCx3z1A4PuZSTdRifk6iV0poDtWi5wwlWQQJYYcuighgzIh8FPP1aSV9yxy72d~Gr20J9pQ0pk225U-AG9HYDSzgEZcAEKoXQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="" />
                <div className="hero-bg"></div>
            </div>
        </div>
    )
}