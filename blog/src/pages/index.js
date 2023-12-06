import AllBlog from "@/components/AllBlog";
import Carousel from "@/components/Carousel";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import TrendingNews from "@/components/TrendingNews";

function axiosTest() {
  const promise = axios.get('https://dev.to/api/articles')

  const dataPromise = promise.then((response) => response.data)

  return dataPromise
}

axiosTest()
  .then(data => {
      response.json({ message: 'Request received!', data })
  })
  .catch(err => console.log(err))


export default function Home(){
  return (
    <div className="flex flex-col justify-center items-center">
      <Navbar/>
      <Carousel/>
      <Footer/>
    </div>
  )
}
