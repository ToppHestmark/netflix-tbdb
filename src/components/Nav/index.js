import React, { useEffect, useState } from 'react';
import { Container, Logo, Avatar } from './styles/nav';

export default function Nav() {
    const [show, handleShow] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
          if (window.scrollY > 100) {
            handleShow(true);
          } 
          else handleShow(false);
        });
      }, []);
    
    return (
        <Container show={show}>
            <Logo />
            <Avatar />
        </Container>
    )
};