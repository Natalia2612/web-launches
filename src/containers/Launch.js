import {useEffect,useState,useRef} from 'react';

import {FacebookShareButton, 
        FacebookIcon, 
        WhatsappShareButton,
        WhatsappIcon} from "react-share";

const Launch=(props)=>{
    const[timerDays, setTimerDays] = useState('00');
    const[timerHours, setTimerHours] = useState('00');
    const[timerMinutes, setTimerMinutes] = useState('00');
    const[timerSeconds, setTimerSeconds] = useState('00');

    let interval = useRef();


    const startTimer =()=>{
        let date_utc =  Date.parse(props.launch.date_utc);
        const countdownDate = new Date(date_utc).getTime();
        
        interval = setInterval(()=>{
            const now = new Date().getTime();
            const distance = countdownDate - now;

            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60 ));
            const secounds = Math.floor((distance % (1000 * 60)) / 1000);

            if(distance > 0){
                setTimerDays(days);
                setTimerHours(hours);
                setTimerMinutes(minutes);
                setTimerSeconds(secounds);
            }else{
                clearInterval(interval.current)
            }
 
        },1000);
    }

    useEffect(()=>{
        startTimer()
        let someref = interval.current
        return ()=> {
            clearInterval(someref)
        }
    });
    let url="https://web-launches.netlify.app/"
    return (
        <div className="launch">
            <h2 className="info_title">Upcoming: {props.launch.name}</h2>
            <div className="launch__container">
                <div>
                    <p>{timerDays}</p>
                    <p className="info_data">DAYS</p>
                </div>
                <div>
                    <p>{timerHours}</p>
                    <p className="info_data">HOURS</p>
                </div>
                <div>
                    <p>{timerMinutes}</p>
                    <p className="info_data">MINUTES</p>
                </div>
                <div>
                    <p>{timerSeconds}</p>
                    <p className="info_data">SECONDS</p>
                </div>
            </div>
            <div className="social_share">
                <p>Compartir por:</p>
                <div className="social_share_redes">
                    <FacebookShareButton url={url} 
                        quote={"React app Launch Next"}
                        hashtag="#Next Launch"
                    >
                        <FacebookIcon logoFillColor="white" round={true} size="5ex"></FacebookIcon>
                    </FacebookShareButton>
                </div>
                <div className="social_share_redes">
                    <WhatsappShareButton title="Sharing Content"url={url}>
                        <WhatsappIcon logoFillColor="white" round={true} size="5ex"></WhatsappIcon>
                    </WhatsappShareButton>
                </div>
                
            </div>
        </div>
    )
}
export default Launch