import React, { Component } from "react";

import {
    Button,
    Card,
    Col,
    Container,
    DatePicker,
    Form,
    FormInput,
    FormTextarea,
    InputGroup,
    InputGroupAddon,
    InputGroupText,
    ListGroup,
    ListGroupItem,
    Row
  } from "shards-react";

import PageTitle from "../../../components/common/PageTitle";
import API from "../../../services/api";
  
class Cadastrar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            startDate: undefined,
            procedimento: {
                id_procedimento: undefined,
                descricao: undefined,
                observacao: undefined,
                status: undefined,
                data_criacao: undefined,
                data_validacao: undefined
            }
        };

        this.handleStartDateChange = this.handleStartDateChange.bind(this);
        }

    handleStartDateChange(value) {
        this.setState({
            ...this.state,
            ...{ startDate: new Date(value) }
        });
    }

    handleSubmit = async e => {
        const response = await API.get(
          `/cadastrar_procedimento?descricao=${this.state.procedimento.descricao}&observacao=${this.state.procedimento.observacao}&status=${this.state.procedimento.status}&data_criacao=${this.state.procedimento.data_criacao}&data_validacao=${this.state.procedimento.data_validacao}`
        );
        console.log(response);
    
        return this.props.history.push("/procedimento");
      };

    render() {

        return (
            <Container fluid className="main-content-container px-4 pb-4"> 
                <Row noGutters className="page-header py-4">
                    <PageTitle sm="4" title="Cadastrar" subtitle="Procedimento" className="text-sm-left" />
                </Row>       
                <Card small className="mb-4">
                    <ListGroup flush>
                        <ListGroupItem className="p-3">
                            <Row>
                                <Col>
                                    <Form>
                                        <Row>
                                            {/* Descricao */}
                                            <Col md="6" className="form-group">
                                                <label htmlFor="feDescricao">Descricao</label>
                                                <FormInput
                                                    id="feDescricao"
                                                    placeholder="Descricao"
                                                    value=""
                                                    onChange={() => {}}
                                                />
                                            </Col>
                                            {/* Horario */}
                                            <Col md="3" className="form-group">
                                                <label htmlFor="feHora">Horário</label>
                                                <FormInput
                                                    id="feHora"
                                                    placeholder="Hora"
                                                    value=""
                                                    onChange={() => {}}
                                                    type="time"
                                                />
                                            </Col>
                                            {/* Data do Procedimento */}
                                            <Col md="3" className="form-group">
                                                <label htmlFor="feDataProcedimento">Data do Procedimento</label>
                                                <InputGroup>
                                                    <DatePicker
                                                    size="sm"
                                                    selected={this.state.startDate}
                                                    onChange={this.handleStartDateChange}
                                                    placeholderText="Data de Procedimento"
                                                    dropdownMode="select"
                                                    className="text-center"
                                                    /> 
                                                    <InputGroupAddon type="append">
                                                        <InputGroupText>
                                                            <i className="material-icons">&#xE916;</i>
                                                        </InputGroupText>
                                                    </InputGroupAddon>     
                                                </InputGroup>                                        
                                            </Col>
                                        </Row>
                                        <Row>
                                            {/* Observacoes */}
                                            <Col md="12" className="form-group">
                                                <label htmlFor="feObservacoes">Observações</label>
                                                <FormTextarea id="feObservacoes" rows="5" />
                                            </Col>
                                        </Row>
                                        <Button theme="accent" onClick={() => this.handleSubmit()}>Cadastrar</Button>
                                    </Form>
                                </Col>
                            </Row>
                        </ListGroupItem>
                    </ListGroup>
                </Card>
            </Container>
        );
    }
};

export default Cadastrar;