import React from "react";

import { Container, Header, Main, Footer, Cards } from "components";
import { useAuthControllerLogin } from "api/endpoints/auth/auth";

const Home: React.FC = () => {
    return (
        <Container>
            <Header />
            <Main />
            <Cards />
            <Footer />
        </Container>
    );
};

export default Home;
