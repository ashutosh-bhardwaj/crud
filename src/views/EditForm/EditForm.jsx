import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Paper from "material-ui/Paper";
import TextField from "material-ui/TextField";
import SelectField from "material-ui/SelectField";
import MenuItem from "material-ui/MenuItem";
import { RadioButton, RadioButtonGroup } from "material-ui/RadioButton";
import RaisedButton from "material-ui/RaisedButton";

import { updatePhone } from '../../redux/actions';
import { endPoints } from '../../config/routes';

class AddForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      model: "Iphone x",
      status: "old",
      price: 0,
      action: '',
      id: 0
    };

    this.handleModelChange = this.handleModelChange.bind(this);
    this.handleStatusChange = this.handleStatusChange.bind(this);
    this.handlePriceChange = this.handlePriceChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  componentDidMount() {
    const { match, phones } = this.props;
    const id = match.params.id;

    const phone = phones.filter(phone => phone.id !== id).pop();

    this.setState({ model: phone.model, status: phone.status, price: phone.price, id: id });

  }

  handleModelChange(event, value) {
    this.setState({ model: value });
  }

  handleStatusChange(event, value) {
    this.setState({ status: value });
  }

  handlePriceChange(event, value) {
    this.setState({ price: value });
  }

  handleSubmit() {
    const { model, status, price, id } = this.state;
    const payload = {
      model,
      status,
      price
    };
    const { history, updatePhone } = this.props;
    updatePhone(id, payload);
    history.push(endPoints.add);

  }

  render() {
    return (
      <Paper zDepth={2} style={{ padding: "20px" }}>
        <SelectField
          floatingLabelText="Models"
          value={this.state.model}
          onChange={this.handleChange}
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
          onChange={this.handleRadioChange}
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

const mapStateToProps = (state) => ({
  phones: state.phones
})

const mapDispatchToProps = (dispatch) => ({
  updatePhone: dispatch(updatePhone)
})

export default connect(mapStateToProps, mapDispatchToProps)(AddFormWithRouter);

const styles = {
  radioButton: {
    marginBottom: 16
  }
};
