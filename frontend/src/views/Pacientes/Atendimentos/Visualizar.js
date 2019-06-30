import React, { Component } from "react";

import { 
    Container, 
    Row, 
    Col 
} from "shards-react";

import PageTitle from "../../../components/common/PageTitle";

import DetalheAtendimento from "./Detalhe";
import DetalheProcedimento from "../Procedimentos/Detalhe";

class Visualizar extends Component{
    
    render() {

        return(
            <Container fluid className="main-content-container px-4">
                <Row noGutters className="page-header py-4">
                    <PageTitle title="Visualizar" subtitle="Atendimento | Procedimento" md="12" className="ml-sm-auto mr-sm-auto" />
                </Row>
                <Row>
                    <Col lg="6">
                        <DetalheAtendimento />
                    </Col>
                    <Col lg="6">
                        <DetalheProcedimento />
                    </Col>
                </Row>
            </Container>
        );
    };
};

export default Visualizar;