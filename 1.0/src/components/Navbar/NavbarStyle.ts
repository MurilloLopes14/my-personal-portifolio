import styled from "styled-components";

export const NavbarStyle = styled.div`
  display: flex;
  justify-content: center;

  @media only screen and (min-width: 800px) {
    width: 100%;
  }

  @media only screen and (max-width: 768px) {
    width: 100%;
  }

  #container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 1400px;
    padding: 10px 0;

    @media only screen and (max-width: 768px) {
      width: 100%;
    }
  }

  .navigation {
    display: flex;
    align-items: center;
    gap: 2rem;
  }

  .logo img {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    margin: 1rem;
    object-fit: cover;
  }

  .icons {
    display: flex;
    align-items: center;
    gap: 2rem;
    margin-right: 1rem;
  }

  .icon {
    color: white;
    font-size: 3.5rem;
    cursor: pointer;
  }

  .btn {
    width: 100%;
  }
`;
