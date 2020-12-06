import styled from 'styled-components/macro';

export const Header = styled.header`
    object-fit: contain;
    height: 448px;
    background-image: url(${props => props.backdropPath});
    background-size: cover;
    background-position: center center;
`;

export const BannerContents = styled.div`
    margin-left: 30px;
    padding-top: 140px;
    height: 190px;
`;

export const Title = styled.h1`
    font-size: 3rem;
    font-weight: 800;
    padding-bottom: 0.3rem;
`;

export const Button = styled.button`
    cursor: pointer;  
    color: #fff;
    outline: none;
    border: none;
    font-weight: 700;
    border-radius: 0.2vw;
    padding: 0.5rem 2rem 0.5rem 2rem;
    margin: 0.5rem 1rem 0 0;
    background-color: rgba(51, 51, 51, 0.5);

    &:hover {
    color: #000;
    background-color: #e6e6e6;
    transition: all 0.2s;
    }
`;

export const Description = styled.h2`
    width: 45rem;
    max-width: 360px;
    height: 80px;
    line-height: 1.3;
    padding-top: 1rem;
    font-size: 0.8rem;
`;

export const FadeBottom = styled.div`
    height: 7.4rem;
    background-image: linear-gradient(
    180deg,
    transparent,
    rgba(37, 37, 37, 0.61),
    #111
  );
`;