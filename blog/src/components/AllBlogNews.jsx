import { formatRevalidate } from "next/dist/server/lib/revalidate";
import AllBlogCategory from "./AllBlogCategory";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";

const News = ({ title, date, img, cate }) => {
  return (
    <div className="flex flex-col gap-[16px] p-[16px] w-[392px] rounded-[12px] border-[1px]">
      <img
        className="w-[360px] h-[240px] rounded-[6px] object-cover"
        src={img}
        alt=""
      />
      <div className="flex flex-col gap-[20px] p-[8px]">
        <div className="flex flex-col gap-[16px]">
          <div className="flex gap-[5px] flex-wrap">
            <AllBlogCategory cate={cate} />
          </div>
          <p className="font-24-black">{title}</p>
        </div>
        <p className="font-16-gray">{date}</p>
      </div>
    </div>
  );
};

export default function AllBlogNews({ data, articleCount }) {
  return (
    <>
      {data.slice(0, articleCount).map((item) => {
        let key = uuidv4();
        let formattedDate = DateConverter({ date: item.published_at });
        return (
          <News
            key={key}
            cate={item.tag_list}
            title={item.title}
            date={formattedDate}
            img={item.social_image}
          />
        );
      })}
    </>
  );
}
const DateConverter = ({ date }) => {
  let convertedDate = new Date(date);
  let formattedDate = convertedDate.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
  return formattedDate;
};
