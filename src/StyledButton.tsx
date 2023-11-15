import styled from 'styled-components';
import isPropValid from '@emotion/is-prop-valid';

export const StyledBaseButton = styled.button.withConfig({
    shouldForwardProp: isPropValid
})`
    /* Achieve minimum hit area agreed for TDS. */
    --picasso-button-min-hit-area: 44px;

    --picasso-button-icon-margin: 9px;
    --picasso-button-border-radius:30px;
    --picasso-button-font-size: 17px;
    --picasso-button-line-height: 12px;
    --picasso-button-font-weight:300;
    --picasso-button-letter-spacing: 22px;
    --picasso-button-shadow-width: 2px;
    --picasso-button-shadow-position-inset: 4px;
  

    //css properties
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-family: var(--picasso-button-font-family);
    font-size: var(--picasso-button-font-size);
    line-height: var(--picasso-button-line-height);
    letter-spacing: var(--picasso-button-letter-spacing);
    text-align:center;
    box-sizing: border-box;
    outline: none;
    position: relative;
    margin: 0;
    padding: 0;
    cursor: pointer;
    display: block;
    font-weight: var(--picasso-button-font-weight);
    width: 100%;
    background: var(--picasso-button-background);
    border: var(--picasso-button-border-width) solid
        var(--picasso-button-border-color);
    color: var(--picasso-button-color);

    &::-moz-focus-inner {
        border: 0;
    }

    /* TODO: remove isLoading consideration here when button finally stopped disabling when isLoading is also true and let the consumer set each one separately. */

    &:disabled {
        cursor: not-allowed;
        
    }

    /* Increase hit area to minimum agreed for TDS */
    &:before {
        content: '';
        display: block;
        position: absolute;
        top: 50%;
        left: 50%;
        width: 100%;
        height: 100%;
        /* min-width: var(--picasso-button-min-hit-area);
        min-height: var(--picasso-button-min-hit-area); */
        transform: translate(-50%, -50%);
        z-index: 0;
    }
`;

export default StyledBaseButton;
