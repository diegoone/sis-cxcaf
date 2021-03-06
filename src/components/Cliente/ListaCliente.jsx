import React from "react";
import "../../assets/css/paper-dashboard.css";
import ModalCliente from "./ModalCliente";
import {
    Card,
    CardHeader,
    CardBody,
    CardTitle,
    Table,
    Row,
    Col
} from "reactstrap";

class ListaCliente extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: [],
            enums: {}
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
            fetch("http://localhost:4000/api/cliente/enum")
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        enums: result
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
        const { error, isLoaded, items, enums } = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
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
                                    <CardTitle tag="h5">Listado de Clientes</CardTitle>
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
                                                        <th>Telèfono</th>
                                                        <th>Detalles</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                {items.map(cliente => (
                                                        <tr key={cliente.id}>
                                                            <td>{`${cliente.persona.nombres} ${cliente.persona.apellidos}`}</td>
                                                            <td>{cliente.persona.dui}</td>
                                                            <td>{cliente.persona.nit}</td>
                                                            <td>{cliente.persona.fechaN}</td>
                                                            <td>{cliente.persona.telefono}</td>
                                                            <td>
                                                                <ModalCliente buttonLabel="Ver Más" cliente={cliente} enums={enums}></ModalCliente>
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

export default ListaCliente;