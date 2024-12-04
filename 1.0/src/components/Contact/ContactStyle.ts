import styled from "styled-components";

export const ContactStyle = styled.section`
  height: 100vh;
  scroll-snap-align: center;

  #container {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    gap: 50px;

    .left-side {
      flex: 1;
      display: flex;
      align-items: center;
      justify-content: flex-end;

      @media only screen and (max-width: 768px) {
        justify-content: center;
      }

      .form {
        width: 500px;
        display: flex;
        flex-direction: column;
        gap: 1.2rem;

        @media only screen and (max-width: 999px) {
          margin: 0 auto;
        }

        @media only screen and (max-width: 768px) {
          width: 300px;
        }

        h3 {
          font-weight: 200;
          text-transform: uppercase;
          letter-spacing: 0.7px;
        }
        input {
          padding: 20px;
          background-color: #edefe8;
          border: none;
          border-radius: 5px;
          outline: none;
        }
        textarea {
          padding: 20px;
          background-color: #edefe8;
          border: none;
          border-radius: 5px;
          resize: vertical;
          min-height: 100px;
          height: 200px;
          max-height: 400px;
          outline: none;
        }
        button {
          font-weight: 700;
          width: 100%;
        }
      }
    }
    .right-side {
      flex: 1;
      margin: 10rem;

      @media only screen and (max-width: 999px) {
        display: none;
      }

      @media only screen and (max-width: 768px) {
        display: none;
      }
    }
  }
`;
