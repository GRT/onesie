import React from 'react';
import {StyleRoot} from 'radium';

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
      '@media screen and (min-width:320px) and (max-width:479px)': { height:'200px' },
      '@media screen and (min-width:480px) and (max-width:599px)': { height:'200px' },
      '@media screen and (min-width:600px) and (max-width:800px)': { height:'200px' },
      '@media screen and (min-width:801px) and (max-width:1024px)': { height:'40px' },
      '@media screen and (min-width:1025px) and (max-width:1280px)': { height:'40px' },
      '@media screen and (min-width:1281px)': { height:'40px' },
      fontSize: '20px',
      color: '#111',
      width: '100%',
      maxWidth: '100%',
      textOverflow: 'ellipsis',
      border: '1px solid white',
      borderRadius: '3px',
      boxShadow: '0 4px 4px rgba(0, 0, 0, .48)'
    };

    return (
      <StyleRoot>
        <div style={{padding: '0px 10px 2px 10px'}}>
          <select style={[selectStyles]}
                  defaultValue={'none'}
                  value={this.state.selected}
                  onChange={this.handleChange.bind(this)}>
            {this.selectorLabel()}
            {options}
          </select>
        </div>
      </StyleRoot>
    );
  }
}

SelectComponent.propTypes = {
  options: React.PropTypes.array.isRequired,
  onChange: React.PropTypes.func.isRequired
};

export default SelectComponent;
