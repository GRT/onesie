import React from 'react';
import DropDown from 'react-drop-down';

class DropDownComponent extends React.Component {

  componentWillMount () { this.setState({});}

  handleChange (selected) {
    console.log("dropdown selected: " + selected);
    this.setState({value: selected });
    this.props.onChange(selected);
  }

  render () {
    const dropStyles = {paddingBottom: 30};
    return (
      <div style={dropStyles}>
        <p>Select your organization</p>
        <DropDown
              value={ this.state.value || '' }
              onChange={ this.handleChange.bind(this) }
              options={ this.props.items } />
      </div>);
  }
}

DropDownComponent.propTypes = {
  items: React.PropTypes.array.isRequired,
  onChange: React.PropTypes.func.isRequired
};

export default DropDownComponent;
