import styled from "styled-components";

const Button = styled.button`

 /* Achieve minimum hit area agreed for TDS. */
 --picasso-button-min-hit-area: ${({ size }) =>
        size === 'xs' ? '32px' : '44px'};

    --picasso-button-icon-margin: ${({ size }) =>
        size === 'sm' ? '7px' : '9px'};
    --picasso-button-border-radius: ${buttonTokens.borderRadius}px;
    --picasso-button-font-family: ${defaultTheme.base.fontFamily};
    --picasso-button-font-size: ${({ size }) =>
        size === 'sm'
            ? `${buttonTokens.fontSizeSmall}px`
            : `${defaultTheme.base.fontSize}px`};
    --picasso-button-line-height: ${defaultTheme.base.lineHeight}px;
    --picasso-button-font-weight: ${buttonTokens.fontWeight};
    --picasso-button-letter-spacing: ${buttonTokens.letterSpacing}px;
    --picasso-button-transition-duration: ${buttonTokens.transitionDuration};
    --picasso-button-shadow-width: ${buttonTokens.shadowWidth}px;
    --picasso-button-shadow-position-inset: ${buttonTokens.shadowPositionInset}px;
    --picasso-button-shadow-color: ${({ isOnDark = false }) =>
        isOnDark ? buttonTokens.shadowColorOnDark : buttonTokens.shadowColor};

    //css properties
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-family: var(--picasso-button-font-family);
    font-size: var(--picasso-button-font-size);
    line-height: var(--picasso-button-line-height);
    letter-spacing: var(--picasso-button-letter-spacing);
    text-align: ${({ leftIcon, rightIcon }) => {
        const leftIconProvided = leftIcon !== null && leftIcon !== undefined;
        const rightIconProvided = rightIcon !== null && rightIcon !== undefined;

        if (leftIconProvided && rightIconProvided) {
            return 'center';
        }

        if (rightIconProvided) {
            return 'left';
        }

        return 'left';
    }};
    -webkit-tap-highlight-color: ${defaultTheme.base.tapHighlightColor};
    box-sizing: border-box;
    outline: none;
    position: relative;
    margin: 0;
    padding: 0;
    cursor: pointer;
    display: block;
    font-weight: var(--picasso-button-font-weight);
    width: ${({ fullWidth = false }) => (fullWidth ? '100%' : undefined)};
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
        opacity: ${({ isLoading = false }) =>
            isLoading ? undefined : buttonTokens.disabledOpacity};
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
        min-width: var(--picasso-button-min-hit-area);
        min-height: var(--picasso-button-min-hit-area);
        transform: translate(-50%, -50%);
        z-index: 0;
    }
`
export default Button