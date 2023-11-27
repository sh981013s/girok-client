import { css } from 'styled-components';

interface Font {
  size: number;
  weight: number;
  spacing: number;
}

/*
    Usage:

    import font from '@styles/fonts';

    const StyledComponent = styled.div`
        ${font({
            size: 1.6,
            weight: 700,
            spacing: -1,
        })}
    `;
 */

const font = ({ size, weight, spacing }: Font) => {
  return css`
    font-size: ${size}rem;
    font-weight: ${weight};
    letter-spacing: ${spacing}%;
  `;
};

export default font;
