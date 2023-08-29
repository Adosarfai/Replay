import {Container, Graphics, Sprite, Stage, Text, useTick} from "@pixi/react";
import {useCallback, useState} from "react";
import {TextStyle} from "pixi.js";

export default function Interface(props) {
    const background = useCallback(g => {
        g.beginFill(0x0b0b0b);
        g.drawRect(0, 0, 600, 100)
        g.endFill();
    })
    return (
            <Container>
                <Graphics draw={background} alpha={0.3} />
                <Sprite
                    image="logo512.png"
                    x={0}
                    y={0}
                    anchor={{ x: 0, y: 0 }}
                    width={96}
                    height={96}
                />
                <Text
                    text="Song title"
                    style={new TextStyle({
                        fontFamily: 'ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
                        fill: "#FAF0E6",
                        fontWeight: "bold"
                    })}
                    x={106}
                    y={10}
                    anchor={{ x: 0, y: 0 }}
                />
                <Text
                    text="Score"
                    style={new TextStyle({
                        fontFamily: 'ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
                        fill: "#FAF0E6"
                    })}
                    x={106}
                    y={50}
                    anchor={{ x: 0, y: 0 }}
                />
                <Text
                    text="(set on dd-MM-yyyy hh:mm)"
                    style={new TextStyle({
                        fontFamily: 'ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
                        fill: "#FAF0E6",
                        fontWeight: 'lighter',
                    })}
                    alpha={0.3}
                    x={200}
                    y={50}
                    anchor={{ x: 0, y: 0 }}
                />
            </Container>
    )
}