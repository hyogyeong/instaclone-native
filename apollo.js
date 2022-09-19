import { ApolloClient, InMemoryCache, makeVar } from "@apollo/client";

export const isLoggedInVar = makeVar(false);

const client = new ApolloClient({
    uri : "http://3.38.68.50",
    cache : new InMemoryCache(),
});

export default client;