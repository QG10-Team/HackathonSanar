import React from "react";
import { Redirect } from "react-router-dom";

// Layout Types
import { DefaultLayout } from "./layouts";

// Route Views
import Dashboard from "./views/dashboard";
import Leitos from "./views/leitos";
// import Errors from "./views/Errors";
import CadastroPacientes from "./views/Pacientes/Cadastro";
import Lista from "./views/Pacientes/Lista/Lista";
import Atendimento from "./views/Pacientes/Atendimento/Cadastro";
import Informacoes from "./views/Pacientes/Informacoes";

export default [
  {
    path: "/",
    exact: true,
    layout: DefaultLayout,
    component: () => <Redirect to="/dashboard" />
  },
  {
    path: "/dashboard",
    layout: DefaultLayout,
    component: Dashboard
  },
  {
    path: "/leitos",
    layout: DefaultLayout,
    component: Leitos
  },
  {
    path: "/pacientes",
    layout: DefaultLayout,
    component: Lista
  },
  {
    path: "/cadastro-paciente",
    layout: DefaultLayout,
    component: CadastroPacientes
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
