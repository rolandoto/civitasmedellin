import React, { useEffect, useState }  from "react";
import Events from "../../Component/Events/Events";
import Header from "../../Component/Header/Header";
import Footer from "../../Component/Footer/Footer";
import WhatsappButton from "../../Component/WhatsappButton/WhatsappButton";
import { Link } from "react-router-dom";
import { MainProduct, SectionSearch } from "../../Ui/Style/GeneralStyle";
import SearchGlobal from "../../Component/SearchGlobal/SearchGlobal";
import BookNowButton from "../../Component/BookNowButton/BookNowButton";

const EventsNext =()  =>{
    useEffect(() => {
        // Scrolls to the top of the document on component mount
        window.scrollTo(0, 0);
    }, []);

    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [scrolledbook, setScrolledBook] = useState(false);
      
    useEffect(() => {
      const handleScroll = () => {
        if (window.scrollY > 100) {
          setScrolled(true);
        } if(window.scrollY > 200){
          setScrolledBook(true)
        } else {
          setScrolled(false);
          setScrolledBook(false)
        }
      };
  
      window.addEventListener("scroll", handleScroll);
  
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);

    useEffect(() => {
      const handleScroll = () => {
        if (window.scrollY > 100) {
          setScrolled(true);
        } else {
          setScrolled(false);
        }
      };
  
      window.addEventListener("scroll", handleScroll);
  
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);



    return (<>
            {scrolledbook && <BookNowButton/> } 
            <Header/>

        
          <div className="p-2 lg:px-8">
        <SearchGlobal />
        </div>
          <div className=" lg:flex hidden p-2 lg:px-8" >
              <MainProduct className="m-auto flex ">
                <div className="flex lg:w-[47%] w-[100%] justify-center bg-[#3f6969] rounded-[40px]  p-4  items-center space-x-1">
                  <span className="bg-white text-black rounded-full w-6 h-6 flex items-center justify-center text-sm">1</span>
                  <span className=" text-white">Elegir un espacio
                  </span>
                </div>
                <div className=" flex  border-confirme  p-4 items-center space-x-1">
                  <span className="bg-gray-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm">2</span>
                  <span className="text-gray-700">Confirmación</span>
                </div>
              </MainProduct>
            </div>

            <div className="lg:hidden flex  p-2 lg:px-8" >
              <MainProduct className="m-auto ">
                <div className="flex lg:w-[47%] w-[100%] justify-center bg-[#3f6969] rounded-[40px]  p-4  items-center space-x-1">
                  <span className="bg-white text-black rounded-full w-6 h-6 flex items-center justify-center text-sm">1</span>
                  <span className=" text-white">Elegir un espacio
                  </span>
                </div>
               
              </MainProduct>
            </div>  
                <WhatsappButton />
            <Events />
            <Footer/>
        </>)

}

export default EventsNext