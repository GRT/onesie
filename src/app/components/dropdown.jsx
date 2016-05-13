import React from 'react';
import DropDown from 'react-drop-down';

class DropDownComponent extends React.Component {

  componentWillMount() {
    this.setState({items: [],value: ''});
  }

  componentDidMount () {
    let dataFunc = this.props.ajaxFunc;
    let params = this.props.ajaxParams;
    dataFunc(this.error, params, (res) => {
      this.setState({items: res,value: res[0]});
    });
  }

  handleChange (e) {
    this.setState({value: e});
  }

  error (e) {
    console.log('Error' + e );
  }

  render () {
    return (
      <div>
        <p>Select your organization</p>
        <DropDown
              value={this.state.value}
              onChange={this.handleChange.bind(this)}
              options={this.state.items} />
      </div>);
  }
}

DropDownComponent.propTypes = {
  ajaxFunc: React.PropTypes.func.isRequired,
  ajaxParams: React.PropTypes.object.isRequired
};

export default DropDownComponent;
