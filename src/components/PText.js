import React from 'react'
import styled from "styled-components";

const PStyle = styled.div`
max-width: 500px;
margin: 0 auto;
font-size: 1.8rem;
@media only screen and (max-width: 748) {
    font-size: 1.4rem;
}
` 

export default function PText(props) {
    
    return (
        <PStyle>
            <p>{props.children}</p>
        </PStyle>
    )
}
