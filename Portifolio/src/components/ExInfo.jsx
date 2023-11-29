import uuidv4 from "uuidv4";

let data = [
  {
    url: "https://logos-world.net/wp-content/uploads/2021/04/Upwork-Logo-1.png",
    header: "Sr. Frontend Developer",
    body: "",
    date: "Nov 2021 - Present",
  },
  {
    url: "https://logos-world.net/wp-content/uploads/2021/04/Upwork-Logo-1.png",
    header: "Team Lead",
    body: "",
    date: "Jul 2017 - Oct 2021",
  },
  {
    url: "https://logos-world.net/wp-content/uploads/2021/04/Upwork-Logo-1.png",
    header: "Full Stack Developer",
    body: "",
    date: "Dec 2015 - May 2017",
  },
];

function ExInfoCreater({ url, header, body, date }) {
  return (
    <div className="flex space-bet gap-48 max-[900px]:flex-col max-[900px]:gap-[16px] exInfo">
      <div className="upwork">
        <img className="upwork-img" src={url} alt="" />
      </div>
      <div>
        <p className="font-black-20">{header}</p>
        <ul>
          <li className="font-16-gray">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </li>
          <li className="font-16-gray">
            Ut pretium arcu et massa semper, id fringilla leo semper.
          </li>
          <li className="font-16-gray">Sed quis justo ac magna.</li>
          <li className="font-16-gray">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </li>
        </ul>
      </div>

      <div className="font-16-gray">{date}</div>
    </div>
  );
}

export default function exInfo() {
  return (
    <>
      {data.map((el) => {
        let key = uuidv4();
        return <ExInfoCreater key={key} header={el.header} url={el.url} date={el.date}/>;
      })}
    </>
  );
}
