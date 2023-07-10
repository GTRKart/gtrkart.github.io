import { styled } from 'styled-components';

export const DrawerContainer = styled.div<{ $open: boolean }>`
  position: fixed;
  top: 0;
  right: 0;
  z-index: 9;
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
  transform: translateX(${({ $open }) => ($open ? '0' : '100%')});
  transition: all 0.5s ease-in-out;
  background-color: #fff;
  padding: 32px;
  box-shadow: ${({ $open }) => $open && '0 0 30px 0 rgba(0, 0, 0, 0.25)'};
  box-sizing: border-box;

  @media (min-width: 768px) {
    width: 50%;
  }
`;
