/* eslint react/prop-types: 0 */

import React from "react";

class Detail extends React.Component {
  componentDidMount() {
    console.log(this.props);
    const { location, history } = this.props;
    if (location.state === undefined) {
      history.push("/");
    }
  }
  render() {
    console.log(this.props);
    const { location } = this.props;
    if (location.state) {
      return <h1>{location.state.title}</h1>;
    } else {
      return null;
    }
  }
}

export default Detail;
