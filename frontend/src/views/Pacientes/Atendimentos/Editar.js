import React, { Component } from "react";

import {
  Button,
  Card,
  Col,
  Container,
  DatePicker,
  Form,
  FormRadio,
  FormSelect,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  ListGroup,
  ListGroupItem,
  Row
} from "shards-react";
import API from "../../../services/api";

import PageTitle from "../../../components/common/PageTitle";

class Editar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      startDate: undefined,
      paciente: [],
      leito: [],
      atendimento: []
    };

    this.handleStartDateChange = this.handleStartDateChange.bind(this);
  }

  async componentDidMount() {
    const { id } = this.props.match.params;
    const responsePaciente = await API.get(`/atendimento?id=${id}`);
    console.log(responsePaciente);

    this.setState({ paciente: responsePaciente.data });
  }

  handleStartDateChange(value) {
    this.setState({
      startDate: new Date(value)
    });
  }

  render() {
    const listarLeito = this.state.leito.map(leito => (
      <option key={leito.id} value={leito.nome}>
        {leito.nome}
      </option>
    ));

    // const listarPacientes = this.state.paciente.map(paciente => (
    //   <option key={paciente.id} value={paciente.nome}>
    //     {paciente.nome}
    //   </option>
    // ));

    return (
      <Container fluid className="main-content-container px-4 pb-4">
        <Row noGutters className="page-header py-4">
          <PageTitle
            sm="4"
            title="Editar"
            subtitle="Atendimento"
            className="text-sm-left"
          />
        </Row>
        <Card small className="mb-4">
          <ListGroup flush>
            <ListGroupItem className="p-3">
              <Row>
                <Col>
                  <Form>
                    <Row form>
                      {/* Paciente */}
                      {/* <Col md="4" className="form-group">
                        <label htmlFor="fePaciente">Paciente</label>
                        <FormSelect>
                          <option> .: Selecione :. </option>
                          {listarPacientes}
                        </FormSelect>
                      </Col> */}
                      {/* Leito */}
                      <Col md="4" className="form-group">
                        <label htmlFor="feLeito">Leito</label>
                        <FormSelect>
                          <option> .: Selecione :. </option>
                          {listarLeito}
                        </FormSelect>
                      </Col>
                      {/* Nivel de Atendimento */}
                      <Col md="4" className="form-group">
                        <label htmlFor="feNivelAtendimento">
                          Nível de Atendimento
                        </label>
                        <FormSelect>
                          <option> .: Selecione :. </option>
                          <option value="1">Alta</option>
                          <option value="2">Estável</option>
                          <option value="3">Grave</option>
                        </FormSelect>
                      </Col>
                    </Row>
                    <Row>
                      {/* Data do Atendimento */}
                      <Col md="3" className="form-group">
                        <label htmlFor="feDataAtendimento">
                          Data de Atendimento
                        </label>
                        <InputGroup>
                          <DatePicker
                            size="sm"
                            selected={this.state.startDate}
                            onChange={this.handleStartDateChange}
                            placeholderText="Data de Atendimento"
                            dropdownMode="select"
                            className="text-center"
                            value={this.state.startDate}
                          />
                          <InputGroupAddon type="append">
                            <InputGroupText>
                              <i className="material-icons">&#xE916;</i>
                            </InputGroupText>
                          </InputGroupAddon>
                        </InputGroup>
                      </Col>
                      {/* Status */}
                      <Col md="3" className="form-group">
                        <label htmlFor="feStatus">Status</label>
                        <FormRadio>Finalizado</FormRadio>
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
}

export default Editar;
