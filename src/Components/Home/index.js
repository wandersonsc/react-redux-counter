import React, { Component } from "react";
import { connect } from "react-redux";
import { addValue, subtractValue } from "../../Actions/actions";

import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

export class Home extends Component {
  render() {
    return (
      <div>
        <h1 data-test-id="homeComponent">React & Redux Counter</h1>
        <Card>
          <CardContent>
            <Typography data-test-id="testValue" variant="h5" component="h2">
              {this.props.value}
            </Typography>
          </CardContent>
          <CardActions>
            <Button
              variant="contained"
              color={this.props.color_status === true ? "secondary" : null}
              onClick={this.props.addValue}
            >
              +
            </Button>
            <Button
              variant="contained"
              color={this.props.color_status === true ? "secondary" : null}
              onClick={this.props.subtractValue}
            >
              -
            </Button>{" "}
          </CardActions>
        </Card>
      </div>
    );
  }
}

// const mapStateToProps = state => {
//   const {
//     counter: { value, color_status }
//   } = state;
//   console.log("state: ", state);
//   return {
//     value,
//     color_status
//   };
// };

export default connect(
  ({ counter: { value, color_status } }) => ({ value, color_status }),
  { addValue, subtractValue }
)(Home);
