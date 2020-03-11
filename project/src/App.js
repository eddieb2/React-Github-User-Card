import React, { Component } from "react";
import axios from "axios";
import Card from "./Components/UserCard";
import FollowersCard from "./Components/FollowersCard";
import styled from "styled-components";

// STYLES HERE //
const FollowersWrapper = styled.section`
  display: grid;
  margin: 0% 2%;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto;
  grid-column-gap: 2%;
  grid-row-gap: 2%;
`;

class App extends Component {
  constructor() {
    super();
    this.state = {
      userData: [],
      followersData: []
    };
  }

  componentDidMount() {
    const requestOne = axios.get(
      "https://api.github.com/users/eddieb2"
    );
    const requestTwo = axios.get(
      "https://api.github.com/users/eddieb2/followers"
    );

    axios
      .all([requestOne, requestTwo])
      .then(
        axios.spread((...responses) => {
          const responseOne = responses[0];
          const responseTwo = responses[1];
          // console.log("res1", responseOne.data);
          // console.log("res2", responseTwo.data);
          this.setState({
            userData: responseOne.data,
            followersData: responseTwo.data
          });
          console.log("followers", this.state.followersData);
          console.log("user", this.state);
        })
      )
      .catch(errors => {
        console.log(errors);
      });
  }

  render() {
    return (
      <div>
        <Card userData={this.state.userData} />
        <FollowersWrapper>
          {/* <h1>My Followers</h1> */}
          {this.state.followersData.map(item => (
            <FollowersCard
              login={item.login}
              avatar_url={item.avatar_url}
              html_url={item.html_url}
            />
          ))}
        </FollowersWrapper>
      </div>
    );
  }
}

export default App;
