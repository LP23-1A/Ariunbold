import AllBlog from "@/components/AllBlog";
import Carousel from "@/components/Carousel";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import TrendingNews from "@/components/TrendingNews";


export default function Home(){
  return (
    <div className="flex flex-col justify-center gap-[100px] items-center">
      <Navbar/>
      <Carousel/>
      <Footer/>
    </div>
  )
}
