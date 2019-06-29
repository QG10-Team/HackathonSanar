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
import Paciente from "./Paciente";

class Pacientes extends Component {
    state = {
        paciente: []
    };

    render() {

        const listaPacientes = this.state.paciente.map(paciente => (
            <Paciente 
                key={paciente.id} 
                nome={paciente.nome} 
                email={paciente.email}
                dataNascimento={paciente.dataNascimento}
                peso={paciente.peso}
                altura={paciente.altura}                
                />
        ));

        return(
            <Container fluid className="main-content-container px-4">
                {/* Page Header */}
                <Row noGutters className="page-header py-4">
                    <PageTitle sm="4" title="Lista" subtitle="Pacientes" className="text-sm-left" />
                </Row>

                {/* Default Light Table */}
                <Row>
                    <Col>
                        <Card small className="mb-4">
                            <CardHeader className="border-bottom">
                                <h6 className="m-0">Pacientes</h6>
                            </CardHeader>
                            <CardBody className="p-0 pb-3">
                                <table className="table mb-0">
                                    <thead className="bg-light">
                                        <tr>
                                            <th scope="col" className="border-0">
                                                #
                                            </th>
                                            <th scope="col" className="border-0">
                                                Nome
                                            </th>
                                            <th scope="col" className="border-0">
                                                E-mail
                                            </th>
                                            <th scope="col" className="border-0">
                                                Data de Nascimento
                                            </th>
                                            <th scope="col" className="border-0">
                                                Peso
                                            </th>
                                            <th scope="col" className="border-0">
                                                Altura
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {listaPacientes}
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

export default Pacientes;
