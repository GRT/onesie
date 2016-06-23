import React from 'react';

/**
  Custom select input for the dropdown, similar to the implementation here:
  http://jsfiddle.net/davidwaterston/7a3xxLtw/
*/
class SelectComponent extends React.Component {

  componentWillMount () { this.setState({});}

  handleChange(e) {
    var value = e.target.value;
    this.props.onChange(value);
    this.setState({selected: value});
  }

  render () {
    var options = this.props.options.map(
      function(option) {
        return (
          <option key={option} value={option}>
                  {option}
          </option>
        );
      }
    );
    var divStyles = {
      padding: '0px 10px 2px 10px'
    };
    var selectStyles = {
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
    var paragraphStyles = {
      fontFamily: 'Helvetica Neue',
      fontSize: '18px',
      fontWeight: 'bold',
      color: '#111',
      paddingLeft: '5px'
    };
    return (
      <div style={divStyles}>
        <p style={paragraphStyles}>Select your organization</p>
        <select style={selectStyles} onChange={this.handleChange.bind(this)}>
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
