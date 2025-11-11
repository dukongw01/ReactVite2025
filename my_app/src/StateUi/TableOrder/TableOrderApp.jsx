import { useState } from "react";
import OrderCart from "../TableOrder/OrderCart";
import DrinkList from "../TableOrder/DrinkList";
import MenuItemList from "../TableOrder/MenuItemList";
import BestList from "../TableOrder/BestList";

export default function TableOrderApp(){

    return(
        <>
            <div>
                <div className="menutap">
                    <h3>로고자리</h3>
                    <ul>
                        <li>베스트10</li>
                        <li>식사메뉴</li>
                        <li>안주류</li>
                        <li>음료/술</li>
                        <button type="button">주문내역</button>
                    </ul>
                </div>
                <div className="main-menulist">
                    <ul>
                        <li>
                            <div className="main-manu">
                                {props.tableMenu.map((tableMenu)=>(
                                    <MenuItemList key={tableMenu.id}
                                    tableMenu={tableMenu}
                                    addCart={props.addCart}/>

                                ))}
                                <img src="" alt="" />이미지
                                <p>메뉴명<span>{prop.MenuItemList.price}</span></p>
                            </div>
                        </li>
                        <li><MenuItemList key={tableMenu.id}/></li>
                        <li>밥3</li>
                        <li>밥4</li>
                    </ul>
                </div>
                <div className="total-toggle">
                    <ul>
                        <li><button type="button">장바구니</button></li>
                        <li><p>얼음생맥주<span>11000</span>원</p></li>
                    </ul>
                </div>
            </div>
        </>
    )
}