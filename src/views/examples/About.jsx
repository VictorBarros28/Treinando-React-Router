import React from 'react';
import Spinner from 'react-bootstrap/Spinner'
import Delayed from './Delayed';
import { Modal, Button, Table, Container } from 'react-bootstrap'
import ModalHeader from 'react-bootstrap/esm/ModalHeader';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const about = props => (
  <motion.div exit={{ opacity: 0 }} animate={{ opacity: 1 }} initial={{ opacity: 0 }} className="about" style={{ display: "flex", justifyContent: "center", alignSelf: "center" }}>
    <Spinner animation="border" role="status">
      <span className="visually-hidden">Loading...</span>
    </Spinner>
    <Delayed waitBeforeShow={3000}>
      <Modal

        show={true}
        centered
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header >
          <Modal.Title id="contained-modal-title-vcenter">
            Resultado
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="show-grid" style={{ backgroundColor: "#212529" }}>
          <Container style={{ backgroundColor: "#212529", display: "flex", flexDirection: "column", alignItems: "space-around" }}>
            <Table style={{ backgroundColor: "#212529" }} striped bordered hover variant="dark">
              <thead>
                <tr>
                  <th>Features</th>
                  <th>OBS</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Devedores + cpf (inicial)</td>
                  <td>Cristiano Rodrigues Barbosa, CPF/MF sob o nº 744.566.956-68 <br />
                    Leila Junia Diniz Cunha Barbosa, CPF/MF nº 008.611.866-80</td>
                </tr>
                <tr>
                  <td>Valor da causa</td>
                  <td>R$ 627.259,15 </td>
                </tr>
                <tr>
                  <td>Data de ajuizamento</td>
                  <td>22/01/2021</td>
                </tr>
                <tr>
                  <td>Contrato/título que embasa ação</td>
                  <td>N. 12312/03  </td>
                </tr>
                <tr>
                  <td>Garantias/tipos de garantia</td>
                  <td>Penhor pecuário </td>
                </tr>
                <tr>
                  <td>Objeto da ação/pretensão</td>
                  <td> Execução </td>
                </tr>
                <tr>
                  <td>Citação/Intimação</td>
                  <td>26/01/2021 </td>
                </tr>
                <tr>
                  <td>Sentença/acordão</td>
                  <td>NÃO TEM</td>
                </tr>
                <tr>
                  <td>Ações veiculadas</td>
                  <td colSpan="2">NÃO TEM</td>
                </tr>
              </tbody>
            </Table>
          </Container >
        </Modal.Body>
        <Modal.Footer >
          <Link to="/">
            <Button style={{ backgroundColor: "#212529" }}>Retornar</Button>
          </Link>
        </Modal.Footer>
      </Modal>

    </Delayed>
  </motion.div >
);

export default about