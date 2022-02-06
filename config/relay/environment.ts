/* eslint-disable @typescript-eslint/no-unnecessary-type-assertion */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import {
  API_HOST,
  HASURA_ADMIN_KEY,
} from "_constants/index";
import Router from "next/router";
import {
  Environment,
  Network,
  RecordSource,
  Store,
} from "relay-runtime";

const fetchQuery = async (params: any, variables: any) => {
  try {
    // const token: string = getAccessToken();

    const response = await fetch(`https://${API_HOST}/v1beta1/relay`, {
      method: "POST",
      headers: {
        // Authorization: `Bearer ${token}`,
        "x-hasura-admin-secret": HASURA_ADMIN_KEY || "",
      },
      body: JSON.stringify({
        query: params?.text,
        variables,
      }),
    });

    const result = await response?.json();

    if (result.errors) {
      throw result.errors;
    }
    return result;
  } catch (error) {
    await Router.push({
      pathname: "500",
      query: {
        errorCode: (error as any)[0].extensions.code as any,
        errorMessage: (error as any)[0].message,
      },
    });
    throw error;
  }
};

export default new Environment({
  network: Network.create(fetchQuery),
  store: new Store(new RecordSource()),
});
