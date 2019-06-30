import React from "react";

const atendimento = props => (
    <tr>
        <td>{props.paciente}</td>
        <td>{props.leito}</td>
        <td>{props.nivelAtendimento}</td>
        <td>{props.data}</td>
        <td>{props.status}</td>
    </tr>
);

export default atendimento;