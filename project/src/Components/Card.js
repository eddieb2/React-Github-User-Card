import React from "react";
import styled from "styled-components";

const CardWrapper = styled.div`
  border: 10px ridge paleturquoise;
  border-radius: 10px;
  margin: 2%;
  padding: 2%;
  img {
    width: 10%;
  }
`;

const Card = props => {
  return (
    <CardWrapper>
      <img src={props.userData.avatar_url} alt="" />
      <h1>{props.userData.name}</h1>
      <h4>{props.userData.bio}</h4>
      <h4>{props.userData.location}</h4>
      <h4>Followers: {props.userData.followers}</h4>
    </CardWrapper>
  );
};

export default Card;
