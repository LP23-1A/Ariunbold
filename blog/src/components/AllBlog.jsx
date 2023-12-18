import { useEffect, useState } from "react";
import AllBlogNews from "./AllBlogNews";

export default function AllBlog(props) {
  const [sortedData, setSortedData] = useState([]);

  useEffect(() => {
    setSortedData(props.data)
  }, [props.data])


  const filterHandler = (filter) => {
    if (!props.data) {
      return;
    }
    if (filter === "all"){
      setSortedData(props.data)
    } else {
      const filteredData = props.data.filter((el) =>
        el.tag_list.includes(filter)
      );

      setSortedData(filteredData);
    }
  };


  const [articleCount, setArticleCount] = useState(3);

  const handleLoadMore = () => {
    setArticleCount((prev) => prev + 3);
  };
  

  return (
    <div className="flex flex-col gap-[32px] w-[1216px]">
      <div className="font-24-black">
        <b>All Blog Post</b>
      </div>

      <div className="flex justify-between">
        <div className="flex gap-[20px]">
          <button className="font-12-brown" onClick={() => filterHandler("all")} >All</button>
          <button className="font-12-black" onClick={() => filterHandler("programming")}>Programming</button>
          <button className="font-12-black" onClick={() => filterHandler("javascript")}>Javascript</button>
          <button className="font-12-black" onClick={() => filterHandler("webdev")}>Webdev</button>
          <button className="font-12-black" onClick={() => filterHandler("ai")}>AI</button>
          <button className="font-12-black" onClick={() => filterHandler("beginners")}>Beginners</button>
        </div>
        <button className="font-12-black">View All</button>
      </div>

      <div className="flex flex-wrap gap-[20px]">
        <AllBlogNews data={sortedData} articleCount={articleCount}/>
      </div>
      <div className="flex justify-center">
        <button onClick={handleLoadMore} className="rounded-[6px] border-[1px] border-[#696a754d] py-[12px] px-[20px] font-16-gray">
            Load More
        </button>
      </div>
    </div>
  );
}
