/* eslint jsx-a11y/anchor-is-valid: 0 */
import React from "react";
import {
  Container,
  Row,
  Col,
  Card,
  CardHeader,
  ListGroup,
  ListGroupItem,
  Form,
  FormGroup,
  FormInput,
  Button
} from "shards-react";
// import { toast } from "react-toastify";

// import API from "../../services/api";

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: undefined,
      password: undefined
    };
  }

  handleLogin = async () => {
    // const { email, password } = this.state;
    // const res = await API.post("/auth/signin", { email, password });
    // const { user, token } = res.data;
    // if (user && token) {
    //   localStorage.setItem("@tokenMalta", token);
    //   localStorage.setItem("@nameMalta", user.name);
    //   // toast.success("Login feito com sucesso");
    //   return this.props.history.push("/");
    // } else {
    //   // toast.error("Email ou senha incorreto");
    // }
  };

  handleChange = event => {
    const { name, value } = event.target;

    this.setState({
      [name]: value
    });
  };

  // logged = () => {
  //   if (
  //     localStorage.getItem("@tokenMalta") &&
  //     localStorage.getItem("@nameMalta")
  //   ) {
  //     return this.props.history.push("/events");
  //   }
  // };

  render() {
    // this.logged();
    return (
      <Container
        style={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <Card style={{ width: "350px" }}>
          <CardHeader style={{ textAlign: "center", fontSize: "25px" }}>
            <div className="d-table m-auto">
              <img
                id="main-logo"
                className="d-inline-block align-top mr-1"
                style={{ maxWidth: "180px", marginTop: "20px" }}
                // src={require("../../images/logo2.png")}
                alt="Pront QRCode"
              />
            </div>
          </CardHeader>
          <ListGroup flush>
            <ListGroupItem className="p-3">
              <Row>
                <Col>
                  <Form>
                    {/* Email */}
                    <FormGroup>
                      <label htmlFor="feEmail">Email</label>
                      <FormInput
                        id="email"
                        name="email"
                        placeholder="Digite seu email..."
                        onChange={this.handleChange}
                      />
                    </FormGroup>
                    {/* Password */}
                    <FormGroup>
                      <label htmlFor="fePassword">Senha</label>
                      <FormInput
                        type="password"
                        id="password"
                        name="password"
                        placeholder="Digite sua senha..."
                        onChange={this.handleChange}
                      />
                    </FormGroup>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        flexDirection: "column",
                        padding: "6px 0"
                      }}
                    >
                      <Button
                        style={{
                          width: "100%",
                          height: "40px",
                          margin: "8px 0"
                        }}
                        theme="accent"
                        onClick={this.handleLogin}
                      >
                        Entrar
                      </Button>
                    </div>
                  </Form>
                </Col>
              </Row>
            </ListGroupItem>
          </ListGroup>
        </Card>
      </Container>
    );
  }
}

export default Login;
