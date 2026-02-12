import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import HeaderBanner from "../Banner/HeaderBanner";
import ShopPage from "../Section/ShopPage";

export default function MainPage(){

    return(

        <div className="main-container">
            <HeaderBanner/>
            <ShopPage/>
        </div>

    )

}