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


function FormSucursal({mostrar, opc}) {
    return (
        <>
            <Row>
                <Col className="pr-1" md="4">
                    <label>Sucursal</label>
                    <FormGroup>
                        <CustomInput type="select" name="idSucursal">
                            <option value=""> Seleccione </option>
                        </CustomInput>
                    </FormGroup>
                </Col>
                <Col className="pr-1" md="4">
                    <FormGroup>
                        <label>Nueva sucursal </label>
                        <Input defaultValue="" name="sucursal.nombre" type="text" placeholder="Aaaa" />
                    </FormGroup>
                </Col>
                <Col className="pr-1" md="4">
                    <FormGroup>
                        <label>Código </label>
                        <Input defaultValue="" name="sucursal.codigo" type="text" placeholder="Aaaa" />
                    </FormGroup>
                </Col>
            </Row>
        </>
    );
}
export default FormSucursal;