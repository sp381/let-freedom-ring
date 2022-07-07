import React from "react";
import MainContainer from "./components/MainContainer";
import './App.css';
import { ApolloProvider, ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import CountdownTimer from "./components/pages/Home";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from "react-bootstrap";
import background from "./food.jpg";

const httpLink = createHttpLink({
  uri: 'http://localhost:3001/graphql',
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});


const App = () => { 
  return (
    <div style={{ backgroundImage: `url(${background})` }}>
    <ApolloProvider client={client}>
    <Container>
    <MainContainer />
    </Container>
    </ApolloProvider>
</div>
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