import styled from "styled-components";

export const AboutMeStyle = styled.section`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: relative;

  @media only screen and (max-width: 768px) {
    text-align: center;
    height: 200vh;
  }

  a {
    text-align: center;
    position: absolute;
    top: 10px;
    left: 10px;

    @media only screen and (max-width: 768px) {
      display: none;
    }
  }

  hr {
    width: 80%;
    border: solid 1px lightgray;
  }

  .about-header {
    display: flex;
    align-items: center;
    margin-bottom: 1.5rem;
    gap: 1rem;

    @media only screen and (max-width: 999px) {
      margin: 15rem 0 2rem 0;
    }

    @media only screen and (max-width: 768px) {
      justify-content: center;
      flex-direction: column;
      align-items: center;
      gap: 0.6rem;
    }

    img {
      width: 200px;
      border-radius: 50%;

      @media only screen and (max-width: 999px) {
        width: 100px;
      }

      @media only screen and (max-width: 768px) {
        display: none;
      }
    }
    .titles {
      display: flex;
      flex-direction: column;

      h1 {
        font-size: 4rem;

        @media only screen and (max-width: 999px) {
          font-size: 2.5rem;
        }

        @media only screen and (max-width: 768px) {
          font-size: 2rem;
        }

        span {
          transition: 0.5s;
          color: var(--zimablue);
          :hover {
            text-shadow: 0 0 5px var(--zimablue), 0 0 10px var(--zimablue),
              0 0 20px var(--zimablue), 0 0 20px var(--zimablue);

            @media only screen and (max-width: 768px) {
              text-shadow: none;
            }
          }
        }
      }

      h3 {
        font-size: 2rem;

        @media only screen and (max-width: 999px) {
          font-size: 1.4rem;
        }

        @media only screen and (max-width: 768px) {
          font-size: 1.2rem;
        }
      }
    }
  }

  .description-container {
    display: flex;
    flex-direction: row;
    width: 70%;
    margin: 1rem 0.8rem;

    @media only screen and (max-width: 768px) {
      flex-direction: column;
      gap: 2rem;
    }

    h2,
    p {
      animation: fadeIn 5s;
    }

    h2 {
      transition: all 0.2s;
      :hover {
        color: var(--zimablue);
      }
    }

    .whatAmIDoing {
      padding-right: 1rem;
      border-right: 1px solid lightgray;

      @media only screen and (max-width: 768px) {
        border-right: none;
        padding-right: 0;
        padding-bottom: 1rem;
        border-bottom: 1px solid lightgray;
      }
    }
    .careeer {
      margin-left: 1rem;

      @media only screen and (max-width: 768px) {
        margin-left: 0;
      }
    }
  }

  .skills {
    width: 70%;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    margin-top: 1rem;
    line-height: 2rem;

    @media only screen and (max-width: 999px) {
      text-align: center;
      width: 80%;
    }

    @media only screen and (max-width: 768px) {
      flex-direction: column;
      gap: 2rem;
    }

    .soft-skills {
      height: 300px;
      padding-right: 1rem;
      border-right: 1px solid lightgray;

      @media only screen and (max-width: 999px) {
        height: 400px;
      }

      @media only screen and (max-width: 768px) {
        border-right: none;
        border-bottom: 1px solid lightgray;
        height: auto;
      }
      ul {
        li {
          transition: 0.5s;
          :hover {
            color: var(--zimablue);
          }
          span {
            color: var(--zimablue);
          }
        }
      }
    }
    .hard-skills {
      height: 300px;
      padding-right: 1rem;
      border-right: 1px solid lightgray;

      @media only screen and (max-width: 999px) {
        height: 400px;
      }

      @media only screen and (max-width: 768px) {
        border-right: none;
        border-bottom: 1px solid lightgray;
        height: auto;
      }

      ul {
        li {
          transition: 0.5s;
          :hover {
            color: var(--zimablue);
          }
          span {
            color: var(--zimablue);
          }
        }
      }
    }
    .habilities {
      height: 300px;

      @media only screen and (max-width: 999px) {
        height: 400px;
      }

      @media only screen and (max-width: 768px) {
        height: auto;
      }

      ul {
        li {
          transition: 0.5s;
          :hover {
            color: var(--zimablue);
          }
          span {
            color: var(--zimablue);
          }
        }
      }
    }
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;
