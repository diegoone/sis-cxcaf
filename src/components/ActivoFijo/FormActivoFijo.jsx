
import React from "react";
import "../../assets/css/paper-dashboard.css";
import { CaptureForm, CreateReferencies, urlApi } from "Utils/FormUtil";
import { SelectMarca, FormMarca } from "components/Marca/FormMarca";
import { FormSucursal, SelectSucursal } from "components/Sucursal/FormSucursal";
import { FormDepartamento, SelectDepartamento } from "components/Departamento/FormDepartamento";
import { SelectTipoActivo, FormTipoActivo } from "components/TipoActivo/FormTipoActivo";
import { SelectEmpleado } from "components/Empleado/FormEmpleado";

import {
    Button,
    Card, CardHeader,
    CardBody, CardTitle,
    FormGroup, Form, TextArea,
    CustomInput, Input, Row, Col,
    Label
} from "reactstrap";
class FormActivoFijo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            listIdMarca: [],
            listIdSucursal: [],
            listIdDepartamento: [],
            listIdTipoActivo: [],
        };
        this.data = {
            id: null,
            nombre: null,
            idEmpleado: null,
            descripcion: null,
            procedencia: null,
            precio: null,
            idDepartamento: null,
            idTipo: null,
            idMarca: null,
            idSucursal: null,
            fechaAdquisicion: null
        };
        this.handleUpdateListMarca = this.handleUpdateListMarca.bind(this);
        this.handleUpdateListSucursal = this.handleUpdateListSucursal.bind(this);
        this.handleUpdateListDepartamento = this.handleUpdateListDepartamento.bind(this);
        this.handleUpdateListTipoActivo = this.handleUpdateListTipoActivo.bind(this);
        
    }
    handleUpdateListMarca() {
        fetch(urlApi+"/marca/")
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        listIdMarca: result
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
    handleUpdateListSucursal() {
        fetch(urlApi+"/sucursal/")
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        listIdSucursal: result
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
    handleUpdateListDepartamento() {
        fetch(urlApi+"/departamento/")
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        listIdDepartamento: result
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
    handleUpdateListTipoActivo() {
        fetch(urlApi+"/tipoactivo/")
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        listIdTipoActivo: result
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
    componentDidMount() {
        this.handleUpdateListMarca();
        this.handleUpdateListSucursal();
        this.handleUpdateListDepartamento();
        this.handleUpdateListTipoActivo();
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
                                    <i className="nc-icon nc-minimal-left puntero" onClick={() => mostrar(opc)}></i>
                                </div>
                            </Col>
                            <Col md="11">
                                <CardTitle tag="h5" className="text-center">Registro de Activo Fijo</CardTitle>
                            </Col>
                        </Row>
                    </CardHeader>
                    <CardBody>
                        <Form>
                            <div>
                                <ElementsActivoFijo refer={this.data} />
                            </div>
                            <div>
                                <SelectEmpleado refer={this.data} />
                            </div>
                            <Row>
                                <Col className='pr-1' md='4'>
                                    <FormGroup>
                                        <SelectMarca refer={this.data} listIdMarca={this.state.listIdMarca} />
                                        <FormMarca handleUpdate={this.handleUpdateListMarca}/>
                                    </FormGroup>
                                </Col>
                                <Col className='pr-1' md='4'>
                                    <FormGroup>
                                        <SelectSucursal refer={this.data} listIdSucursal={this.state.listIdSucursal} />
                                        <FormSucursal handleUpdate={this.handleUpdateListSucursal}/>
                                    </FormGroup>
                                </Col>
                                <Col className='pr-1' md='4'>
                                    <FormGroup>
                                        <SelectDepartamento refer={this.data} listIdDepartamento={this.state.listIdDepartamento} />
                                        <FormDepartamento handleUpdate={this.handleUpdateListDepartamento}/>
                                    </FormGroup>
                                </Col>
                                <Col className='pr-1' md='4'>
                                    <FormGroup>
                                        <SelectTipoActivo refer={this.data} listIdTipoActivo={this.state.listIdTipoActivo} />
                                        <FormTipoActivo handleUpdate={this.handleUpdateListTipoActivo}/>
                                    </FormGroup>
                                </Col>
                            </Row>
                        </Form>
                    </CardBody>
                </Card>
            </>
        );
    }
}

function ElementsActivoFijo(props) {
    return (
        <>
            <Row>
                <Col className="pr-1" md="4">
                    <label>Nombre</label>
                    <FormGroup>
                        <Input defaultValue=""
                            innerRef={props.refer.nombre}
                            name="nombre" placeholder="Aa" />
                    </FormGroup>
                </Col>
                <Col className="pr-1" md="6">
                    <label>Descripción</label>
                    <FormGroup>
                        <Input type="textarea" innerRef={props.refer.descripcion}
                            name="descripcion" cols="30" rows="10" className="form-control" />
                    </FormGroup>
                </Col>
            </Row>
            <Row>
                <Col className="pr-1" md="4">

                    <label>Procedencia:</label>
                    <FormGroup>
                        <CustomInput innerRef={props.refer.procedencia}
                            type="select" name="procedencia">
                            <option value=""> Seleccione </option>
                            <option value="NUEVO">NUEVO</option>
                            <option value="USADO">USADO</option>
                            <option value="DONADO NUEVO">DONADO NUEVO</option>
                            <option value="DONADO USADO">DONADO USADO</option>
                        </CustomInput>
                    </FormGroup>
                </Col>
                <Col className="pr-1" md="4">

                    <label>Precio:</label>
                    <FormGroup>
                        <Input
                            innerRef={props.refer.precio}
                            name="precio" type="text" placeholder="###.##" />
                    </FormGroup>
                </Col>
                <Col className="pr-1" md="4">

                    <label>Fecha de adquisición:</label>
                    <FormGroup>
                        <Input name="fechaAdquisicion"
                            innerRef={props.refer.fechaAdquisicion}
                            type="date" placeholder="###.##" />
                    </FormGroup>
                </Col>
            </Row>

        </>
    );
}

export { FormActivoFijo, ElementsActivoFijo };
