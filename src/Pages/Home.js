import { StartButton,DrumSite,DrumMachineWrapper,ButtonsWrapper,Pad,DisplayWrapper, DisplayScreenWrapper,Screen,ScreenText,SoundBanksWrapper,SoundBtn, ControlsWrapper } from "../Components/DrumsSite/DrumSite.components"
import styled from "styled-components";
import { useEffect, useRef, useState } from "react";
import sound from '../Sounds/1/1.wav'
import { Sounds } from "../Data/Sounds";




export default function Home(){
    
    
    const btn1 = useRef(null)
    const btn2 = useRef(null)
    const btn3 = useRef(null)
    const btn4 = useRef(null)
    const btn5 = useRef(null)
    const btn6 = useRef(null)
    const btn7 = useRef(null)
    const btn8 = useRef(null)
    const btn9 = useRef(null)
    const divapp = useRef(null)
    
    const [a,setA]=useState(1)
    

    let snd1 = new Audio(Sounds[a][0])
    let snd2 = new Audio(Sounds[a][1])
    let snd3 = new Audio(Sounds[a][2])
    let snd4 = new Audio(Sounds[a][3])
    let snd5 = new Audio(Sounds[a][4])
    let snd6 = new Audio(Sounds[a][5])
    let snd7 = new Audio(Sounds[a][6])
    let snd8 = new Audio(Sounds[a][7])
    let snd9 = new Audio(Sounds[a][8])

    let soundVar=[snd1,snd2,snd3,snd4,snd5,snd6,snd7,snd8,snd9]
    console.log(soundVar[0])

    function changeBank(newB){
        console.log(newB)
        if(newB==1){
            setA(0);
        }
        else if(newB==2){
            setA(1)
        }
        else{
            setA(2)
        }
    }
    

    const [start,setStart]=useState(true);

    function toggleStart(){
        changeBank(1)
        setStart(prev=>!prev)
    }  


    
    
    
    
    
    
    



    function routeClick(event){
        if(event.key==="q"){ 
            btn1.current.click()
        }
        else if(event.key==="w"){
            btn2.current.click() 
        }
        else if(event.key==="e"){ 
            btn3.current.click() 
        }
        else if(event.key==="a"){   
            btn4.current.click()  
        }
        else if(event.key==="s"){ 
            btn5.current.click()  
        }
        else if(event.key==="d"){  
            btn6.current.click()   
        }
        else if(event.key==="z"){   
            btn7.current.click()    
        }
        else if(event.key==="x"){
            btn8.current.click()
        }
        else if(event.key==="c"){  
            btn9.current.click()   
        }
        
    }
    
    function focusClick(event){
        
        divapp.current.focus();
        routeClick(event)
        
    }
    
    
    function playSound(a){
        soundVar[a].currentTime=0
        soundVar[a].play();
    }

    /*
    ==========================================================
    ==========================================================
    ==========================================================
    onKeyDown=set false => if false don't play audio
    onKeyUp=set true so you can play another instance of audio
    ==========================================================
    ==========================================================
    ==========================================================
    */

    
    return(
        <>
        
        <DrumSite bgColor={"#ffebf3"}  tabIndex="-1" onKeyDown={event => focusClick(event)}>
        {start ? <StartButton onClick={toggleStart}>START</StartButton> :  
            <DrumMachineWrapper>
            <ButtonsWrapper tabIndex="-1" ref={divapp}  >
                <Pad borderColor={"#ff0066"} id="1" ref={btn1} onClick={()=>playSound(0)} >Q</Pad>
                <Pad borderColor={"#ff0066"} id="2" ref={btn2} onClick={()=>playSound(1)}>W</Pad>
                <Pad borderColor={"#ff0066"} id="3" ref={btn3} onClick={()=>playSound(2)}>E</Pad>
                <Pad borderColor={"#ff0066"} id="4" ref={btn4} onClick={()=>playSound(3)}>A</Pad>
                <Pad borderColor={"#ff0066"} id="5" ref={btn5} onClick={()=>playSound(4)}>S</Pad>
                <Pad borderColor={"#ff0066"} id="6" ref={btn6} onClick={()=>playSound(5)}>D</Pad>
                <Pad borderColor={"#ff0066"} id="7" ref={btn7} onClick={()=>playSound(6)}>Z</Pad>
                <Pad borderColor={"#ff0066"} id="8" ref={btn8} onClick={()=>playSound(7)}>X</Pad>
                <Pad borderColor={"#ff0066"} id="9" ref={btn9} onClick={()=>playSound(8)}>C</Pad>
            </ButtonsWrapper>
            <DisplayWrapper>
                <DisplayScreenWrapper>
                    <Screen><ScreenText>MPC-22</ScreenText></Screen>
                </DisplayScreenWrapper>
                <SoundBanksWrapper>
                    <SoundBtn onClick={()=>changeBank(1)}>1</SoundBtn>
                    <SoundBtn onClick={()=>changeBank(2)}>2</SoundBtn>
                    <SoundBtn onClick={()=>changeBank(3)}>3</SoundBtn>
                </SoundBanksWrapper>

                <ControlsWrapper></ControlsWrapper>
            </DisplayWrapper>
                
                {/*
                */}
            </DrumMachineWrapper>
          }  
        </DrumSite>

        </>
        
    )
}