import styled from "styled-components";

export const WhoStyle = styled.section`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  justify-content: center;

  #container {
    height: 100%;
    scroll-snap-align: center;
    width: 1400px;
    display: flex;
    justify-content: space-between;

    .left-side {
      flex: 1;

      @media only screen and (max-width: 768px) {
        display: none;
      }
    }
    .right-side {
      flex: 1;
      position: relative;
      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: 2rem;

      @media only screen and (max-width: 999px) {
        text-align: center;
        align-items: center;
      }

      @media only screen and (max-width: 768px) {
        align-items: center;
        text-align: center;
      }

      h1 {
        font-size: 4.5rem;

        @media only screen and (max-width: 999px) {
          font-size: 2.8rem;
        }

        @media only screen and (max-width: 768px) {
          font-size: 3rem;
        }
      }

      .whatIDo {
        display: flex;
        align-items: center;
        gap: 1rem;

        .line {
          height: 5px;
        }

        h2 {
          color: var(--zimablue);
        }
      }

      .description {
        font-size: 1.5rem;
        color: lightgray;

        @media only screen and (max-width: 999px) {
          font-size: 1.2rem;
        }
      }

      .btn {
        width: 150px;
      }
    }
  }
`;
