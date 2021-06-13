import React from 'react'
import styled from 'styled-components'

function Awards() {
    return (
        <div>
            <Container>
            <Top>
                <h1>Proudly presented by</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                    incididunt ut labore et dolore magna aliqua.</p>
            </Top>
            <Img>
            <li>
            <img src="/Assets/Group 39.png" />
            </li>
            <li>
            <img src="/Assets/Group 64.png" />
            </li>
            <li>
            <img src="/Assets/Group 55.png" />
            </li>
            <li>
            <img src="/Assets/Group 64.png" />
            </li>
            <li>
            <img src="/Assets/Group 39.png" />
            </li>
            </Img>
            <Dots>
                <li />
                <li />
                <li />
                <li />
            </Dots>
            </Container>
        </div>
    )
}

const Top = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 50px 0;
color: #374b5c;
h1 {
    font-weight: 200;
    font-size: 36px;
}
p {
    font-size: 16px;
    width: 568px;
    height: 42px;
    text-align: center;
    padding: 10px 0;
}
`;

const Container = styled.div`
background: #fbfefe;
width: 100vw;
height: 508px;

`;

const Img = styled.div`
display: flex;
justify-content: center;
align-items: center;
li {
   list-style: none;
   padding: 50px;
}

`;

const Dots = styled.div`

display: flex;
justify-content: center;
align-items: center;
li {
    border-radius: 50%;
    height: 10px;
    width: 10px;
    background: black;
    list-style: none;
    margin: 0 10px;
}
li:nth-child(2) {
    background: #00dbd0;
}
`;
export default Awards
