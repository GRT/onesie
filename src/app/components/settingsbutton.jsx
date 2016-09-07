import React from 'react';
import ClusterToggleView from 'onesie-toggle-environment-block';
import Button from 'react-bootstrap/lib/Button';
import Col from 'react-bootstrap/lib/Col';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';
import Form from 'react-bootstrap/lib/Form';
import FormControl from 'react-bootstrap/lib/FormControl';
import FormGroup from 'react-bootstrap/lib/FormGroup';


const settingsStyles = {
  verticalAlign: 'middle',
  backgroundColor: '#f0f0f5',
  height: '25',
  width: '25'
}

const thumbStyle = {
  //margin: '.5em',
  //padding: '.5em',
  //width: '10em',
  //display: 'flex',
  //flexDirection: 'column',
  //border: '1px solid white',
  //borderRadius: '3px',
  //boxShadow: '0 2px 2px rgba(0, 0, 0, .48)',
  //overflow:'hidden',
  minHeight: '3em',
  width: '5em',
  backgroundImage: 'url( src/static/gear.png )',
  backgroundRepeat: 'no-repeat',
  backgroundColor: '#f0f0f5'
};

const thumb = <div></div>;
const formInstance = (
  <div>
    <Form horizontal>
      <FormGroup controlId="formHorizontalEmail">
        <Col componentClass={ControlLabel} sm={2}>
          Email
        </Col>
        <Col sm={10}>
          <FormControl type="email" placeholder="Email" />
        </Col>
      </FormGroup>

      <FormGroup controlId="formHorizontalPassword">
        <Col componentClass={ControlLabel} sm={2}>
          Password
        </Col>
        <Col sm={10}>
          <FormControl type="password" placeholder="Password" />
        </Col>
      </FormGroup>

      <FormGroup>
        <Col smOffset={2} sm={10}>
          <Button type="submit">
            Sign in
          </Button>
        </Col>
      </FormGroup>
    </Form>
  </div>
) ;

class SettingsButton extends React.Component {

  render() {
      return (
        <div style={{float:'right'}}>


            <ClusterToggleView
              thumbViewStyle={thumbStyle}
              thumbElement={thumb}
              detailElement={formInstance} />


        </div>
      );
  }
}

export default SettingsButton;
