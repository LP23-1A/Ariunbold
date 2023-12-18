import Carousel from "@/components/Carousel";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Trending from "@/components/Trending";
import axios from "axios";
import AllBlog from "@/components/AllBlog";
import { useEffect, useState } from "react";

export default function Home() {

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://dev.to/api/articles");
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="flex flex-col justify-center gap-[100px] items-center">
      <Navbar />
      <Carousel/>
      <Trending data={data}/>
      <AllBlog data={data} />
      <Footer />
    </div>
  )
}
