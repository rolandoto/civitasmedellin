import React from "react";
import { BorderInput, BorderInputInitial, ButtonSearch, ContainerButtonSearch, MainAccomodation, MainProduct } from "../../Ui/Style/GeneralStyle";

const CalenderSearchHome =({HandClickMenuPeople,
                        HandClickMenuEnd
                        ,HandClickMenu,
                        onsubmit,
                        formattedStartDateToString,
                        formattedEndDateToString,
                        totalCountAdults}) =>{

    return (
     
            <MainProduct >
                            <BorderInputInitial className="flex text-start flex-col hover-punter "  onClick={HandClickMenu}>
                            <span className="mb-2   font-bold   " >Check-in :</span>
                            <span className="  " >  {formattedStartDateToString === 'fecha inválida' ? '-- / -- / --' : formattedStartDateToString}</span>
                            </BorderInputInitial>
                            <BorderInput className="flex flex-col  text-start  hover-punter" onClick={HandClickMenuEnd}>
                            <span className="mb-2 font-bold">Check-out :</span>
                            <span className=" mb-2 " >{formattedEndDateToString === 'fecha inválida' ? '-- / -- / --' : formattedEndDateToString}</span>
                            </BorderInput>

                           
                            <ContainerButtonSearch  className="  ">
                                    <ButtonSearch className=" lg:hidden    cursor-pointer z-40 block  w-full bg-black text-white py-4    rounded-full hover:bg-[ff7a45px] transition duration-200" onClick={onsubmit}>
                                                Search
                                        </ButtonSearch>
                                        <ButtonSearch className=" hidden    cursor-pointer    p-4 lg:block w-[150px]   bg-black text-white py-4     rounded-full  hover:bg-[ff7a45px] transition duration-200" onClick={onsubmit}>
                                        Search
                                        </ButtonSearch>
                            </ContainerButtonSearch>
            </MainProduct>
            
    )
}

export default CalenderSearchHome