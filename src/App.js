import Interface from "./Components/Interface";
import {Stage} from "@pixi/react";
import {useState} from "react";
import Background from "./Components/Background";
import Tiles from "./Components/Tiles";
import Planets from "./Components/Planets";

export default function App() {
    const [windowSize, setWindowSize] = useState([window.innerWidth,window.innerHeight])

    window.addEventListener('resize', () => {
        setWindowSize([window.innerWidth,window.innerHeight])
    })
    
    return (
        <Stage width={windowSize[0]} height={windowSize[1]}>
            <Background windowSize={windowSize} />
            <Tiles windowSize={windowSize} />
            <Planets windowSize={windowSize} />
            <Interface windowSize={windowSize} />
        </Stage>
  );
}
