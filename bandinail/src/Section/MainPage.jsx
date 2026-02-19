import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import HeaderBanner from "../Banner/HeaderBanner";
import NailFilter from "../Section/NailFilter";

export default function MainPage(){

    return(

        <div className="main-container">
            <HeaderBanner/>
            <NailFilter/>
        </div>

    )

}