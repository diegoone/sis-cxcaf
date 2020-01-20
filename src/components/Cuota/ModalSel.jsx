import React, { useState } from 'react';
import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Table
} from 'reactstrap';

class ModalSel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: []
        };
    }

    componentDidMount() {
        fetch("http://localhost:4000/api/cliente")
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        items: result
                    });
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }

    someChangeState = (nombres, apellidos, dui, id) => {
        this.props.changeState(nombres, apellidos, dui, id);
    }

    render() {
        return <ModalInfo buttonLabel={this.props.buttonLabel} className={this.props.className} items={this.state.items} sendChange={this.someChangeState}/>
    }
}

const ModalInfo = ({ buttonLabel, className, items, sendChange }) => {
    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);

    return (
        <div>
            <Button color="danger" onClick={toggle}>{buttonLabel}</Button>
            <Modal isOpen={modal} toggle={toggle} className={className} size="xl">
                <ModalHeader toggle={toggle}>Modal title</ModalHeader>
                <ModalBody>
                    <Table hover>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Nombres</th>
                                <th>Apellidos</th>
                                <th>DUI</th>
                            </tr>
                        </thead>
                        <tbody>
                            {items.map((cliente, indice) => (
                                <tr key={cliente.id}>
                                    <td scope="row">{indice+1}</td>
                                    <td>{cliente.persona.nombres}</td>
                                    <td>{cliente.persona.apellidos}</td>
                                    <td>{cliente.persona.dui}</td>
                                    <td>
                                        <Button color="primary" onClick={() => {
                                            sendChange(cliente.persona.nombres, cliente.persona.apellidos, cliente.persona.dui, cliente.id);
                                            toggle();
                                        }}>Seleccionar</Button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </ModalBody>
                <ModalFooter>
                    <Button color="secondary" onClick={toggle}>Cancel</Button>
                </ModalFooter>
            </Modal>
        </div>
    );
}

export default ModalSel;