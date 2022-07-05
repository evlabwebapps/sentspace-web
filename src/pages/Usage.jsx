import React from "react";
import {Container} from "react-bootstrap";

// document.body.classList.add("no-scroll");
// document.body.style.overflow = "hidden";

export default function Usage() {
    return (
        <Container >
            {/* <h1>Documentation is </h1> */}
            Documentation is available at <a
            href="https://sentspace.github.io/sentspace">https://sentspace.github.io/sentspace</a>
            <> </>(previewed below)
            <br />
            <iframe src="https://sentspace.github.io/sentspace" 
                    title="SentSpace documentation"
                    frameborder="0" style={{overflow:"hidden", height:"800px", width:"100%"}} height="100%" width="100%"
                    ></iframe>
        </Container>
    )
}
