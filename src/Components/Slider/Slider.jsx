import React, { useEffect, useState } from 'react';
import './slider.scss';
import { dummyData } from '../../dummyData';
import { ArrowForwardIos, ArrowBackIos, ArrowRightAlt  } from '@mui/icons-material';

function Slider() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [translateWidth, setTranslateWidth] = useState(0);
    
    useEffect (
        ()=>
        {
            if (currentIndex === dummyData.length)
            {
                setCurrentIndex(0)
            }
        }, [currentIndex, translateWidth]
    )

    const handleClick = (parameter)=>
    {
        if (parameter === 'leftArrow')
        {
           if (currentIndex === 0)
           {
                setCurrentIndex(dummyData.length-1);
                setTranslateWidth(currentIndex * 100)
           }else 
           {
               setCurrentIndex(currentIndex-1)
               setTranslateWidth(currentIndex * -100);
           }
        }
        if(parameter === 'rightArrow')    
        {
                setCurrentIndex(currentIndex + 1);
                setTranslateWidth(currentIndex* -100); 
        }    
    }
    return (
        <div  className = "sliderContainer">
            <ArrowBackIos onClick = {()=>handleClick('leftArrow')} className = "arrowBack" />
            <div style = {{transform: `translate(${translateWidth}vw)`}} className="sliderWrapper">
                {
                    dummyData.map(eachDummyData=>
                        (
                            <div key = {eachDummyData.id}  className="slide">
                                <div className="slideLeft">
                                    <h6>SALE UPTO 30% OFF</h6>
                                    <h1>{eachDummyData.title}</h1>
                                    <p>Amazing deals just to surprise you</p>
                                    <div className="buttonContainer">
                                        <button>Discover <ArrowRightAlt className = "arrowRight" /> </button>
                                    </div>
                                </div>
                            <div className="slideRight">
                                <img className = "sliderImage" src={eachDummyData.image} alt="Offers" />
                            </div>
                </div>
                        ))
                }
            </div>
            <ArrowForwardIos onClick = {()=>handleClick('rightArrow')} className = "arrowForward" />
        </div>
    )
}

export default Slider
