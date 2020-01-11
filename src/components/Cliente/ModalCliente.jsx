import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class ModalCliente extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const ModalC = (props) => {
            const {
              buttonLabel,
              className
            } = props;
          
            const [modal, setModal] = useState(false);
          
            const toggle = () => setModal(!modal);
          
            return (
              <div>
                <Button color="danger" onClick={toggle}>{buttonLabel}</Button>
                <Modal isOpen={modal} toggle={toggle} className={className}>
                  <ModalHeader toggle={toggle}>Modal title</ModalHeader>
                  <ModalBody>

                  </ModalBody>
                  <ModalFooter>
                    <Button color="primary" onClick={toggle}>Guardar Cambios</Button>{' '}
                    <Button color="secondary" onClick={toggle}>Cancelar</Button>
                  </ModalFooter>
                </Modal>
              </div>
            );
          }
          return (<ModalC />);
    }
}

export default ModalCliente;