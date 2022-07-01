import React, { Component } from "react";
import PropTypes from "prop-types";
import Logo from "../../assets/get in my belly.gif";

class Contests extends Component {
  constructor(props) {
    super(props);
    this.state = {
      description: props.description,
      contestListClick: props.contestListClick,
    };
  }

  render() {
    return (
      <div className="Contests">
        <h1>Contests</h1>
        <div className="Logo">
          <img src={Logo} alt="Logo Image" style={{ width: "150px" }} />
        </div>
        <p>See a list of upcoming contests, let us know what you think.</p>
        <div className="contest-description">{this.state.description}</div>
        <div
          className="link home-link"
          onClick={this.state.contestListClick}
        ></div>
      </div>
    );
  }
}

Contests.propTypes = {
  description: PropTypes.string.isRequired,
  contestListClick: PropTypes.func.isRequired,
};

export default Contests;
