import React, { Component } from "react";
import { 
    Card, 
    CardBody,
    CardHeader, 
    Col, 
    Container, 
    Row 
} from "shards-react";

import PageTitle from "../../../components/common/PageTitle";
import Atendimento from "./Atendimento";

class Listar extends Component {
    state = {
        atendimento: []
    };

    render() {

        const listaAtendimento = this.state.atendimento.map(atendimento => (
            <Atendimento />
        ));

        return(
            <Container fluid className="main-content-container px-4">
                {/* Page Header */}
                <Row noGutters className="page-header py-4">
                    <PageTitle sm="4" title="Lista" subtitle="Atendimento" className="text-sm-left" />
                </Row>

                {/* Default Light Table */}
                <Row>
                    <Col>
                        <Card small className="mb-4">
                            <CardHeader className="border-bottom">
                                {/* <h6 className="m-0">Pacientes</h6> */}
                            </CardHeader>
                            <CardBody className="p-0 pb-3">
                                <table className="table mb-0">
                                    <thead className="bg-light">
                                        <tr>
                                            <th scope="col" className="border-0">
                                                #
                                            </th>
                                            <th scope="col" className="border-0">
                                                Paciente
                                            </th>
                                            <th scope="col" className="border-0">
                                                Leito
                                            </th>
                                            <th scope="col" className="border-0">
                                                Nível de Atendimento
                                            </th>
                                            <th scope="col" className="border-0">
                                                Data do Atendimento
                                            </th>
                                            <th scope="col" className="border-0">
                                                Status
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {listaAtendimento}
                                    </tbody>
                                </table>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
        );
    }
};

export default Listar;
