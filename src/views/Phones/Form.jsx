import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import FormLabel from '@material-ui/core/FormLabel';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Select from '@material-ui/core/Select';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      model: this.props.model || "Iphone x",
      status: this.props.status || "old",
      price: this.props.price || '',
      action: this.props.action,
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
    const { id, handleOnClick } = this.props;
    const payload = {
      model,
      status,
      price,
    };
    handleOnClick(payload, id);
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    return (
      <Paper elevation={2} style={{ padding: "20px" }}>
        <FormControl>
          <InputLabel htmlFor="age-simple">Models</InputLabel>
          <Select
            autoWidth
            value={this.state.model}
            onChange={this.handleChange}
            inputProps={{
              name: 'model',
              id: 'model',
            }}
          >
            <MenuItem value="Iphone 7">Iphone 7</MenuItem>
            <MenuItem value="Iphone 7s">Iphone 7s</MenuItem>
            <MenuItem value="Iphone 8">Iphone 8</MenuItem>
            <MenuItem value="Iphone 8s">Iphone 8s</MenuItem>
            <MenuItem value="Iphone X">Iphone X</MenuItem>
          </Select>
        </FormControl>  
        <br />
        <br />
          <TextField
            required
            label="Price"
            type="text"
            placeholder="$"
            value={this.state.price}
            onChange={this.handleChange}
            inputProps={{
              name: 'price',
              id: 'price',
            }}
          />
        <br />
        <br />
        <FormControl component="fieldset" required >
          <FormLabel component="legend">Condition</FormLabel>
          <RadioGroup
            aria-label="condition"
            name="condition"
            value={this.state.status}
            onChange={this.handleStatusChange}
          >
            <FormControlLabel value="old" control={<Radio />} label="Old" />
            <FormControlLabel value="new" control={<Radio />} label="New" />
          </RadioGroup>
        </FormControl>
        <br />
        {this.state.action === "ADD" ? (
          <Button variant="raised" color="primary" onClick={this.handleSubmit}>ADD</Button>
        ) : (
          <Button  variant="raised" color="primary" onClick={this.handleSubmit}>SAVE</Button>
          )}
      </Paper>
    );
  }
}

export default Form;
