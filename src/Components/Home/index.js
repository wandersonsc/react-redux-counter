import React, { Component } from "react";
import { connect } from "react-redux";
import { addValue, subtractValue } from "../../Redux/Actions/actions";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";

export class Home extends Component {
  render() {
    return (
      <div className="content">
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
              color={this.props.isActive === true ? "secondary" : null}
              onClick={this.props.addValue}
            >
              <FontAwesomeIcon icon={faPlus} />
            </Button>
            <Button
              variant="contained"
              color={this.props.isActive === false ? "secondary" : null}
              onClick={this.props.subtractValue}
            >
              <FontAwesomeIcon icon={faMinus} />
            </Button>{" "}
          </CardActions>
        </Card>
      </div>
    );
  }
}

// const mapStateToProps = state => {
//   const {
//     counter: { value, isActive }
//   } = state;
//   console.log("state: ", state);
//   return {
//     value,
//     isActive
//   };
// };

export default connect(
  ({ counter: { value, isActive } }) => ({ value, isActive }),
  { addValue, subtractValue }
)(Home);
