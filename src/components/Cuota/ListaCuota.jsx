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

class ListaCuota extends React.Component {
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
                                    <CardTitle tag="h5">Listado de Coutas</CardTitle>
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

export { ListaCuota };