import React from "react";
import "../../assets/css/paper-dashboard.css";
import {
    Button, 
    Card, CardHeader, 
    CardBody, CardTitle, 
    FormGroup, Form, 
    CustomInput, Input, Row, Col, 
    Label
} from "reactstrap";

function ListaActivoFijo({mostrar, opc}) {
    return (
        <>
        <Card className="card-user">
            <CardHeader>
                <Row>
                    <Col md="1">
                        <div className="icon-big text-center icon-success mt-3">
                            <i className="nc-icon nc-minimal-left puntero" onClick={() => mostrar(opc)}></i>
                        </div>
                    </Col>
                    <Col md="11">
                        <CardTitle tag="h5" className="text-center">Lista de Activo Fijo</CardTitle>
                    </Col>
                </Row>
            </CardHeader>
            <CardBody>
                <Form>
                    
                </Form>
            </CardBody>
        </Card>
        </>
    );
}
export default ListaActivoFijo;