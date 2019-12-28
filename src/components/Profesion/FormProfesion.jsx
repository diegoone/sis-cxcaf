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


function FormProfesion({mostrar, opc}) {
    return (
        <>
            <Row>
                <Col className="pr-1" md="4">
                    <label>Profeciòn u oficio</label>
                    <FormGroup>
                        <CustomInput type="select" name="idProfesion">
                            <option value=""> Seleccione </option>
                        </CustomInput>
                    </FormGroup>
                </Col>
                <Col className="pr-1" md="4">
                    <FormGroup>
                        <label>Nueva profesión </label>
                        <Input defaultValue="" name="profesion.nombre" type="text" placeholder="Aaaa" />
                    </FormGroup>
                </Col>
            </Row>
        </>
    );
}
export default FormProfesion;