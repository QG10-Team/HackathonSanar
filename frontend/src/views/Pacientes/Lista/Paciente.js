import React, { Component } from "react";

const paciente = props => (
    <tr>
        <td>{props.nome}</td>
        <td>{props.email}</td>
        <td>{props.dataNascimento}</td>
        <td>{props.peso}</td>
        <td>{props.altura}</td>
    </tr>
);

export default paciente;