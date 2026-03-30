import event01 from '../../public/LnL_img/event01.jpg'
import event02 from '../../public/LnL_img/event02.jpg'
import event03 from '../../public/LnL_img/event03.jpg'
import event04 from '../../public/LnL_img/event04.jpg'
import event05 from '../../public/LnL_img/event05.jpg'
import event06 from '../../public/LnL_img/event06.jpg'
import event07 from '../../public/LnL_img/event07.jpg'
import event08 from '../../public/LnL_img/event08.jpg'
import event09 from '../../public/LnL_img/event09.jpg'
import event10 from '../../public/LnL_img/event10.jpg'
import event11 from '../../public/LnL_img/event11.jpg'

import './Event.css';

export default function Event(){
    return(
        <div className='Event-container'>
            <div className='Event-List'>
                <h1>이벤트</h1>
                <div className='event-ing'>
                    <p className='eventing-text'>진행 이벤트</p>
                    <p className='event-grattext'>종료 이벤트</p>
                </div>
                <ul>
                    <li><img src={event01} alt="event01" /></li>
                    <li><img src={event02} alt="event02" /></li>
                    <li><img src={event03} alt="event03" /></li>
                    <li><img src={event04} alt="event04" /></li>
                    <li><img src={event05} alt="event05" /></li>
                    <li><img src={event06} alt="event06" /></li>
                    <li><img src={event07} alt="event07" /></li>
                    <li><img src={event08} alt="event08" /></li>
                    <li><img src={event09} alt="event09" /></li>
                    <li><img src={event10} alt="event10" /></li>
                    <li><img src={event11} alt="event11" /></li>
                </ul>
            </div>
        </div>
    )
}