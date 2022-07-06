import React from "react";
import MainContainer from "./components/MainContainer";
import './App.css';
import { ApolloProvider, ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import CountdownTimer from "./components/pages/Home";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from "react-bootstrap";

const httpLink = createHttpLink({
  uri: 'http://localhost:3001/graphql',
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});


const App = () => { 
  return (
    <ApolloProvider client={client}>
    <Container>
    <MainContainer />
    </Container>
    </ApolloProvider>

  )
 
} 


 function Timer() {
    return (
      <div>
       <CountdownTimer
       countdownTimestampMs={1659983662000}/>
        {/* <Footer/> */}
      </div>
    );
  }
  
export default App;