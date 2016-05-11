import React from 'react';
import DropDown from 'react-drop-down';
import orgs from './requests/get-orgs';

class DropDownComponent extends React.Component {

  constructor(props) {
    super(props)
    this.state = { value: this.props.organizations[0] }
  }

  handleChange (e) {
    this.setState({value: e})
    console.log(e)
  }

  render() {
    return (
      <div>
        <p>Select your organization</p>
        <DropDown
              value={this.state.value}
              onChange={this.handleChange.bind(this)}
              options={this.props.organizations} />
      </div>)
  }
}

DropDownComponent.propTypes = {
  organizations: React.PropTypes.array.isRequired,
}

export default DropDownComponent;
