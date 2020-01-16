import React from "react";
import "../../assets/css/paper-dashboard.css";
import ModalEmpleado from "./ModalEmpleado";
import {
    Card,
    CardHeader,
    CardBody,
    CardTitle,
    Table,
    Row,
    Col
} from "reactstrap";

class ListaEmpleado extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: []
        };
    }
    componentDidMount() {
        fetch("http://localhost:4000/api/empleado")
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
    render() {
        const { error, isLoaded, items } = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            console.log(items);
            return (
                <>
                    <Card className="card-user">
                        <CardHeader>
                            <Row>
                                <Col md="1">
                                    <div className="icon-big text-center icon-success mt-3">
                                        <i className="nc-icon nc-minimal-left puntero" onClick={() => {
                                            this.props.mostrar(this.props.opc);
                                        }} />
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
                                                        <th>Detalles</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {items.map(empleado => (
                                                        <tr key={empleado.id}>
                                                            <td>{`${empleado.persona.nombres} ${empleado.persona.apellidos}`}</td>
                                                            <td>{empleado.persona.dui}</td>
                                                            <td>{empleado.persona.nit}</td>
                                                            <td>{empleado.persona.fechaN}</td>
                                                            <td>{empleado.cargo}</td>
                                                            <td>
                                                                <ModalEmpleado buttonLabel="Ver Más" empleado={empleado} ></ModalEmpleado>
                                                            </td>
                                                        </tr>
                                                    ))}
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

    }
}

export default ListaEmpleado;