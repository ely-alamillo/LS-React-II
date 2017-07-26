/* eslint react/no-multi-comp: 0, react/prop-types: 0 */

import React from 'react';
import { Table, Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import './Pop-Up.css';

class ModalExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }
/*
Block User
Report
Copy Profile URL
Share this Profile
Send Message
Cancel
*/
  render() {
    return (
      <div>
        <Button className="pull-right modal-button" onClick={this.toggle}>...</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalBody>
            <Table>
              <tbody>
                <tr>
                    <Button className="popup-button block-user">Block User </Button>
                </tr>

                <tr>
                  
                  <Button className="popup-button"> Report</Button>
                </tr>

                <tr>
                  
                  <Button className="popup-button">Copy Profile URL </Button>
                </tr>

                <tr>
                
                  <Button className="popup-button"> Share This Profile </Button>
                </tr>

                <tr>
                
                  <Button className="popup-button">Send Message </Button>
                </tr>
 
                <tr>
                
                  <Button className="popup-button" onClick={this.toggle}>Cancel </Button>
                </tr>
              </tbody>
      </Table>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

export default ModalExample;