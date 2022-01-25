import React from 'react';
import Header from './Header';
import Navigation from './Navigation';
import styled from 'styled-components';

const Wrapper = styled.div`
    /* This is apply this design for screen above 700px */
    @media (min-width: 700px) {
        display: flex;
        flex: auto;
        flex-direction: column;
        width: 100%;
        height: calc(100% - 64px);
        position: relative;
        top: 64px;
    }
`;

const Main = styled.main`
    position: fixed;
    height: calc(100% - 185px);
    width: 100%;
    padding: 1rem;
    overflow-x: hidden;
    overflow-y: auto;
    /* Apply this to screen size above 700px */
    @media (min-width: 700px) {
        margin-left: 220px;
        flex: 1;
        width: calc(100% - 220px);
        height: calc(100% - 64px);
    }
`;

const Layout = ({ children }) => {
    return(
        <React.Fragment>
            <Header />
            <Wrapper>
                <Navigation />
                <Main>{children}</Main>
            </Wrapper>
        </React.Fragment>
    );
};

export default Layout;