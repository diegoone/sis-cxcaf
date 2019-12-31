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


function ElementsTipoActivo({mostrar, opc}) {
    return (
        <>
            <Row>
                <Col className="pr-1" md="4">
                    <label>Tipo activo</label>
                    <FormGroup>
                        <CustomInput type="select" name="idTipoActivo">
                            <option value=""> Seleccione </option>
                        </CustomInput>
                    </FormGroup>
                </Col>
                <Col className="pr-1" md="4">
                    <FormGroup>
                        <label>Nueva tipo activo </label>
                        <Input defaultValue="" name="tipoActivo.nombre" type="text" placeholder="Aaaa" />
                    </FormGroup>
                </Col>
                <Col className="pr-1" md="4">
                    <FormGroup>
                        <label>Código </label>
                        <Input defaultValue="" name="tipoActivo.codigo" type="text" placeholder="Aaaa" />
                    </FormGroup>
                </Col>
            </Row>
        </>
    );
}
export { ElementsTipoActivo };