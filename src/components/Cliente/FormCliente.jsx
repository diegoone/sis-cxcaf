import React from "react";
import { ElementsPersona } from "components/Persona/FormPersona";
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
class FormCliente extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoaded: false,
            error: null,
            zona: [],
            estadoCivil: [],
            tipo: [],
            listIdProfesion: [], 
        };

        this.data = {
            nombres: null,
            apellidos: null,
            dui: null,
            telefono: null,
            genero: null,
            salario: null,
            nit: null,
            fechaN: null,
            direccion: null,
            zona: null,
            estadoCivil: null,
            idProfesion: null,
            tipo: null,
            clasificacion: null,
            username: null,
            password: null,

        };
        for (var prop in this.data) {
            if (Object.prototype.hasOwnProperty.call(this.data, prop)) {
                this.data[prop] = React.createRef();
            }
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(event) {
        event.preventDefault();
        var obj = {};
        for (var prop in this.data) {
            if (Object.prototype.hasOwnProperty.call(this.data, prop)) {
                console.log(prop, this.data[prop].current);
                obj[prop] = this.state[prop].current.value;
            }
        }

        console.log(this.data);
    }
    componentDidMount() {
        fetch("http://localhost:4000/api/cliente/enum")
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        zona: result.zona,
                        tipo: result.tipo,
                        estadoCivil: result.estadocivil
                    });
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            );//end fetch
            fetch("http://localhost:4000/api/profesion")
            .then(res => res.json())
            .then(
                (result) => {
                    console.log(result);
                    this.setState({
                        isLoaded: true,
                        listIdProfesion: result,
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
        const { mostrar, opc } = this.props;
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
                                <CardTitle tag="h5" className="text center" >Registro de Cliente</CardTitle>
                            </Col>
                        </Row>
                    </CardHeader>
                    <CardBody>
                        <Form onSubmit={this.handleSubmit}>
                            <ElementsCliente
                                zona={this.state.zona}
                                isLoaded={this.state.isLoaded}
                                estadoCivil={this.state.estadoCivil}
                                tipo={this.state.tipo}
                                listIdProfesion={this.state.listIdProfesion}
                                refer={this.data}
                                mostrar={mostrar}
                                opc={opc} />
                        </Form>
                    </CardBody>
                </Card>
            </>
        );
    }
}

function ElementsCliente(props) {
    console.log(props);
    const { mostrar, opc } = props;
    return (
        <>
            <ElementsPersona

                zona={props.zona}
                isLoaded={props.isLoaded}
                estadoCivil={props.estadoCivil}
                listIdProfesion={props.listIdProfesion}
                refer={props.refer}
                mostrar={mostrar} opc={opc} />
            <hr />
            <Row>
                <Col className="pr-1" md="4">
                    <label>Tipo</label>
                    <FormGroup>
                        <CustomInput type="select" name="tipo">
                            <option value="">Seleccione ...</option>
                            {props.tipo.map(item => (
                                <option value={item}>{item}</option>
                            )
                            )}
                        </CustomInput>
                    </FormGroup>

                </Col>
                <Col className="pr-1" md="4">

                    <label>Clasificación</label>
                    <div>
                        <CustomInput type="radio" id="radioA" name="clasificacion" label="A" />
                        <CustomInput type="radio" id="radioB" name="clasificacion" label="B" />
                        <CustomInput type="radio" id="radioC" name="clasificacion" label="C" />
                        <CustomInput type="radio" id="RadioD" name="clasificacion" label="D" />
                    </div>

                </Col>
            </Row>
        </>
    );
}
export { FormCliente, ElementsCliente };