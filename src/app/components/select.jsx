import React from 'react';

/**
  Custom select input for the dropdown, similar to the implementation here:
  http://jsfiddle.net/davidwaterston/7a3xxLtw/
*/
class SelectComponent extends React.Component {

  componentWillMount () { this.setState({});}

  handleChange(e) {
    const value = e.target.value;
    this.props.onChange(value);
    this.setState({selected: value, choice: true});
  }

  selectorLabel () {
    return this.state.choice ? undefined : <option value="none">Select Organization</option>;
  }

  render () {
    const options = this.props.options.map(
      option => <option key={option} value={option}>{option}</option>
    );

    const selectStyles = {
      fontFamily: 'Helvetica Neue',
      fontSize: '20px',
      color: '#111',
      width: '100%',
      maxWidth: '100%',
      height: '40px',
      textOverflow: 'ellipsis',
      border: '1px solid gray',
      boxShadow: '0 2px 4px rgba(0, 0, 0, .48)'
    };

    return (
      <div style={{padding: '0px 10px 2px 10px'}}>
        <select style={selectStyles}
                defaultValue={'none'}
                value={this.state.selected}
                onChange={this.handleChange.bind(this)}>
          {this.selectorLabel()}
          {options}
        </select>
      </div>
    );
  }
}

SelectComponent.propTypes = {
  options: React.PropTypes.array.isRequired,
  onChange: React.PropTypes.func.isRequired
};

export default SelectComponent;
