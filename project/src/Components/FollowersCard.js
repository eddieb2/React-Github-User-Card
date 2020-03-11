import React from "react";
import styled from "styled-components";

const CardWrapper = styled.div`
  border: 10px ridge paleturquoise;
  border-radius: 10px;
  display: grid;
  justify-items: center;
  img {
    width: 25%;
  }
`;

const FollowersCard = props => {
  return (
    <CardWrapper>
      <img src={props.avatar_url} alt="" />
      <p>{props.login}</p>
      <p>{props.html_url}</p>
    </CardWrapper>
  );
};

export default FollowersCard;
