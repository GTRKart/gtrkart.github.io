import { css, styled } from 'styled-components';

export const Row = styled.span<{ $gap?: string; $alignItems?: string }>`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: ${({ $alignItems: alignItems }) => alignItems || 'center'};
  gap: ${({ $gap: gap }) => gap || '16px'};
`;

export const Column = styled.span<{ gap?: string; alignItems?: string }>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: ${({ alignItems }) => alignItems || 'center'};
  gap: ${({ gap }) => gap || '16px'};
`;

export const FlexItem = styled.span<{ flex?: string }>`
  flex: ${({ flex }) => flex || '1'};
`;

export const Button = styled.button<{ $unstyled?: boolean }>`
  display: inline-flex;
  align-items: center;
  gap: 8px;

  font: inherit;
  transition: all 0.2s ease-in-out;

  ${({ $unstyled }) => css`
    padding: ${$unstyled ? '0' : '8px 16px'};
    background-color: ${$unstyled ? 'transparent' : '#fff'};
    border: ${$unstyled ? '0 none' : '1px solid #000'};
    border-radius: 4px;
    box-shadow: ${$unstyled ? '0 0 transparent' : '0 2px 4px rgba(0, 0, 0, 0.2)'};
    color: ${$unstyled ? '#c43cff' : '#000'};
    cursor: pointer;
    font-weight: ${$unstyled ? 'normal' : '700'};

    &:hover {
      background-color: ${$unstyled ? 'transparent' : '#c43cff'};
      border-color: ${$unstyled ? 'transparent' : '#c43cff'};
      box-shadow: ${$unstyled ? '0 0 transparent' : '0 2px 6px rgba(0, 0, 0, 0.5)'};
      color: ${$unstyled ? 'inherit' : '#fff'};
    }
  `}
`;
