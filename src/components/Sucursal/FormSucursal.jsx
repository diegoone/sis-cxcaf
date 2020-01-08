import React, {useState} from "react";
import "../../assets/css/paper-dashboard.css";
import {
    FormGroup,
    CustomInput,
    Input,
    Row,
    Col,
    Form,
    Label, Modal,
    ModalHeader,
    ModalBody, ModalFooter,
    Button,
} from "reactstrap";


class FormSucursal extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const ModalSucursal = (props) => {
            const {
                buttonLabel,
                className
            } = props;
            const [modal, setModal] = useState(false);
            const toggle = () => setModal(!modal);
            return (
                <>
                    <Button color="danger" onClick={toggle}>Crear<i className='fas fa-plus'></i></Button>
                    <Modal isOpen={modal} toggle={toggle} className={className}>
                        <ModalHeader toggle={toggle}>Modal title</ModalHeader>
                        <ModalBody>
                            <Form onSubmit={this.handleSubmit}>
                                <ElementsSucursal />
                            </Form>
                        </ModalBody>
                        <ModalFooter>
                            <Button color="primary" onClick={toggle}>Guardar</Button>{' '}
                            <Button color="secondary" onClick={toggle}>Cancelar</Button>
                        </ModalFooter>
                    </Modal>
                </>
            );
        }

        return (
            <ModalSucursal buttonLabel="abrir" />
        );
    }
}
function ElementsSucursal(props) {
    return (
        <>
            <FormGroup>
                <label>Nueva sucursal </label>
                <Input defaultValue="" name="sucursal.nombre" type="text" placeholder="Aaaa" />
            </FormGroup>
            <FormGroup>
                <label>Código </label>
                <Input defaultValue="" name="sucursal.codigo" type="text" placeholder="Aaaa" />
            </FormGroup>
        </>
    );
}
const SelectSucursal = (props) => {
    return (
        <>
            <label>Sucursal</label>
            <CustomInput type="select" name="idSucursal">
                <option value=""> Seleccione </option>
                {props.listIdSucursal.map(item =>
                    <option value={item.id}>{item.nombre}</option>
                )
                }
            </CustomInput>
        </>
    );
}
export { FormSucursal, SelectSucursal };