import {Container, Sprite} from "@pixi/react";

export default function Background(props) {
    return (
        <Container options={{backgroundColor: '#FFFFFF'}}>
            <Sprite
                image="world4_sample1.png"
                x={0}
                y={0}
                anchor={{ x: 0, y: 0 }}
                width={props.windowSize[0]}
                height={props.windowSize[1]}
            />
        </Container>
    )
}