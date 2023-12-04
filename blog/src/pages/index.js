import AllBlog from "@/components/AllBlog";
import Navbar from "@/components/Navbar";
import TrendingNews from "@/components/TrendingNews";

export default function Home(){
  return (
    <div className="flex flex-col justify-center items-center">
      <Navbar/>
      <AllBlog/>
    </div>
  )
}
