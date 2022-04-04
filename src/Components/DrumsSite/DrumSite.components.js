import styled from "styled-components";


export const DrumSite = styled.div`
position: absolute;
display: flex;
top: 0;
left: 0;
height: 100%;
width: 100%;
background: ${props => props.bgColor};
`

export const DrumMachineWrapper = styled.div`
display: flex;
max-width: 700px;
min-height: 400px;
min-width: 700px;
border: solid 40px rgba(34,34,34);
margin: auto;
background: rgba(34,34,34);
border-radius: 10px;
`

export const ButtonsWrapper = styled.div`
display: grid;
width:400px;
height: 400px;
outline: none;
grid-template-columns: repeat(3, 120px);
grid-gap: 20px;
`

export const Pad = styled.button`
border-radius: 10px;
background: rgba(50,50,50);
color: white;
font-size: 30px;
font-weight: 700;
border-color: ${props => props.borderColor};
`

export const DisplayWrapper = styled.div`
width: 280px;
height: 400px;
background-color: rgba(0,0,0,0.2);
border-left: solid rgba(34,34,34) 40px;
`

export const DisplayScreenWrapper = styled.div`
height: 50px;
max-width: 100%;
top: 0;
border:20px solid transparent;
`

export const Screen = styled.div`
max-width: 100%;
height: 50px;
border: solid 5px;
border-radius: 7px;
background: rgba(50,50,50);

text-align: justify;

font-size: 30px;
`

export const ScreenText = styled.p`
color: white;
text-align: center;
line-height: 50px;
font-family: "Orbitron" ;
max-width: 100%;
max-height: 100%;
overflow: hidden;
word-break: break-all;
`

export const SoundBanksWrapper = styled.div`
display: flex;
align-items: space-around;
justify-content: space-between;
border: 20px solid transparent;
max-width: 100%;
height: 60px;
`

export const SoundBtn = styled.button`
background: rgba(34,34,34);
//color: #ff0066;
color: white;
width: 60px;
font-size: 20px;
font-weight: 700;
border-radius: 8px;

`

export const ControlsWrapper = styled.div`
display: flex;
align-items: space-around;
justify-content: space-between;
border: 20px solid transparent;
max-width: 100%;
height: 170px;
background: rgba(40,40,40);
`

export const StartButton = styled.button`
width: 400px;
background-color: #1c334a;
color: #ffebf3;
height: 150px;
font-size: 50px;
font-weight: 700;
border-radius: 20px;
border: 0px;
margin: auto;
font-family: "Orbitron",sans-serif ;
cursor: pointer;
`