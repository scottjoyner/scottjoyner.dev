/* This is an example snippet - you should consider tailoring it
to your service.
*/
/*
  Add these to your `package.json`:
    "apollo-boost": "^0.3.1",
    "graphql": "^14.2.1",
    "graphql-tag": "^2.10.0",
    "react-apollo": "^2.5.5"
*/

import gql from "graphql-tag";
import React from "react";
import ReactDOM from "react-dom";
import { ApolloClient, InMemoryCache, HttpLink } from "apollo-boost";
import { Mutation, ApolloProvider } from "react-apollo";

// This setup is only needed once per application;
const apolloClient = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri: "undefined",
  }),
});

const ADD_TRAFFIC_LOG_MUTATION = gql`
  mutation AddTrafficLog($city: String = "", $ip: String = "", $hostname: String = "", $created_at: timestamptz = "", $country: String = "", $loc: String = "", $org: String = "", $postal: String = "", $region: String = "", $timezone: String = "") {
    insert_trafficLog_one(object: {city: $city, country: $country, created_at: $created_at, hostname: $hostname, ip: $ip, loc: $loc, org: $org, postal: $postal, region: $region, timezone: $timezone}) {
      id
      visitorNumber
      ip
    }
  }
`;

const AddTrafficLogMutation = (props) => {
  return (
    <Mutation
      mutation={ADD_TRAFFIC_LOG_MUTATION}>
      {(AddTrafficLog, { loading, error, data }) => {
        if (loading) return <pre>Loading</pre>

        if (error)
          return (
            <pre>
              Error in ADD_TRAFFIC_LOG_MUTATION
              {JSON.stringify(error, null, 2)}
            </pre>
          );

        const dataEl = data ? (
          <pre>{JSON.stringify(data, null, 2)}</pre>
        ) : null;

        return (
          <div>
            {dataEl}

            <button onClick={() => AddTrafficLog({"city": city, "ip": ip, "hostname": hostname, "created_at": created_at, "country": country, "loc": loc, "org": org, "postal": postal, "region": region, "timezone": timezone})}>
              Run mutation: AddTrafficLog
            </button>
          </div>
        );
      }}
    </Mutation>
  )
};

const container = (
  <ApolloProvider client={apolloClient}>
    <AddTrafficLogMutation city={city} ip={ip} hostname={hostname} created_at={created_at} country={country} loc={loc} org={org} postal={postal} region={region} timezone={timezone} />
  </ApolloProvider>
);

ReactDOM.render(container, document.getElementById("root"));
