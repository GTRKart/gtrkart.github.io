import { css, styled } from 'styled-components';
import { SubscriptionContainerProps } from '../../SubscriptionForm/SubscriptionForm.styles';
import POSTER_MOBILE from '../../media/kart-dark-poster-mobile.jpg';
import POSTER from '../../media/kart-dark-poster.jpg';

export const AppBackground = styled.div<SubscriptionContainerProps>`
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
  transform-origin: center;
  
  @media (max-width: 767.99px) {
    background-image: url(${POSTER_MOBILE});
  }

  @media (min-width: 768px) {
    background-image: url(${POSTER});
  }

  ${({ $isFormOpen }) => $isFormOpen && css`
    transform: translateX(-100%);

    @media (min-width: 768px) {
      transform: translateX(-50%) rotateY(15deg);
    }
  `}
`;
