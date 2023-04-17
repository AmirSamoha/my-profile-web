import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

/* html{
    @media (max-width: 1700px){
        font-size: 75%;
        justify-content: center;
    }

} */

body{
    background: #1b1b1b;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif ;
    overflow-x: hidden;
}


    button{
            font-weight: bold;
            font-size: 1.1.rem;
            font-family: cursive;
            cursor: pointer;
            padding: 1rem 2rem;
            border: 3px solid #23d997;
            background: transparent;
            color: white;
            transition: all 0.5s ease;
            &:hover{
                background-color: #23d997;
                color: white;
            }
        }
    h2{
        font-weight: lighter;
        font-size: 3rem;
    }
    h3{
        color: white;
        
    }
    h4{
        font-weight: bold;
        font-size: 2rem;
    }
    a{
        font-size: 1rem;
    }
    span{
        font-weight: bold;
        color: #23d997;
    }
    p{
        padding: 3rem 0rem;
        color: #23d997;
        font-size: 1.4rem;
        line-height: 150%;
    }
`;

export default GlobalStyle;
