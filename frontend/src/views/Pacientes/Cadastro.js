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

import PageTitle from "../../components/common/PageTitle";
  
class Cadastro extends Component {
    constructor(props) {
        super(props);

        this.state = {
            startDate: undefined
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
                    <PageTitle sm="4" title="Cadastro" subtitle="Pacientes" className="text-sm-left" />
                </Row>       
                <Card small className="mb-4">
                    <ListGroup flush>
                        <ListGroupItem className="p-3">
                            <Row>
                                <Col>
                                    <Form>
                                        <Row form>
                                            {/* Nome */}
                                            <Col md="6" className="form-group">
                                                <label htmlFor="feNome">Nome</label>
                                                <FormInput
                                                    id="feNome"
                                                    placeholder="Nome"
                                                    value=""
                                                    onChange={() => {}}
                                                />
                                            </Col>
                                            {/* E-mail */}
                                            <Col md="6" className="form-group">
                                                <label htmlFor="feEmail">E-mail</label>
                                                <FormInput
                                                    type="email"
                                                    id="feEmail"
                                                    placeholder="E-mail"
                                                    value=""
                                                    onChange={() => {}}
                                                    autoComplete="email"
                                                />
                                            </Col>
                                        </Row>
                                        <Row form>
                                            {/* Data de Nascimento */}
                                            <Col md="4" className="form-group">
                                                <label htmlFor="feDataNascimento">Data de Nascimento</label>
                                                <InputGroup>
                                                    <DatePicker
                                                    size="sm"
                                                    selected={this.state.startDate}
                                                    onChange={this.handleStartDateChange}
                                                    placeholderText="Data de Nascimento"
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
                                            {/* Peso */}
                                            <Col md="4" className="form-group">
                                                <label htmlFor="fePeso">Peso</label>
                                                <FormInput
                                                    id="fePeso"
                                                    placeholder="Peso"
                                                    value=""
                                                    onChange={() => {}}
                                                />
                                            </Col>
                                            {/* Altura */}
                                            <Col md="4" className="form-group">
                                                <label htmlFor="feAltura">Altura</label>
                                                <FormInput
                                                    id="feAltura"
                                                    placeholder="Altura"
                                                    value=""
                                                    onChange={() => {}}
                                                />
                                            </Col>
                                        </Row>
                                        <Row form>
                                            {/* Observacoes */}
                                            <Col md="12" className="form-group">
                                                <label htmlFor="feObservacoes">Observações</label>
                                                <FormTextarea id="feObservacoes" rows="5" />
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

export default Cadastro;