import styled from 'styled-components';

const Header = styled.header<{ open: number }>`
  display: flex;
  padding: 0% 5% 0% 5%;
  justify-content: space-between;
  border-bottom: 1px solid #ebebeb;
  font-style: italic;

  .leftBox {
    display: flex;
  }

  .rightBox {
    display: flex;
  }

  a {
    align-self: stretch;
    align-items: center;
    padding: 15px 20px 0px;
    text-decoration: none;
    color: #707070;
    font-weight: 600;
    font-size: 1.2rem;
    cursor: pointer;
  }

  .logo {
    font-weight: 900;
    font-size: 2rem;
    padding-top: 10px;
    border-bottom: 5px solid #b5c401;
    border-radius: 4%;
    svg {
      display: none;
    }
  }

  @media (max-width: 1024px) {
    height: ${({ open }) => (open > 0 ? 'auto' : '50px')};
    flex-direction: column;
    padding: 0;
    .leftBox,
    .rightBox {
      display: flex;
      flex-direction: column;
      a:not(.logo) {
        transition: 0.4s all;
        /* height: $ {({ open }) => (open > 0 ? '40px' : '0')}; */
        transform: ${({ open }) =>
          open > 0 ? 'translateY(0px)' : 'translateY(-256px)'};
      }
    }
    .rightBox:last-child {
      padding-bottom: 15px;
    }
    .logo {
      outline: none;
      display: flex;
      justify-content: space-between;
      background-color: white;
      svg {
        display: block;
      }
      border-left: 5px solid #b5c401;
      border-radius: 2%;
      border-bottom: none;
      padding: 5px 15px;
      font-size: 1.6;
    }
  }
`;

export default Header;
