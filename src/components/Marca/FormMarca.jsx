import React from "react";
import "../../assets/css/paper-dashboard.css";
import {
    FormGroup,
    CustomInput,
    Input,
    Row,
    Col,
    Label,
} from "reactstrap";


function ElementsMarca({mostrar, opc}) {
    return (
        <>
            <Row>
                <Col className="pr-1" md="4">
                    <label>Marca</label>
                    <FormGroup>
                        <CustomInput type="select" name="idMarca">
                            <option value=""> Seleccione </option>
                        </CustomInput>
                    </FormGroup>
                </Col>
                <Col className="pr-1" md="4">
                    <FormGroup>
                        <label>Nueva marca </label>
                        <Input defaultValue="" name="marca.nombre" type="text" placeholder="Aaaa" />
                    </FormGroup>
                </Col>
            </Row>
        </>
    );
}
export {ElementsMarca};