import styled from "styled-components/macro";

export const Container = styled.nav`
  position: fixed;
  top: 0;
  width: 100%;
  height: 30px;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  z-index: 1;
  transition-timing-function: ease-in;
  transition: all 0.5s;
  background-color: ${(props) => (props.show ? "#111" : "")};
`;

export const Logo = styled.img.attrs((props) => ({
  src: "https://pngimg.com/uploads/netflix/netflix_PNG32.png",
  alt: "Netflix Logo",
}))`
  position: fixed;
  left: 20px;
  width: 80px;
  object-fit: contain;
`;

export const Avatar = styled.img.attrs((props) => ({
  src:
    "https://i.pinimg.com/564x/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.jpg",
  alt: "User avatar",
}))`
  position: fixed;
  right: 20px;
  width: 30px;
  object-fit: contain;
`;
