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
import Procedimento from "./Procedimento";

class Listar extends Component {
    state = {
        procedimento: []
    };

    render() {

        const listaProcedimento = this.state.procedimento.map(procedimento => (
            <Procedimento />
        ));

        return(
            <Container fluid className="main-content-container px-4">
                {/* Page Header */}
                <Row noGutters className="page-header py-4">
                    <PageTitle sm="4" title="Lista" subtitle="Procedimento" className="text-sm-left" />
                </Row>

                {/* Default Light Table */}
                <Row>
                    <Col>
                        <Card small className="mb-4">
                            <CardHeader className="border-bottom">
                                {/* <h6 className="m-0">Procedimentos</h6> */}
                            </CardHeader>
                            <CardBody className="p-0 pb-3">
                                <table className="table mb-0">
                                    <thead className="bg-light">
                                        <tr>
                                            <th scope="col" className="border-0">
                                                #
                                            </th>
                                            <th scope="col" className="border-0">
                                                Descricao
                                            </th>
                                            <th scope="col" className="border-0">
                                                Status
                                            </th>
                                            <th scope="col" className="border-0">
                                                Horário
                                            </th>
                                            <th scope="col" className="border-0">
                                                Data do Procedimento
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {listaProcedimento}
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
