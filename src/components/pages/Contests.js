// import React from "react";

// export default function Contests() {
//   return (
//     <div>
//       <h1>Contests Page</h1>
// <p>
//   Love to eat? well so do we, here you will find a list of upcoming eating
//   contest. If you want to participate or just enjoy the show you have come
//   to the right place. Hope your enjoy our website. We are not responsible
//   for any weight gain, enter at your own risk.
// </p>
//     </div>
//   );
// }

import React, { Component } from "react";
import PropTypes from "prop-types";

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
      <div className="Contest">
        <p>
          Love to eat? well so do we, here you will find a list of upcoming
          eating contest. If you want to participate or just enjoy the show you
          have come to the right place. Hope your enjoy our website. We are not
          responsible for any weight gain, enter at your own risk.
        </p>
        <div className="contest-description">{this.state.description}</div>
        <div className="link home-link" onClick={this.state.contestListClick}>
          Contest List
        </div>
      </div>
    );
  }
}

Contests.propTypes = {
  description: PropTypes.string.isRequired,
  contestListClick: PropTypes.func.isRequired,
};

export default Contests;
