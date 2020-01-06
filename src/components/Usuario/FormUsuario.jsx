import React from "react";
import "../../assets/css/paper-dashboard.css";
import {
    FormGroup,
    Input,
    Row,
    Col,
    CustomInput
} from "reactstrap";


function ElementsUsuario(props) {
    const { mostrar, opc } = props;
    return (
        <>
            <Row>
                <Col className="pr-1" md="4">
                    <label>Nombre de usuario</label>
                    <FormGroup>
                        <Input type="text" placeholder="username" name="username" />
                    </FormGroup>
                </Col>
                <Col className="pr-1" md="4">
                    <label>Contraseña</label>
                    <FormGroup>
                        <Input type="password" placeholder="********" name="password" />
                    </FormGroup>
                </Col>
                <Col className="pr-1" md="4">
                    <label>Reescribir contraseña</label>
                    <FormGroup>
                        <Input type="password" placeholder="********" name="repassword" />
                    </FormGroup>
                </Col>
            </Row>
        </>
    );
}
export { ElementsUsuario };