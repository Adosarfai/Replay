import {Container, Graphics, Sprite, useTick} from "@pixi/react";
import {useCallback, useMemo, useState} from "react";
import {BlurFilter} from "pixi.js";

export default function Planets(props) {

    return (
        <Container>
            <PlanetOne windowSize={props.windowSize} />
            <PlanetTwo windowSize={props.windowSize} />
        </Container>
    )
}

const PlanetOne = (props) => {
    return (
        <Sprite
            image="Planet.png"
            x={props.windowSize[0] / 2}
            y={props.windowSize[1] / 2}
            rotation={0}
            anchor={{ x: 0.5, y: 0.5 }}
            width={97}
            height={97}
        />
    )
}

const PlanetTwo = (props) => {
    const [rotation, setRotation] = useState(0);
    
    useTick((delta) => {
        setRotation(rotation + 0.07 * delta);
    })
    
    return (
        <Sprite
            image="Planet.png"
            x={props.windowSize[0] / 2}
            y={props.windowSize[1] / 2}
            rotation={rotation}
            anchor={{ x: 1.75, y: 1.75 }}
            width={97}
            height={97}
        />
    )
}