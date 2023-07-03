import { css, styled } from "styled-components";
import { TITLE_FONT } from "../App/constants";

export type SubscriptionContainerProps = {
  $isFormOpen: boolean;
};

export const SubscriptionContainer = styled.form<SubscriptionContainerProps>`
  display: flex;
  flex-direction: column;
  padding: 32px;
  transform: translateX(100%);
  transition: all 0.5s ease-in-out;

  font-size: 12px;
  color: #40180A;

  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: ${({ $isFormOpen }) => $isFormOpen ? 2 : -1};
  overflow-y: auto;
  
  ${({ $isFormOpen }) => $isFormOpen && css`
    transform: translateX(0%);
  `}

  @media (min-width: 768px) {
    left: 50%;
  }
`;

export const SubscriptionTitle = styled.h3`
  margin-top: 0;
  margin-bottom: 16px;
  font-family: ${TITLE_FONT};
  font-size: 24px;
  letter-spacing: 2px;
`;

export const SubscriptionInfoContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(16em, 1fr));
  grid-gap: 16px;
  margin-bottom: 16px;
`;

export const SubscriptionEventInfo = styled.section`
  min-width: 12em;
`;

const TICKET_BG_COLOR = '#fff5c8';
const TICKET_COLOR = 'inherit';
const getRandomPosX = () => Math.floor(Math.random() * 100);

export const SubscriptionPaymentInfo = styled.section`
  background-color: ${TICKET_BG_COLOR};
  padding: 16px;
  position: relative;
  color: ${TICKET_COLOR};

  &:before, &:after {
    content:'';
    width:100%;
    height:5px;
    position:absolute;
    bottom:100%;
    left:0;
    background-image: linear-gradient(135deg, transparent 66%, ${TICKET_BG_COLOR} 67%),
                      linear-gradient(45deg, ${TICKET_BG_COLOR} 33%, gray 34%, transparent 44%);
    background-position: ${getRandomPosX()}% 0;
    background-size: 10px 100%;
    background-repeat:repeat-x;
  }

  &:after {
    top:100%;
    bottom:auto;
    background-image: linear-gradient(135deg, ${TICKET_BG_COLOR} 33%, gray 34%, transparent 44%),
                      linear-gradient(45deg, transparent 66%, ${TICKET_BG_COLOR} 67%);    
  }
`;
