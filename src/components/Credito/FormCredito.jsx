import React from "react";
import { ElementsCliente } from "components/Cliente/FormCliente";
import { ElementsFiador } from "components/Fiador/FormFiador";
import "../../assets/css/paper-dashboard.css";
import {
    Button,
    Card,
    CardHeader,
    CardBody,
    CardTitle,
    FormGroup,
    Form,
    CustomInput,
    Input,
    Row,
    Col,
    Label,
} from "reactstrap";
class FormCredito extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoaded: false,
            estado: [],
            tipoCredito: [],
        };
    }
    componentDidMount() {
        fetch("http://localhost:4000/api/credito/enum")
            .then(res => res.json())
            .then(
                (result) => {
                    console.log(result);
                    this.setState({
                        isLoaded: true,
                        estado: result.estado,
                        tipoCredito: result.tipocredito,
                    });
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            );//end fetch

    }
    render() {
        const { mostrar, opc } = this.state;
        return (
            <>

                <Card className="card-user">
                    <CardHeader>
                        <Row>
                            <Col md="1">
                                <div className="icon-big text-center icon-success mt-3">
                                    <i className="nc-icon nc-minimal-left puntero" onClick={() => {
                                        mostrar(opc);
                                    }} />
                                </div>
                            </Col>
                            <Col md="11">
                                <CardTitle tag="h5" className="text center" >Registro de Crédito</CardTitle>
                            </Col>
                        </Row>
                    </CardHeader>
                    <CardBody>
                        <Form>
                            <Row>
                                <Col className="pr-1" md="4">
                                    <label>Monto</label>
                                    <FormGroup>
                                        <Input type="text" name="monto" placeholder="##.##" />
                                    </FormGroup>
                                </Col>
                                <Col className="pr-1" md="4">
                                    <label>Fecha</label>
                                    <FormGroup>
                                        <Input type="date" name="fecha" />
                                    </FormGroup>
                                </Col>
                                <Col className="pr-1" md="4">
                                    <label>Cuota de cobro</label>
                                    <FormGroup>
                                        <Input type="text" name="cuota" placeholder="##.##" />
                                    </FormGroup>
                                </Col>
                            </Row>
                            <Row>
                                <Col className="pr-1" md="4">
                                    <label>Estado</label>
                                    <FormGroup>
                                        <CustomInput type="select" name="estado">
                                            <option value="">Seleccione ...</option>
                                            {this.state.estado.map(item => (
                                                <option value={item}>{item}</option>
                                            )
                                            )}
                                        </CustomInput>
                                    </FormGroup>
                                </Col>
                                <Col className="pr-1" md="4">
                                    <label>Tipo de crédito</label>
                                    <FormGroup>
                                        <CustomInput type="select" name="tipoCredito">
                                            <option value="">Seleccione ...</option>
                                            {this.state.tipoCredito.map(item => (
                                                <option value={item}>{item}</option>
                                            ))}
                                        </CustomInput>
                                    </FormGroup>
                                </Col>
                            </Row>
                            <div>¿Cómo se va a determinar la cuota, en base a numero de pagos, o en base a la tuota se calcula el numero de pagos?</div>
                            <div>Obtener el empleado de la session</div>
                            <div>Seleccionar cliente (DUI) ... VERIFICAR QUE SUS CREDITOS ESTEN CANCELADOS o agregar nuevo</div>
                            <div>Seleccionar fiador (DUI) VERIFICAR QUE NO SEA FIADOR EN UN CREDITO QUE ESTA EN COBRO o agregar nuevo</div>

                        </Form>
                    </CardBody>
                </Card>
            </>
        );
    }
}


export { FormCredito };