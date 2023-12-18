import ContactUs from "@/components/ContactUs";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function Contact(){
    return (
        <div className="flex flex-col gap-[100px] items-center">
            <Navbar/>
            <ContactUs/>
            <Footer/>
        </div>
    )
}