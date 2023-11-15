# test with styled components plugin

In this notion we have tested couple of instances of styled component’s different aspects with and without [https://www.npmjs.com/package/babel-plugin-styled-components](https://www.npmjs.com/package/babel-plugin-styled-components)

| Type | Original Code | build Without Plugin | file Size Without Plugin | With Plugin | file Size with plugin |
| --- | --- | --- | --- | --- | --- |
| Simple Styled components | import styled from "styled-components";

const Button = styled.button`
   background-color: red;
   color:white;
`
export default Button | // src/OneMore.js.tsx
import styled from "styled-components";
var Button = styled.button`
   background-color: red;
   color:white;
`;
var OneMore_js_default = Button;
export {
  OneMore_js_default as default
}; | https://www.notion.so/test-with-styled-components-plugin-99840c2f65424c22a23563ea3351ba8e?pvs=21 | // src/OneMore.js.tsx
import styled from "styled-components";
var Button = styled.button(["background-color:red;color:white;"]);
var OneMore_js_default = Button;
export {
  OneMore_js_default as default
}; | https://www.notion.so/test-with-styled-components-plugin-99840c2f65424c22a23563ea3351ba8e?pvs=21 |
| Simple Styled components with variable unused  | import styled from "styled-components";

const Button = styled.button`
  --picasso-button-text:red;
  --picasso-button-hover-color:green;

   background-color: red;
   color:white;
`
export default Button | // src/OneMore.js.tsx
import styled from "styled-components";
var Button = styled.button`
  --picasso-button-text:red;
  --picasso-button-hover-color:green;

   background-color: red;
   color:white;
`;
var OneMore_js_default = Button;
export {
  OneMore_js_default as default
}; | https://www.notion.so/test-with-styled-components-plugin-99840c2f65424c22a23563ea3351ba8e?pvs=21 | // src/OneMore.js.tsx
import styled from "styled-components";
var Button = styled.button(["--picasso-button-text:red;--picasso-button-hover-co\
lor:green;background-color:red;color:white;"]);
var OneMore_js_default = Button;
export {
  OneMore_js_default as default
}; | https://www.notion.so/test-with-styled-components-plugin-99840c2f65424c22a23563ea3351ba8e?pvs=21 |
| Styled components with variable used  | import styled from "styled-components";

const Button = styled.button`
 --picasso-button-min-hit-area: red;

--picasso-button-icon-margin: white;
   background-color: var(--picasso-button-icon-margin);
   color:var(--picasso-button-min-hit-area);
`
export default Button | // src/OneMore.js.tsx
import styled from "styled-components";
var Button = styled.button`
 --picasso-button-min-hit-area: red;

--picasso-button-icon-margin: white;
   background-color: var(--picasso-button-icon-margin);
   color:var(--picasso-button-min-hit-area);
`;
var OneMore_js_default = Button;
export {
  OneMore_js_default as default
}; | https://www.notion.so/test-with-styled-components-plugin-99840c2f65424c22a23563ea3351ba8e?pvs=21 | // src/OneMore.js.tsx
import styled from "styled-components";
var Button = styled.button(["--picasso-button-min-hit-area:red;--picasso-button-\
icon-margin:white;background-color:var(--picasso-button-icon-margin);color:var(-\
-picasso-button-min-hit-area);"]);
var OneMore_js_default = Button;
export {
  OneMore_js_default as default
}; | https://www.notion.so/test-with-styled-components-plugin-99840c2f65424c22a23563ea3351ba8e?pvs=21 |
| Styled components with medium styles  | import styled from "styled-components";

const Button = styled.button`
 -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-size: 232px;
    line-height:23px;
    letter-spacing: 12px;
    text-align:center;
    box-sizing: border-box;
    outline: none;
    position: relative;
    margin: 0;
    padding: 0;
    cursor: pointer;
    display: block;
    font-weight: 300;
    width: 100%;
    border: 2px solid black;
   background-color: red;
   color:white;
`
export default Button | // src/OneMore.js.tsx
import styled from "styled-components";
var Button = styled.button`
 -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-size: 232px;
    line-height:23px;
    letter-spacing: 12px;
    text-align:center;
    box-sizing: border-box;
    outline: none;
    position: relative;
    margin: 0;
    padding: 0;
    cursor: pointer;
    display: block;
    font-weight: 300;
    width: 100%;
    border: 2px solid black;
   background-color: red;
   color:white;
`;
var OneMore_js_default = Button;
export {
  OneMore_js_default as default
}; | https://www.notion.so/test-with-styled-components-plugin-99840c2f65424c22a23563ea3351ba8e?pvs=21 | // src/OneMore.js.tsx
import styled from "styled-components";
var Button = styled.button(["-webkit-font-smoothing:antialiased;-moz-osx-font-sm\
oothing:grayscale;font-size:232px;line-height:23px;letter-spacing:12px;text-alig\
n:center;box-sizing:border-box;outline:none;position:relative;margin:0;padding:0\
;cursor:pointer;display:block;font-weight:300;width:100%;border:2px solid black;\
background-color:red;color:white;"]);
var OneMore_js_default = Button;
export {
  OneMore_js_default as default
}; | https://www.notion.so/test-with-styled-components-plugin-99840c2f65424c22a23563ea3351ba8e?pvs=21 |
| Styled components with medium styles and variable unused | import styled from "styled-components";

const Button = styled.button`
    --picasso-button-min-hit-area: 44px;

--picasso-button-icon-margin: 9px;
--picasso-button-border-radius:30px;
--picasso-button-font-size: 17px;
--picasso-button-line-height: 12px;
--picasso-button-font-weight:300;
--picasso-button-letter-spacing: 22px;
--picasso-button-shadow-width: 2px;
--picasso-button-shadow-position-inset: 4px;

 -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-size: 232px;
    line-height:23px;
    letter-spacing: 12px;
    text-align:center;
    box-sizing: border-box;
    outline: none;
    position: relative;
    margin: 0;
    padding: 0;
    cursor: pointer;
    display: block;
    font-weight: 300;
    width: 100%;
    border: 2px solid black;
   background-color: red;
   color:white;
`
export default Button | // src/OneMore.js.tsx
import styled from "styled-components";
var Button = styled.button`
    --picasso-button-min-hit-area: 44px;

--picasso-button-icon-margin: 9px;
--picasso-button-border-radius:30px;
--picasso-button-font-size: 17px;
--picasso-button-line-height: 12px;
--picasso-button-font-weight:300;
--picasso-button-letter-spacing: 22px;
--picasso-button-shadow-width: 2px;
--picasso-button-shadow-position-inset: 4px;

 -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-size: 232px;
    line-height:23px;
    letter-spacing: 12px;
    text-align:center;
    box-sizing: border-box;
    outline: none;
    position: relative;
    margin: 0;
    padding: 0;
    cursor: pointer;
    display: block;
    font-weight: 300;
    width: 100%;
    border: 2px solid black;
   background-color: red;
   color:white;
`;
var OneMore_js_default = Button;
export {
  OneMore_js_default as default
}; | https://www.notion.so/test-with-styled-components-plugin-99840c2f65424c22a23563ea3351ba8e?pvs=21 | // src/OneMore.js.tsx
import styled from "styled-components";
var Button = styled.button(["--picasso-button-min-hit-area:44px;--picasso-button\
-icon-margin:9px;--picasso-button-border-radius:30px;--picasso-button-font-size:\
17px;--picasso-button-line-height:12px;--picasso-button-font-weight:300;--picass\
o-button-letter-spacing:22px;--picasso-button-shadow-width:2px;--picasso-button-\
shadow-position-inset:4px;-webkit-font-smoothing:antialiased;-moz-osx-font-smoot\
hing:grayscale;font-size:232px;line-height:23px;letter-spacing:12px;text-align:c\
enter;box-sizing:border-box;outline:none;position:relative;margin:0;padding:0;cu\
rsor:pointer;display:block;font-weight:300;width:100%;border:2px solid black;bac\
kground-color:red;color:white;"]);
var OneMore_js_default = Button;
export {
  OneMore_js_default as default
}; | https://www.notion.so/test-with-styled-components-plugin-99840c2f65424c22a23563ea3351ba8e?pvs=21 |
| Styled components with medium style and css variables used | import styled from "styled-components";

const Button = styled.button`
    --picasso-button-min-hit-area: 44px;

--picasso-button-icon-margin: 9px;
--picasso-button-border-radius:30px;
--picasso-button-font-size: 17px;
--picasso-button-line-height: 12px;
--picasso-button-font-weight:300;
--picasso-button-letter-spacing: 22px;
--picasso-button-shadow-width: 2px;
--picasso-button-shadow-position-inset: 4px;

 -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: var(--picasso-button-border-radius);
    font-size: var(--picasso-button-font-size);
    line-height:var(--picasso-button-font-weight);
    letter-spacing: var(--picasso-button-icon-margin);
    text-align:var(--picasso-button-letter-spacing);
    box-sizing: var(--picasso-button-line-height);
    outline: var(--picasso-button-min-hit-area);
    position:var(--picasso-button-shadow-position-inset);
    margin: var(--picasso-button-shadow-width);
    padding: 0;
    cursor: pointer;
    display: block;
    font-weight: 300;
    width: 100%;
    border: 2px solid black;
   background-color: red;
   color:white;
`
export default Button | // src/OneMore.js.tsx
import styled from "styled-components";
var Button = styled.button`
    --picasso-button-min-hit-area: 44px;

--picasso-button-icon-margin: 9px;
--picasso-button-border-radius:30px;
--picasso-button-font-size: 17px;
--picasso-button-line-height: 12px;
--picasso-button-font-weight:300;
--picasso-button-letter-spacing: 22px;
--picasso-button-shadow-width: 2px;
--picasso-button-shadow-position-inset: 4px;

 -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: var(--picasso-button-border-radius);
    font-size: var(--picasso-button-font-size);
    line-height:var(--picasso-button-font-weight);
    letter-spacing: var(--picasso-button-icon-margin);
    text-align:var(--picasso-button-letter-spacing);
    box-sizing: var(--picasso-button-line-height);
    outline: var(--picasso-button-min-hit-area);
    position:var(--picasso-button-shadow-position-inset);
    margin: var(--picasso-button-shadow-width);
    padding: 0;
    cursor: pointer;
    display: block;
    font-weight: 300;
    width: 100%;
    border: 2px solid black;
   background-color: red;
   color:white;
`;
var OneMore_js_default = Button;
export {
  OneMore_js_default as default
}; | https://www.notion.so/test-with-styled-components-plugin-99840c2f65424c22a23563ea3351ba8e?pvs=21 | // src/OneMore.js.tsx
import styled from "styled-components";
var Button = styled.button(["--picasso-button-min-hit-area:44px;--picasso-button\
-icon-margin:9px;--picasso-button-border-radius:30px;--picasso-button-font-size:\
17px;--picasso-button-line-height:12px;--picasso-button-font-weight:300;--picass\
o-button-letter-spacing:22px;--picasso-button-shadow-width:2px;--picasso-button-\
shadow-position-inset:4px;-webkit-font-smoothing:antialiased;-moz-osx-font-smoot\
hing:var(--picasso-button-border-radius);font-size:var(--picasso-button-font-siz\
e);line-height:var(--picasso-button-font-weight);letter-spacing:var(--picasso-bu\
tton-icon-margin);text-align:var(--picasso-button-letter-spacing);box-sizing:var\
(--picasso-button-line-height);outline:var(--picasso-button-min-hit-area);positi\
on:var(--picasso-button-shadow-position-inset);margin:var(--picasso-button-shado\
w-width);padding:0;cursor:pointer;display:block;font-weight:300;width:100%;borde\
r:2px solid black;background-color:red;color:white;"]);
var OneMore_js_default = Button;
export {
  OneMore_js_default as default
}; | https://www.notion.so/test-with-styled-components-plugin-99840c2f65424c22a23563ea3351ba8e?pvs=21 |
| Styled C with pseudo state | import styled from "styled-components";

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
`
export default Button | // src/OneMore.js.tsx
import styled from "styled-components";
var Button = styled.button`

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
var OneMore_js_default = Button;
export {
  OneMore_js_default as default
}; | https://www.notion.so/test-with-styled-components-plugin-99840c2f65424c22a23563ea3351ba8e?pvs=21 | // src/OneMore.js.tsx
import styled from "styled-components";
var Button = styled.button(["-webkit-font-smoothing:antialiased;-moz-osx-font-sm\
oothing:antialiased;font-size:2px;line-height:3px;letter-spacing:3px;text-align:\
center;box-sizing:content-box;outline:0;position:abosolute;margin:4px;padding:0;\
cursor:pointer;display:block;font-weight:300;width:100%;border:2px solid black;b\
ackground-color:red;color:white;&::-moz-focus-inner{border:0;}&:disabled{cursor:\
not-allowed;}&:before{content:'';display:block;position:absolute;top:50%;left:50\
%;width:100%;height:100%;transform:translate(-50%,-50%);z-index:0;}"]);
var OneMore_js_default = Button;
export {
  OneMore_js_default as default
}; | https://www.notion.so/test-with-styled-components-plugin-99840c2f65424c22a23563ea3351ba8e?pvs=21 |
|  sTYLEDc with pseudo state with css variable unused | import styled from "styled-components";

const Button = styled.button`
    --picasso-button-min-hit-area: 44px;

--picasso-button-icon-margin: 9px;
--picasso-button-border-radius:30px;
--picasso-button-font-size: 17px;
--picasso-button-line-height: 12px;
--picasso-button-font-weight:300;
--picasso-button-letter-spacing: 22px;
--picasso-button-shadow-width: 2px;
--picasso-button-shadow-position-inset: 4px;

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
`
export default Button | // src/OneMore.js.tsx
import styled from "styled-components";
var Button = styled.button`
    --picasso-button-min-hit-area: 44px;

--picasso-button-icon-margin: 9px;
--picasso-button-border-radius:30px;
--picasso-button-font-size: 17px;
--picasso-button-line-height: 12px;
--picasso-button-font-weight:300;
--picasso-button-letter-spacing: 22px;
--picasso-button-shadow-width: 2px;
--picasso-button-shadow-position-inset: 4px;

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
var OneMore_js_default = Button;
export {
  OneMore_js_default as default
}; | https://www.notion.so/test-with-styled-components-plugin-99840c2f65424c22a23563ea3351ba8e?pvs=21 | // src/OneMore.js.tsx
import styled from "styled-components";
var Button = styled.button(["--picasso-button-min-hit-area:44px;--picasso-button\
-icon-margin:9px;--picasso-button-border-radius:30px;--picasso-button-font-size:\
17px;--picasso-button-line-height:12px;--picasso-button-font-weight:300;--picass\
o-button-letter-spacing:22px;--picasso-button-shadow-width:2px;--picasso-button-\
shadow-position-inset:4px;-webkit-font-smoothing:antialiased;-moz-osx-font-smoot\
hing:antialiased;font-size:2px;line-height:3px;letter-spacing:3px;text-align:cen\
ter;box-sizing:content-box;outline:0;position:abosolute;margin:4px;padding:0;cur\
sor:pointer;display:block;font-weight:300;width:100%;border:2px solid black;back\
ground-color:red;color:white;&::-moz-focus-inner{border:0;}&:disabled{cursor:not\
-allowed;}&:before{content:'';display:block;position:absolute;top:50%;left:50%;w\
idth:100%;height:100%;transform:translate(-50%,-50%);z-index:0;}"]);
var OneMore_js_default = Button;
export {
  OneMore_js_default as default
}; | https://www.notion.so/test-with-styled-components-plugin-99840c2f65424c22a23563ea3351ba8e?pvs=21 |
| StyledC with pseudo states with css vars used | import styled from "styled-components";

const Button = styled.button`
    --picasso-button-min-hit-area: 44px;

--picasso-button-icon-margin: 9px;
--picasso-button-border-radius:30px;
--picasso-button-font-size: 17px;
--picasso-button-line-height: 12px;
--picasso-button-font-weight:300;
--picasso-button-letter-spacing: 22px;
--picasso-button-shadow-width: 2px;
--picasso-button-shadow-position-inset: 4px;

 -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: var(--picasso-button-border-radius);
    font-size: var(--picasso-button-font-size);
    line-height:var(--picasso-button-font-weight);
    letter-spacing: var(--picasso-button-icon-margin);
    text-align:var(--picasso-button-letter-spacing);
    box-sizing: var(--picasso-button-line-height);
    outline: var(--picasso-button-min-hit-area);
    position:var(--picasso-button-shadow-position-inset);
    margin: var(--picasso-button-shadow-width);
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
`
export default Button | // src/OneMore.js.tsx
import styled from "styled-components";
var Button = styled.button`
    --picasso-button-min-hit-area: 44px;

--picasso-button-icon-margin: 9px;
--picasso-button-border-radius:30px;
--picasso-button-font-size: 17px;
--picasso-button-line-height: 12px;
--picasso-button-font-weight:300;
--picasso-button-letter-spacing: 22px;
--picasso-button-shadow-width: 2px;
--picasso-button-shadow-position-inset: 4px;

 -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: var(--picasso-button-border-radius);
    font-size: var(--picasso-button-font-size);
    line-height:var(--picasso-button-font-weight);
    letter-spacing: var(--picasso-button-icon-margin);
    text-align:var(--picasso-button-letter-spacing);
    box-sizing: var(--picasso-button-line-height);
    outline: var(--picasso-button-min-hit-area);
    position:var(--picasso-button-shadow-position-inset);
    margin: var(--picasso-button-shadow-width);
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
var OneMore_js_default = Button;
export {
  OneMore_js_default as default
}; | https://www.notion.so/test-with-styled-components-plugin-99840c2f65424c22a23563ea3351ba8e?pvs=21 | // src/OneMore.js.tsx
import styled from "styled-components";
var Button = styled.button(["--picasso-button-min-hit-area:44px;--picasso-button\
-icon-margin:9px;--picasso-button-border-radius:30px;--picasso-button-font-size:\
17px;--picasso-button-line-height:12px;--picasso-button-font-weight:300;--picass\
o-button-letter-spacing:22px;--picasso-button-shadow-width:2px;--picasso-button-\
shadow-position-inset:4px;-webkit-font-smoothing:antialiased;-moz-osx-font-smoot\
hing:var(--picasso-button-border-radius);font-size:var(--picasso-button-font-siz\
e);line-height:var(--picasso-button-font-weight);letter-spacing:var(--picasso-bu\
tton-icon-margin);text-align:var(--picasso-button-letter-spacing);box-sizing:var\
(--picasso-button-line-height);outline:var(--picasso-button-min-hit-area);positi\
on:var(--picasso-button-shadow-position-inset);margin:var(--picasso-button-shado\
w-width);padding:0;cursor:pointer;display:block;font-weight:300;width:100%;borde\
r:2px solid black;background-color:red;color:white;&::-moz-focus-inner{border:0;\
}&:disabled{cursor:not-allowed;}&:before{content:'';display:block;position:absol\
ute;top:50%;left:50%;width:100%;height:100%;transform:translate(-50%,-50%);z-ind\
ex:0;}"]);
var OneMore_js_default = Button;
export {
  OneMore_js_default as default
}; | https://www.notion.so/test-with-styled-components-plugin-99840c2f65424c22a23563ea3351ba8e?pvs=21 |

![Untitled](test%20with%20styled%20components%20plugin%2099840c2f65424c22a23563ea3351ba8e/Untitled.png)

![Untitled](test%20with%20styled%20components%20plugin%2099840c2f65424c22a23563ea3351ba8e/Untitled%201.png)

![Untitled](test%20with%20styled%20components%20plugin%2099840c2f65424c22a23563ea3351ba8e/Untitled%202.png)

![Untitled](test%20with%20styled%20components%20plugin%2099840c2f65424c22a23563ea3351ba8e/Untitled%203.png)

![Untitled](test%20with%20styled%20components%20plugin%2099840c2f65424c22a23563ea3351ba8e/Untitled%204.png)

![Untitled](test%20with%20styled%20components%20plugin%2099840c2f65424c22a23563ea3351ba8e/Untitled%205.png)

![Untitled](test%20with%20styled%20components%20plugin%2099840c2f65424c22a23563ea3351ba8e/Untitled%206.png)

![Untitled](test%20with%20styled%20components%20plugin%2099840c2f65424c22a23563ea3351ba8e/Untitled%207.png)

![Untitled](test%20with%20styled%20components%20plugin%2099840c2f65424c22a23563ea3351ba8e/Untitled%208.png)

![Untitled](test%20with%20styled%20components%20plugin%2099840c2f65424c22a23563ea3351ba8e/Untitled%209.png)

![Untitled](test%20with%20styled%20components%20plugin%2099840c2f65424c22a23563ea3351ba8e/Untitled%2010.png)

![Untitled](test%20with%20styled%20components%20plugin%2099840c2f65424c22a23563ea3351ba8e/Untitled%2011.png)

![Untitled](test%20with%20styled%20components%20plugin%2099840c2f65424c22a23563ea3351ba8e/Untitled%2012.png)

![Untitled](test%20with%20styled%20components%20plugin%2099840c2f65424c22a23563ea3351ba8e/Untitled%2013.png)

![Untitled](test%20with%20styled%20components%20plugin%2099840c2f65424c22a23563ea3351ba8e/Untitled%2014.png)

![Untitled](test%20with%20styled%20components%20plugin%2099840c2f65424c22a23563ea3351ba8e/Untitled%2015.png)

![Untitled](test%20with%20styled%20components%20plugin%2099840c2f65424c22a23563ea3351ba8e/Untitled%2016.png)

![Untitled](test%20with%20styled%20components%20plugin%2099840c2f65424c22a23563ea3351ba8e/Untitled%2017.png)