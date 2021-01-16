import styled from "styled-components/macro";

export const Container = styled.section`
  margin-left: 20px;
`;

export const Title = styled.h2``;

export const Posters = styled.div`
  display: flex;
  overflow-y: hidden;
  overflow-x: scroll;
  padding: 20px;
  -ms-overflow-style: none;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const Poster = styled.img`
  width: 100%;
  height: auto;
  object-fit: contain;
  max-height: ${(props) => (props.isLargerRow ? "250px" : "100px")};
  transition: transform 0.45s;
  margin-right: 10px;
  cursor: pointer;

  &:hover {
    opacity: 1;
    transform: ${(props) =>
      props.isLargerRow ? "scale(1.09)" : "scale(1.08)"};
  }
`;
