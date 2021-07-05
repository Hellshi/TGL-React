import styled from 'styled-components';

const Header = styled.header`
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
  }
`;

export default Header;
