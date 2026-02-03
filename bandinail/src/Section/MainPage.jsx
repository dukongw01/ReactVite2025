import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import HeaderBanner from "../Banner/HeaderBanner";
import SectionBanner from "../Banner/SectionBanner";

export default function MainPage(){

    return(

        <div className="main-container">
            <HeaderBanner/>
            <SectionBanner/>
        </div>

    )

}