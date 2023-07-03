import { styled } from "styled-components";
import { TITLE_FONT } from "../constants";

export const AppIntroContainer = styled.section`
  padding: 32px;

  @media (min-width: 768px) {
    max-width: 50%;
  }
`;

export const AppIntroTitle = styled.h2`
  margin: 0;
  font-family: ${TITLE_FONT};
  font-size: 32px;
  letter-spacing: 2px;
`;
