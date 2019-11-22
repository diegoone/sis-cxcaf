import React from "react";
import "../../assets/css/paper-dashboard.css";
import {
    Card,
    CardHeader,
    CardBody,
    CardTitle,
    Table,
    Row,
    Col
} from "reactstrap";

function ListaEmpleado({mostrar, opc}) {
    return (
        <>
            <Card className="card-user">
                <CardHeader>
                    <Row>
                        <Col md="1">
                            <div className="icon-big text-center icon-success mt-3">
                                <i className="nc-icon nc-minimal-left puntero" onClick={()=>{
                                    mostrar(opc);
                                }}/>
                            </div>
                        </Col>
                        <Col>
                            <CardTitle tag="h5">Listado de Empleados</CardTitle>
                        </Col>
                    </Row>
                </CardHeader>
                <CardBody>
                    <Row>
                        <Col md="12">
                            <Card>
                                <CardBody>
                                    <Table responsive>
                                        <thead className="text-primary">
                                            <tr>
                                                <th>Nombre</th>
                                                <th>DUI</th>
                                                <th>NIT</th>
                                                <th>Fecha de Nacimiento</th>
                                                <th>Cargo</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>Diego Antonio Palacios Menjivar</td>
                                                <td>12345678-1</td>
                                                <td>1234-123456-123-1</td>
                                                <td>07/10/1996</td>
                                                <td>Vendedor</td>
                                            </tr>
                                            <tr>
                                                <td>Kevin Eduardo Portillo Durán</td>
                                                <td>12345678-1</td>
                                                <td>1234-123456-123-1</td>
                                                <td>07/10/1996</td>
                                                <td>Vendedor</td>
                                            </tr>
                                        </tbody>
                                    </Table>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </CardBody>
            </Card>
        </>
    );
}

export default ListaEmpleado;