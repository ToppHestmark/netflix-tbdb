import React, { useEffect, useState } from 'react';
import styled from 'styled-components/macro';

const Nav = () => {
    const [show, handleShow] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
          if (window.scrollY > 100) {
              console.log(window.scrollY);
            handleShow(true);
          } else handleShow(false);
        });
        return () => {
          window.removeEventListener("scroll");
        }
      }, []);

    const Container = styled.nav`
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
        background-color: ${show ? '#111' : ""};
    `;

    const Logo = styled.img.attrs(props => ({
        src: "http://pngimg.com/uploads/netflix/netflix_PNG32.png",
        alt: "Netflix Logo"
    }))`
        position: fixed;
        left: 20px;
        width: 80px;
        object-fit: contain;
    `;

    const Avatar = styled.img.attrs(props => ({
        src: "https://i.pinimg.com/564x/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.jpg",
        alt: "User avatar"
    }))`
        position: fixed;
        right: 20px;
        width: 30px;
        object-fit: contain;
    `;

    
    return (
        <Container>
            <Logo />
            <Avatar />
        </Container>
    )
}

export default Nav
