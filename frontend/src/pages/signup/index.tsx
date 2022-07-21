import { Col, Layout, Row } from 'antd';
import { Header, Content, Footer } from 'antd/lib/layout/layout';
import SignUpForm from './SignUpForm';

const Signup = () => {
  return (
    <Layout>
      <Header>Header</Header>
      <Content>
        <Row>
          <Col xs={{ span: 20, offset: 2 }} lg={{ span: 8, offset: 8 }}>
            <SignUpForm />
          </Col>
        </Row>
      </Content>
      <Footer>Footer</Footer>
    </Layout>
  );
};

export default Signup;
