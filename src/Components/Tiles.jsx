import {Container, Sprite} from "@pixi/react";

export default function Tiles(props) {
    return (
        <Container>
            <TileStraight x={props.windowSize[0] / 2} y={props.windowSize[1] / 2} rotation={0} />
            <TileStraight x={props.windowSize[0] / 2 + (168)} y={props.windowSize[1] / 2} rotation={0} />
            <TileStraight x={props.windowSize[0] / 2 + (168 * 2)} y={props.windowSize[1] / 2} rotation={0} />
            <TileStraight x={props.windowSize[0] / 2 + (168 * 3)} y={props.windowSize[1] / 2} rotation={0} />
            <TileStraight x={props.windowSize[0] / 2 + (168 * 4)} y={props.windowSize[1] / 2} rotation={0} />
            <TileStraight x={props.windowSize[0] / 2 + (168 * 5)} y={props.windowSize[1] / 2} rotation={0} />
            <TileStraight x={props.windowSize[0] / 2 + (168 * 6)} y={props.windowSize[1] / 2} rotation={0} />
        </Container>
    )
}

const TileStraight = (props) => {
    return (
        <Sprite
            image="TileStraight.png"
            x={props.x || 0}
            y={props.y || 0}
            rotation={props.rotation || 0}
            anchor={{ x: 0.5, y: 0.5 }}
            width={168}
            height={97}
        />
    )
}

const TileCorner = (props) => {
    // Sussy magic numbers, fixing the anchor should fix
    
    let offset = 0;
    switch (props.rotation) {
        case 0:
            offset = 17;
            break;
        case Math.PI:
            offset = -17;
            break;
    }
    return (
        <Sprite
            image="TileCorner.png"
            x={props.x + offset || 0}
            y={props.y + offset || 0}
            rotation={props.rotation || 0}
            anchor={{ x: 0.5, y: 0.5 }}
            width={133}
            height={133}
        />
    )
}