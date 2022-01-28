import {
  API_HOST,
  HASURA_ADMIN_KEY,
} from '_constants/index';
import {
  Environment,
  Network,
  RecordSource,
  Store,
} from 'relay-runtime';

const fetchQuery = async (params:any, variables:any) => {
    try {
        const response = await fetch(`https://${API_HOST}/v1beta1/relay`,{
            method:"POST",
            headers:{
                "x-hasura-admin-secret":HASURA_ADMIN_KEY || ''
            },
            body: JSON.stringify({
                query: params.text,
                variables,
            }),
        })
    
        const result = await response?.json();
        console.log("fetchQuery result:", result);
        return result;
    } catch (error) {
        console.log('fetchQuery catch error:', { error });
    }

}

export default new Environment({
    network: Network.create(fetchQuery),
    store: new Store(new RecordSource()),
  });