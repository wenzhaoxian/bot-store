import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import GlobalStyle from 'style/GlobalStyle';
import styled from 'styled-components';

import Nav from 'components/Nav';
import { Story, Game, Dapp, Bot, Search } from 'pages';

class App extends Component {
    render() {
        return (
            <>
                <GlobalStyle />
                <Nav />
                <Main>
                    <Switch>
                        <Route exact path="/" component={Story} />
                        <Route path="/game" component={Game} />
                        <Route path="/dapp" component={Dapp} />
                        <Route path="/bot" component={Bot} />
                        <Route path="/search" component={Search} />
                    </Switch>
                </Main>
            </>
        );
    }
}

const Main = styled.main`
    & > section {
        position: relative;
        max-width: 1024px;
        height: 100vh;
        overflow-y: scroll;
        margin: 0 auto;
        padding: 0 1rem 80px;
        box-sizing: border-box;
        animation: trigger 0.5s;

        @media (min-width: 1024px) {
            & {
                /* background-color: red; */
            }
        }

        @keyframes trigger {
            from {
                opacity: 0;
            }
            to {
                opacity: 1;
            }
        }
    }
`;

export default App;
