import { css, styled } from "styled-components";
import POSTER from '../media/kart-dark-poster.jpg';
import POSTER_MOBILE from '../media/kart-dark-poster-mobile.jpg';

type AppFormProps = {
  $isFormOpen: boolean;
};

export const AppHeader = styled.header`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1;

  > * {
    padding: 32px;
  }
`;

export const AppBackground = styled.div<AppFormProps>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-color: #211c0d;
  color: #fff;
  transition: all 0.5s ease-in-out;
  transform: translateX(0%);
  
  @media (max-width: 767.99px) {
    background-image: url(${POSTER_MOBILE});
  }

  @media (min-width: 768px) {
    background-image: url(${POSTER});
  }

  ${({ $isFormOpen }) => $isFormOpen && css`
    transform: translateX(-100%);

    @media (min-width: 768px) {
      transform: translateX(-50%);
    }
  `}
`;

export const AppIntro = styled.section`
  padding: 32px;

  @media (min-width: 768px) {
    maw-width: 50%;
  }
`;

export const AppForm = styled.form<AppFormProps>`
  display: flex;
  flex-direction: column;
  padding: 32px;
  transform: translateX(100%);
  transition: all 0.5s ease-in-out;

  color: #5e2c05;

  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow-y: auto;
  
  ${({ $isFormOpen }) => $isFormOpen && css`
    transform: translateX(0%);
  `}

  @media (min-width: 768px) {
    left: 50%;
  }
`;

const TICKET_COLOR = '#fff5c8';
const getRandomPosX = () => Math.floor(Math.random() * 100);

const ticketStyles = css`
  background-color: ${TICKET_COLOR};
  padding: 16px;
  position: relative;

  &:before, &:after {
    content:'';
    width:100%;
    height:5px;
    position:absolute;
    bottom:100%;
    left:0;
    background-image: linear-gradient(135deg, transparent 66%, ${TICKET_COLOR} 67%),
                      linear-gradient(45deg, ${TICKET_COLOR} 33%, gray 34%, transparent 44%);
    background-position: ${getRandomPosX()}% 0;
    background-size: 10px 100%;
    background-repeat:repeat-x;
  }

  &:after {
    top:100%;
    bottom:auto;
    background-image: linear-gradient(135deg, ${TICKET_COLOR} 33%, gray 34%, transparent 44%),
                      linear-gradient(45deg, transparent 66%, ${TICKET_COLOR} 67%);    
  }
`;

export const AppPaymentInfo = styled.section`
  ${ticketStyles}
`;

export const SubscriptionSection = styled.section`
  margin: 32px 0;
  ${ticketStyles}
`;
