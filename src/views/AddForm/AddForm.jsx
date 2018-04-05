import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Paper from "material-ui/Paper";
import TextField from "material-ui/TextField";
import SelectField from "material-ui/SelectField";
import MenuItem from "material-ui/MenuItem";
import { RadioButton, RadioButtonGroup } from "material-ui/RadioButton";
import RaisedButton from "material-ui/RaisedButton";

import { addPhone } from '../../redux/actions';
import { endPoints } from '../../config/routes';

class AddForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      model: "Iphone x",
      status: "old",
      price: '',
      action: 'ADD'
    };

    this.handleModelChange = this.handleModelChange.bind(this);
    this.handleStatusChange = this.handleStatusChange.bind(this);
    this.handlePriceChange = this.handlePriceChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  handleModelChange(event, index, value) {
    this.setState({ model: value });
  }

  handleStatusChange(event, value) {
    this.setState({ status: value });
  }

  handlePriceChange(event, value) {
    this.setState({ price: value });
  }

  handleSubmit() {
    const { model, status, price } = this.state;
    const payload = {
      model,
      status,
      price
    };
    const { history, addPhone } = this.props;
    addPhone(payload);
    history.push(endPoints.default);

  }

  render() {
    return (
      <Paper zDepth={2} style={{ padding: "20px" }}>
        <SelectField
          floatingLabelText="Models"
          value={this.state.model}
          onChange={this.handleModelChange}
        >
          <MenuItem value="Iphone 7" primaryText="Iphone 7" />
          <MenuItem value="Iphone 7s" primaryText="Iphone 7s" />
          <MenuItem value="Iphone 8" primaryText="Iphone 8" />
          <MenuItem value="Iphone 8s" primaryText="Iphone 8s" />
          <MenuItem value="Iphone x" primaryText="Iphone X" />
        </SelectField>
        <br />
        <br />
        <br />
        <RadioButtonGroup
          name="old-new"
          onChange={this.handleStatusChange}
          defaultSelected="old"
        >
          <RadioButton
            value="brand new"
            label="New"
            style={styles.radioButton}
          />
          <RadioButton value="old" label="Old" style={styles.radioButton} />
        </RadioButtonGroup>
        <TextField
          floatingLabelText="price"
          hintText="$"
          value={this.state.price}
          onChange={this.handlePriceChange}
        />
        <br />
        {this.state.action === "ADD" ? (
          <RaisedButton label="Add" primary onClick={this.handleSubmit} />
        ) : (
            <RaisedButton label="Save" primary onClick={this.handleSubmit} />
          )}
      </Paper>
    );
  }
}

const AddFormWithRouter = withRouter(AddForm);

export default connect(null, { addPhone })(AddFormWithRouter);

const styles = {
  radioButton: {
    marginBottom: 16
  }
};
