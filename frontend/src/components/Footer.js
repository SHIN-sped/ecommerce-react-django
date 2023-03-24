import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

function Footer() {
  return (
    <footer>
          <Container>
              <row>
                  <Col className="text-center py-3">Copyright &copy; yolo v4</Col>
              </row>
          </Container>
    </footer>
  )
}

export default Footer