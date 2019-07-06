import React, { Component } from "react";
import styled, { keyframes } from "styled-components";
import logo from "../assets/image2/image.png";
import background from "../assets/camp.jpeg";

const logoLaunch = keyframes`
0% { transform: translateY(0px);}
100% {transform:translateY(373px);
}
`;

const logotextAppear = keyframes`
0% { opacity:0; }
100% {opacity:1; }
`;

const smallLogo = keyframes`
0% {transform:scale(1);}
100% {transform:scale(0.6) translateY(-400px);}
`;

const backgrondAnimate = keyframes`
0% {opacity:0;}
100% {opacity:1;}
`;

const logoBackAnimate = keyframes`
0%{height:0px;}
100%{height:177px;}
`;

const TextMainAnimate = keyframes`
0% {opacity:0;bottom:90px;}
100%{opacity:0.8;bottom:120px}
`;

const SubTextAnimate = keyframes`
0% {opacity:0;bottom:60px}
100%{opacity:0.6;bottom:40px}
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  position: relative;
  background-image: url("src/assets/camp.jpeg");
`;

const Image = styled.img``;

const Back = styled.div`
  height: 100%;
  > img {
    width: 100%;
    height: 100%;
    opacity: 0;
    animation-name: ${backgrondAnimate};
    animation-delay: 4.4s;
    animation-duration: 1s;
    animation-timing-function: ease-out;
    animation-fill-mode: forwards;
  }
`;

const LogoContainer = styled.div`
  animation-name: ${smallLogo};
  animation-delay: 3.4s;
  animation-duration: 1s;
  animation-timing-function: ease-in-out;
  animation-fill-mode: forwards;
`;

const Logo = styled.div`
  position: absolute;
  top: -100px;
  text-align: center;
  animation-name: ${logoLaunch};
  animation-delay: 0.4s;
  animation-duration: 2s;
  animation-timing-function: ease-in-out;
  animation-fill-mode: forwards;
`;

const Title = styled.p`
  opacity: 0;
  font-size: 30px;
  margin-top: 8px;
  font-weight: 300;
  animation-name: ${logotextAppear};
  animation-delay: 2.4s;
  animation-duration: 1s;
  animation-timing-function: ease-in-out;
  animation-fill-mode: forwards;
`;

const LogoBack = styled.div`
  position: absolute;
  width: 119px;
  height: 0px;
  top: 0;
  background: #fff;
  border-radius: 2px;
  animation-name: ${logoBackAnimate};
  animation-delay: 4.4s;
  animation-duration: 1s;
  animation-timing-function: ease-out;
  animation-fill-mode: forwards;
`;

const TextMain = styled.p`
  position: absolute;
  font-size: 48px;
  color: #fff;
  opacity: 0;
  text-align: center;
  margin: 0;
  font-weight: 500;
  animation-name: ${TextMainAnimate};
  animation-delay: 5.4s;
  animation-duration: 1s;
  animation-timing-function: ease-out;
  animation-fill-mode: forwards;
`;

const SubText = styled.p`
  font-size: 18px;
  line-height: 24px;
  text-align: center;
  color: #fff;
  font-weight: 100;
  position: absolute;
  opacity: 0;
  animation-name: ${SubTextAnimate};
  animation-delay: 5.4s;
  animation-duration: 1s;
  animation-timing-function: ease-out;
  animation-fill-mode: forwards;
`;

const STATUS = {
  START: "start",
  STOP: "stop"
};

const Button = styled.button``;

class Start extends Component {
  state = {
    status: STATUS.STOP
  };
  render() {
    const { status } = this.state;
    return (
      <Wrapper>
        {status === STATUS.STOP && (
          <Button onClick={() => this.setState({ status: STATUS.START })}>
            Start logo story
          </Button>
        )}
        {status === STATUS.START && (
          <>
            <Back>
              <img src={background} />
            </Back>

            <LogoBack />
            <Logo>
              <LogoContainer>
                <Image src={logo} />
                <Title>MalaManda</Title>
              </LogoContainer>
            </Logo>
            <TextMain>CAMPING</TextMain>
            <SubText>
              under the starry sky <br />
              in the cuddle of nature
            </SubText>
          </>
        )}
      </Wrapper>
    );
  }
}

export default Start;
