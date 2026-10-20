import FullMain from "./_components/FullMain";
import Navbar from "./_components/Navbar";
import Breakline from "./_components/breakline";
import Maincolle from "./_components/maincolle";
import Latestcolle from "./_components/latestcolle";
import Footer from "./_components/footer";
import Allcollect from "./_components/allcollect";
export default function Home(){
  return(
    <div className="relative">
      <Navbar />
      <FullMain />
      <Breakline />
      <Maincolle />
      <Breakline />
      <Latestcolle />
      <Breakline />
      <Allcollect />
      <Breakline />
      <Footer />

      

    </div>
  )
}