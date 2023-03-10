import CategoryList from './CategoryList';
import Navi from './Navi';
import ProductList from './ProductList';
import { Container, Row, Col } from 'reactstrap';

function App() {
  return (
    <div >
      <Container>
        <Row>
          <Navi />
        </Row>
        <Row>
          <Col xs="3">
            <CategoryList tittle="Category List"/>
          </Col>
          <Col xs="9">
            <ProductList tittle="Product List"/>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
