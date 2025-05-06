import Navbar from "./navbar"
import Hero from "./hero"
import Tools from "./toolscollection"
import Footer from "./footer"
import TypingHeading from './typeheading'
import Base64 from "./tools/Base64"
import About from "./about"
export default function Home(){
    return <div className="">
        <div class=" fixed -z-10 inset-0 h-475 w-full bg-[linear-gradient(to_right,#73737320_1px,transparent_1px),linear-gradient(to_bottom,#73737320_1px,transparent_1px)] bg-[size:60px_60px]" />
        <Navbar/>
        <TypingHeading/>
        <Base64/>
       <About/>
        <Tools/>
        <Footer/>
    
    </div>
}