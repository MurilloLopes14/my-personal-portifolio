import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  :root{
    --font: "Poppins";
    --zimablue: #10c2ec;
    --dark-bg: #2D2E28;
  }

  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: var(--font);
  }

  body{
    transition: all .2s;
    background-image: url("/assets/bg.jpg");
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    height: 100vh;
  }

  a, h1, h2, h3, h4, h5, h6, li, p, img{
    user-select: none;
  }

  a{
    text-decoration: none;
  }

  ul, li, ol{
    list-style: none;
  }

  .App{
    height: 100vh;
    scroll-snap-type: y mandatory;
    scroll-behavior: smooth;
    overflow-y: auto;
    scrollbar-width: none;
    color: white;
    background-image: url("/assets/bg.jpg");
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;

    &::-webkit-scrollbar{
      display: none;
    }
  }

  .btn {
    width: 120px;
    padding: 0.8rem;
    background-color: var(--zimablue);
    border: none;
    border-radius: 10px;
    color: white;
    transition: 0.2s;
    cursor: pointer;

    :hover {
      transform: scale(1.05);
      box-shadow: rgb(12, 149, 207) 0px 0px 10px 1px;
      -webkit-box-shadow: rgb(12, 149, 207) 0px 0px 10px 1px;
      -moz-box-shadow: rgb(12, 149, 207) 0px 0px 10px 1px;
    }

    :active {
      box-shadow: none;
    }

    :disabled{
      color: lightgray;
      background-color: rgba(16, 194, 236, .3);
    }
  }

`;

export default GlobalStyle;
