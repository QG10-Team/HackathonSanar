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

class Editar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            startDate: undefined,
            procedimento: []
        };

        this.handleStartDateChange = this.handleStartDateChange.bind(this);
        }

    handleStartDateChange(value) {
        this.setState({
            ...this.state,
            ...{ startDate: new Date(value) }
        });
    }

    render() {

        return (
            <Container fluid className="main-content-container px-4 pb-4">
                <Row noGutters className="page-header py-4">
                    <PageTitle sm="4" title="Editar" subtitle="Procedimento" className="text-sm-left" />
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
                                                    value={this.state.procedimento.descricao}
                                                    onChange={() => {}}
                                                />
                                            </Col>
                                            {/* Horario */}
                                            <Col md="3" className="form-group">
                                                <label htmlFor="feHora">Horário</label>
                                                <FormInput
                                                    id="feHora"
                                                    placeholder="Hora"
                                                    value={this.state.procedimento.horario}
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
                                                    value={this.state.procedimento.data}
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
                                                <FormTextarea id="feObservacoes" rows="5" value={this.state.procedimento.observacao} />
                                            </Col>
                                        </Row>
                                        <Button theme="accent">Cadastrar</Button>
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

export default Editar;