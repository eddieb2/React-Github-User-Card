import React from "react";
import styled from "styled-components";

const CardWrapper = styled.div`
  border: 10px ridge paleturquoise;
  border-radius: 10px;
  margin: 2%;
  padding: 2%;
  display: grid;
  justify-items: center;
  img {
    width: 10%;
  }
`;

const Card = props => {
  return (
    <CardWrapper>
      <img src={props.userData.avatar_url} alt="" />
      <p>{props.userData.name}</p>
      <p>{props.userData.bio}</p>
      <p>{props.userData.location}</p>
      <p>Followers: {props.userData.followers}</p>
    </CardWrapper>
  );
};

export default Card;
