import React from 'react'
import styled from 'styled-components'
function Main() {
    return (
        <div>
            <Container>
                <Top>
                <LeftSide>
                    <span>Healty life with</span>
                    <h1>Nature Organic</h1>
                    <p>Vegetables are the edible parts of a plant 
                        that is used in cooking or can be eaten now.</p>
                        <Button>
                            
                                Explore Now
                            
                        </Button>
                </LeftSide>
                <RightSide>
                      <Flower src="/Assets/group 195.png" />
                      <Pattern src="/Assets/group 228.png" />
                </RightSide>
                </Top>
                <Bottom>
                    <img src="Assets/group 114.png"/>
                    <h1>Welcome to Nature</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
incididunt ut labore et dolore magna aliqua.</p>
                </Bottom>
                <Features>
                    <Card>
                        <li>
                            <img src="Assets/group 207.png"/>
                         
                        </li>
                        <li>
                            <img src="Assets/group 207.png"/>
                         
                        </li>
                        <li>
                            <img src="Assets/group 207.png"/>
                         
                        </li>
                        <li>
                            <img src="Assets/group 207.png"/>
                         
                        </li>
                    </Card>
                </Features>
            </Container>
        </div>
    )
}

const Container = styled.div`
display: flex;
flex-direction: column;
overflow-x: hidden;
height: 100%;
width: 100%;
`;

const LeftSide = styled.div`
width: 100vw;
height: 80vh;
display: flex;
flex-direction: column;
padding: 125px 160px;
color: #374b5c;
span {
    font-size: 36px;
    font-weight: 300;
}
h1 {
    font-size: 56px;
}
p {
  margin: 20px 0px;
  width: 439px;
  height: 54px;
  font-size: 18px;
  line-height: 1.35;
  text-align: left;
}
}
`;
const Button = styled.div`
  display: flex;
  justify-content: center;
  color: white;
  font-weight: bold;
  width: 220px;
  height: 54px;
  margin: 10px 0px;
  padding: 14px 64px 16px 48px;
  border-radius: 10px;
  background-color: #00dbd0;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
  &:hover {
      background: transparent;
      border: 1px solid #00dbd0;
      border-radius: 10px;
      color: #00dbd0;
  }
`;

const RightSide = styled.div`

`;

const Flower = styled.img`
position: absolute;
right: 11vw;
top: 10vh;
width: 26vw;
height: 60vh;
z-index: 110;
margin-right: 210px;
margin-top: 130px;

`;

const Pattern = styled.img`
width: 25vw;
height: 40vh;
padding: 64.5px 65.3px 65px 66px;
border: solid 3px #00dbd0;
position: absolute;
top: 30vh;
right: 12vw;
z-index: -1;
`;

const Top = styled.div`
`;

const Bottom = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
color: #374b5c;
h1 {
    font-size: 36px;
    font-weight: 400;
    padding: 8px 0;
}
p {
  width: 568px;
  height: 42px;
  font-size: 14px;
  font-weight: 200;
  line-height: 1.31;
  letter-spacing: normal;
  text-align: center;
}
`;

const Features = styled.div`
display: flex;
justify-content: center;
align-items: center;
`;

const Card = styled.div`
display: flex;

 li {
     padding: 30px;
     list-style: none;
 }
`;
export default Main
