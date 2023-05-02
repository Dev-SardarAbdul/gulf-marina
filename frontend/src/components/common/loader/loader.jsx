import styled from "styled-components";
// import bgImg from "../../../assets/images/bgimg.png";
import { motion } from "framer-motion";
import { navLogo } from "assets";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import Lottie from "react-lottie";
import animationData from "../../../assets/lotties/srtars.json";

const Container = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  /* touch-action: none; */
  overflow: hidden;

  width: 100vw;
  height: 100vh;
  z-index: 99999 !important;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #ff4e00;
  background-image: linear-gradient(315deg, #ff4e00 0%, #ec9f05 74%);

  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  color: green;

  .lottieDiv {
    position: absolute;
    top: 0;
    @media (max-width: 575.98px) {
      width: 200px;
      height: 200px;
    }
  }

  .lottieDivTwo {
    position: absolute;
    top: 0;
    left: 0;
    @media (max-width: 575.98px) {
      width: 200px;
      height: 200px;
    }
  }

  .lottieDivThree {
    position: absolute;
    top: 0;
    right: 0;
    @media (max-width: 575.98px) {
      width: 200px;
      height: 200px;
    }
  }

  svg {
    width: 10vw;
    height: auto;
    overflow: visible;
    stroke-linejoin: round;
    stroke-linecap: round;

    g {
      path {
        stroke: ${(props) => props.theme.text};
      }
    }
  }

  @media (max-width: 48em) {
    svg {
      width: 20vw;
    }
  }
`;

const Text = styled(motion.span)`
  font-family: "Teko" !important;
  font-size: 40px;
  color: #ee6700;
  padding-top: 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;

  @media (max-width: 48em) {
    font-size: 60px;
  }

  h1 {
    color: #fff;
    font-size: 50px;
    text-transform: uppercase;
    text-transform: uppercase;
    font-family: "Teko" !important;
    font-weight: 700;
    margin-top: 2rem;

    @media (max-width: 991.98px) {
      margin-top: 0;
      margin-top: 2rem;
    }
  }
`;

const Flex = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
  margin-top: 4rem;

  @media (max-width: 991.98px) {
    flex-direction: column;
  }
`;

const Left = styled.div``;

const Right = styled.div``;

const BottomText = styled.p`
  color: #fff;
  font-family: "Teko" !important;
  width: 70%;
  text-align: center;
  text-transform: capitalize;

  @media (max-width: 991.98px) {
    font-size: 32px;
  }

  @media (max-width: 767.98px) {
    width: 100%;
    padding: 0 10px 0 10px;
  }

  svg {
    width: 5% !important;
    margin-bottom: 2rem;
  }
`;

const textVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,

    transition: {
      duration: 1,
      yoyo: Infinity, // repeats infinite times
      ease: "easeInOut",
    },
  },
};

const pathVariants = {
  hidden: {
    opacity: 0,
    pathLength: 0,
  },
  visible: {
    opacity: 1,
    pathLength: 1,

    transition: {
      duration: 2,
      ease: "easeInOut",
    },
  },
};

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
    color: "#ff0000",
  },
};

const MainLoader = () => {
  return (
    <Container
      initial={{
        y: 0,
        opacity: 1,
      }}
      exit={{
        y: "100%",
        opacity: 0,
      }}
      transition={{
        duration: 2,
      }}
    >
      <div className="lottieDiv">
        <Lottie options={defaultOptions} height={400} width={400} />;
      </div>
      <div className="lottieDivTwo">
        <Lottie options={defaultOptions} height={400} width={400} />;
      </div>
      <div className="lottieDivThree">
        <Lottie options={defaultOptions} height={400} width={400} />;
      </div>
      <Text variants={textVariants} initial="hidden" animate="visible">
        <Flex>
          <Left>
            <img src={navLogo} style={{ height: "100px" }} />
          </Left>
          <Right>
            <h1>Gulf Marina</h1>
          </Right>
        </Flex>
        <BottomText>
          <FaQuoteLeft style={{ marginRight: "10px" }} /> Welcome to where
          efficiency meets reliability - your ultimate logistics partner.{" "}
          <FaQuoteRight className="iconSize" />
        </BottomText>
      </Text>
    </Container>
  );
};

export default MainLoader;
