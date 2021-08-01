import React from 'react'
import { Col, Grid, Row } from './components/GridLayoutComponents'

const App = () => {
  return (
    <div className="App">
      <h1>Responsive Grid</h1>

      <Grid>
        <Row>
          <Col size={1}>
            Looooooong column
          </Col>
        </Row>
        <Row>
          <Col size={2}>
            I will expand to fill
          </Col>
          <Col size={1} collapse="xs">
            I will disapper
          </Col>
          <Col size={1}>
            I will expand to fill
          </Col>
        </Row>
      </Grid>
    </div>
  );
}

export default App;
