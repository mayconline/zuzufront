import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

    *{
        margin:0;
        padding:0;
        outline:0;
        box-sizing:border-box;
    }

    body {
        font-family:Arial, Helvetica, sans-serif;
        font-size:14px;
       
        text-rendering:optimizeLegibility;
        -webkit-font-smoothing:antialiased;
        background:#fafafa;

    }

    html , body , #root {
        min-height:100%;
    }


`;
