import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Navbar, Container } from 'react-bootstrap';
import logo from './legalcode.png';
import logo2 from './logo2.png';

function Home(props) {
  let history = useHistory();

  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand style={{ display: "flex", flexDirection: "column" }} href="#home">
            <img
              src={logo}
              className="d-inline-block align-top"
            />

            <img src={logo2}
              style={{ marginTop: "30%" }}
              className="d-inline-block align-top"
              width="130px"
            />
          </Navbar.Brand>
        </Container>
      </Navbar>
      <motion.div exit={{ opacity: 0 }} animate={{ opacity: 1 }} initial={{ opacity: 0 }} className="Home" style={{ alignSelf: "center", display: "flex", alignItems: "center", justifyContent: "center" }}>





        <Form onSubmit={() => { history.push('/about') }}>
          <Form.Group controlId="formFile" className="mb-3">
            <Form.Label style={{ color: "white" }}>Insira o arquivo a ser processado</Form.Label>
            <Form.Control type="file" required />
          </Form.Group>
          {/* <Link type="submit" to="/about"> */}
          <Button type="submit" variant="primary">
            Submeter
          </Button>
          {/* </Link> */}


        </Form>


      </motion.div>
    </>
  );
}

export default Home