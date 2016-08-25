import React from 'react';
import Button from 'react-bootstrap/lib/Button';

const SettingStyles = {
    //height: 'auto',
    background: '#f0f0f5',
    //border: '1px solid white',
    //borderRadius: '3px',
    height: '50%',
    width: '50%'
};

class SettingsView extends React.Component {

    render() {
        return (
          <div style={{float:'right'}}>
            Hello
            <img src="src/static/gear.png" style={SettingStyles} />
          </div>
        );
    }
}

export default SettingsView;

class SettingsModal extends React.Component {
  render () {
    return (
      <div>
        <Modal>
          <Modal.Header>
            <Modal.Title>Settings</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            Hello
          </Modal.Body>
          <Modal.Footer>
            <Button>Close</Button>
            <Button bsStyle="primary">Save</Button>
          </Modal.Footer>
        </Modal>
      </div>
    )
  }
}
