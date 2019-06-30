import React, { Component } from "react";

import { Container, Row, Col } from "shards-react";

import PageTitle from "../../../components/common/PageTitle";

import DetalheAtendimento from "./Detalhe";
import DetalheProcedimento from "../Procedimentos/Detalhe";
import API from "../../../services/api";

class Visualizar extends Component {
  state = {
    atendimento: {},
    procedimentos: []
  };

  async componentDidMount() {
    const { id } = this.props.match.params;
    const response = await API.get(`/atendimento?id=${id}`);
    this.setState({
      atendimento: response.data.atendimento[0],
      procedimentos: response.data.procedimento
    });
  }

  render() {
    return (
      <Container fluid className="main-content-container px-4">
        <Row noGutters className="page-header py-4">
          <PageTitle
            title="Visualizar"
            subtitle="Atendimento | Procedimento"
            md="12"
            className="ml-sm-auto mr-sm-auto"
          />
        </Row>
        <Row>
          <Col lg="12">
            <DetalheAtendimento
              status={this.state.atendimento.status}
              paciente={this.state.atendimento.nome}
              nivelAtendimento={this.state.atendimento.nivel}
              dataAtendimento={this.state.atendimento.data_entrada}
            />
          </Col>
        </Row>
        <Row>
          <Col lg="12">
            {this.state.procedimentos.map(procedimento => (
              <DetalheProcedimento
                status={procedimento.status}
                descricao={procedimento.descricao}
                horario={procedimento.horario}
                dataProcedimento={procedimento.data_validacao}
                observacoes={procedimento.observacao}
              />
            ))}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Visualizar;
