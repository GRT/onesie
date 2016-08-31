import React from 'react';
import Modal from 'react-bootstrap/lib/Modal';

const settingsStyles = {
  verticalAlign: 'middle',
  backgroundColor: '#f0f0f5',
  height: '25',
  width: '25'
}


class SettingsButton extends React.Component {
  getInitialState() {
    return { showModal: false };
  }

  close() {
    this.setState({ showModal: false });
  }

  open() {
    this.setState({ showModal: true });
  }

  save() {
    //save data here then close modal
    this.close
  }

  render() {
      return (
        <div style={{float:'right'}}>
          <img src="src/static/gear.png" style={settingsStyles} onClick={this.open}/>

            <Modal show={this.state.showModal} onHide={this.close}>
              <Modal.Header closeButton>
                <Modal.Title>Settings</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <label for="host">OneOps Host:</label>
                <input type="text" id="host"/>
                <label for="token">API Token:</label>
                <input type="text" id="token"/>
              </Modal.Body>
              <Modal.Footer>
                <Button onClick={this.close}>Close</Button>
                <Button bsStyle="primary" onClick={this.save}>Save</Button>
              </Modal.Footer>
            </Modal>
        </div>
      );
  }
}

export default SettingsButton;
