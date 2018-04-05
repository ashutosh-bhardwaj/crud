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

class EditForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      model: '',
      price: 0,
      status: '',
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

    const phone = phones.filter(phone => phone.id === id * 1).pop();

    this.setState({ model: phone.model, status: phone.status, price: phone.price, id: phone.id });

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
    const { model, status, price, id } = this.state;
    const payload = {
      model,
      status,
      price
    };
    const { history, updatePhone } = this.props;
    updatePhone(id, payload);
    history.push(endPoints.default);

  }

  render() {
    console.log(this.state);
    const { model, price, status } = this.state;
    return (
      <Paper zDepth={2} style={{ padding: "20px" }}>
        <SelectField
          floatingLabelText="Models"
          value={model}
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
          defaultSelected={status}
        >
          <RadioButton
            value="new"
            label="New"
            style={styles.radioButton}
          />
          <RadioButton value="old" label="Old" style={styles.radioButton} />
        </RadioButtonGroup>
        <TextField
          floatingLabelText="price"
          hintText="$"
          value={price}
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

const EditFormWithRouter = withRouter(EditForm);

const mapStateToProps = (state) => ({
  phones: state.phones
})

const mapDispatchToProps = (dispatch) => ({
  updatePhone: (id, payload) => dispatch(updatePhone(id, payload))
})

export default connect(mapStateToProps, mapDispatchToProps)(EditFormWithRouter);

const styles = {
  radioButton: {
    marginBottom: 16
  }
};
