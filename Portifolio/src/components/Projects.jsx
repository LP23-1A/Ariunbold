import Category from "./Category"

export default function Projects(){
    return (
      <div className="work-main flex max-[900px]:flex-col">
        <div className="max-[900px]:p-[32px] max-[900px]:justify-center gray-bg work-main--left-side max-[900px]:w-[100%] max-[900px]:rounded-t-[12px] max-[900px]:rounded-b-[0px]">
          <img className="work-img" src="https://s3-alpha-sig.figma.com/img/13a1/57f2/d0bfafa5cbd6a89dfe634a542f95ebd2?Expires=1701648000&Signature=qBth9sqImCFsPd1BsOGncM-miU3MyvwhVcxk1MzE1Auk9Xt2dBxUqpqrvmz9lM5Q1gTFA7MgbbbqBzOn4l12AU83a-bh~qrRImi198t68axRZ7Z25qnNIBbwMZSP14Hg7bn~iKEELMkRFMw50s6xgHbbH9xpMfgeItKInBg67GqxLkI8MVjyenvU6~PEtqd7CX-ig~wdaSoQsT8qwHY-04ApM9lyd64oGgHojgygyDhHr7KKtGc2EsTPgFLEcQrtY8GeP8V33KUhEUn3WuLar8XWgjgDQtr~6vOQIh8SiFY-kAQ3P-kPmhOeunqRatY99DefER2-6c0-XyL4wyQd0g__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="" />
        </div>
        <div className="work-main--right-side flex column max-[900px]:w-[100%] max-[900px]:rounded-t-[0px] max-[900px]:rounded-b-[12px]">
          <p className="font-black-20">Fiskil</p>
          <p className="font-16-gray">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
            nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in
            faucibus orci luctus et ultrices posuere cubilia curae.
          </p>
          <div className="flex wrap gap-8">
            <Category />
          </div>
          <button className="flex link-btn">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M18 13V19C18 19.5304 17.7893 20.0391 17.4142 20.4142C17.0391 20.7893 16.5304 21 16 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V8C3 7.46957 3.21071 6.96086 3.58579 6.58579C3.96086 6.21071 4.46957 6 5 6H11"
                stroke="#4B5563"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M15 3H21V9"
                stroke="#4B5563"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M10 14L21 3"
                stroke="#4B5563"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
    )
}