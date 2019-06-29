import React from "react";
import { Redirect } from "react-router-dom";

// Layout Types
import { DefaultLayout } from "./layouts";

// Route Views
import Errors from "./views/Errors";
import CadastrarPacientes from './views/Pacientes/Cadastrar';
import Lista from './views/Pacientes/Lista/Lista';
import Atendimento from './views/Pacientes/Atendimento/Cadastrar';
import Informacoes from './views/Pacientes/Informacoes';

export default [
  {
    path: "/",
    exact: true,
    layout: DefaultLayout,
    component: () => <Redirect to="/blog-overview" />
  },
  {
    path: "/Cadastrar-paciente",
    layout: DefaultLayout,
    component: CadastrarPacientes
  },
  {
    path: "/pacientes",
    layout: DefaultLayout,
    component: Lista
  },
  {
    path: "/atendimento",
    layout: DefaultLayout,
    component: Atendimento
  },
  {
    path: "/informacoes",
    layout: DefaultLayout,
    component: Informacoes
  }
];
