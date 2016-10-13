import React from 'react';
import ReactDOM from 'react-dom';

import Button from 'react-bootstrap/lib/Button';
import Col from 'react-bootstrap/lib/Col';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';
import Form from 'react-bootstrap/lib/Form';
import FormControl from 'react-bootstrap/lib/FormControl';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import Glyphicon from 'react-bootstrap/lib/Glyphicon';
import PageHeader from 'react-bootstrap/lib/PageHeader';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../actions/actionCreators';

const formStyle = {
  paddingLeft: '90px',
  paddingRight: '90px'
}


class ConfigView extends React.Component {

  constructor(props) {
    super(props);
    this.saveData = this.saveData.bind(this);
  }

  saveData(input) {
    this.props.setConfig(ReactDOM.findDOMNode(formOneOpsHost).value, ReactDOM.findDOMNode(formAPIToken).value);
  }


  render() {
    return(
      <div >
        <PageHeader style={{borderBottom: '1px solid #ddd', textAlign: 'center'}}>Settings</PageHeader> <br/>
        <Form horizontal style={formStyle}>
          <FormGroup controlId="formOneOpsHost">
            <Col sm={2}>
              OneOps Host:
            </Col>
            <Col sm={8}>
              <FormControl ref="host" type="text" placeholder="OneOps Host" defaultValue={this.props.config.host} />
            </Col>
          </FormGroup>
<br/>
          <FormGroup controlId="formAPIToken">
            <Col sm={2}>
              API Token:
            </Col>
            <Col sm={8}>
              <FormControl ref="token" type="text" placeholder="API Token" defaultValue={this.props.config.token} />
            </Col>
          </FormGroup>
<br/>
          <FormGroup>
            <Col smOffset={2} sm={10}>
              <Button onClick={this.saveData}>
                Save
              </Button>
            </Col>
          </FormGroup>
        </Form>
      </div>
    );
  }

}

function mapStateToProps(state){
  return {
    config: state.organizations.config
  };
 }

 function mapDispatchToProps(dispatch) {
   return bindActionCreators(actionCreators, dispatch);
 }

 export default connect(mapStateToProps , mapDispatchToProps)(ConfigView);
