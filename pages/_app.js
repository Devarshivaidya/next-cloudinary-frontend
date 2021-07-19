import '../styles/globals.css'
import React from "react";
import { ApolloProvider } from "@apollo/react-hooks";
import withData from "../utils/apollo";
import ErrorBoundary from "../components/ErrorBoundary"
function MyApp({ Component, pageProps, apollo }) {
  return (
    <ApolloProvider client={apollo}>
        <ErrorBoundary>
    <MyWidget />
  </ErrorBoundary>
      <Component {...pageProps} />
    </ApolloProvider>
    
  )
}

export default withData(MyApp)