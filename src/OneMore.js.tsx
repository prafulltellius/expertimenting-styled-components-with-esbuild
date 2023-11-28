import styled from "styled-components";

const Button = styled.button`



 -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing:antialiased;
    font-size:2px;
    line-height:3px;
    letter-spacing: 3px;
    text-align:center;
    box-sizing: content-box;
    outline:0;
    position:abosolute;
    margin: 4px;
    padding: 0;
    cursor: pointer;
    display: block;
    font-weight: 300;
    width: 100%;
    border: 2px solid black;
   background-color: red;
   color:white;

   &::-moz-focus-inner {
        border: 0;
    }

    /* TODO: remove isLoding consideration here when button finally stopped disabling when isLoading is also true and let the consumer set each one separately. */

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
`
export default Button