import React, { Component } from "react";

import { 
    Container, 
    Row, 
    Col 
} from "shards-react";

import PageTitle from "../../components/common/PageTitle";

import Editar from './Editar';
import Detalhe from './Detalhe';

class Informacoes extends Component{
    
    render() {

        return(
            <Container fluid className="main-content-container px-4">
                <Row noGutters className="page-header py-4">
                    <PageTitle title="User Profile" subtitle="Overview" md="12" className="ml-sm-auto mr-sm-auto" />
                </Row>
                <Row>
                    <Col lg="4">
                        <Detalhe />
                    </Col>
                    <Col lg="8">
                        <Editar />
                    </Col>
                </Row>
            </Container>
        );
    };
};

export default Informacoes;