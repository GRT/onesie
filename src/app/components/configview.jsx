import React from 'react';

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

  saveData() {
    alert('Hello');
  }


  render() {
    return(
      <div >
        <PageHeader style={{borderBottom: '1px solid #ddd', textAlign: 'center'}}>API Settings</PageHeader> <br/>
        <Form horizontal style={formStyle}>
          <FormGroup controlId="formHorizontalEmail">
            <Col sm={2}>
              OneOps Host:
            </Col>
            <Col sm={8}>
              <FormControl type="text" placeholder="OneOps Host" />
            </Col>
          </FormGroup>
<br/>
          <FormGroup controlId="formHorizontalPassword">
            <Col sm={2}>
              API Token:
            </Col>
            <Col sm={8}>
              <FormControl type="text" placeholder="API Token" />
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
    organization: state.organizations.config
  };
 }

 function mapDispatchToProps(dispatch) {
   return bindActionCreators(actionCreators, dispatch);
 }

 export default connect(mapStateToProps , mapDispatchToProps)(ConfigView);
