import {
  ConnectionHandler,
  RecordProxy,
} from "relay-runtime";

import {
  addOneUpdaterArgs,
  addUpdaterArgs,
  deleteUpdaterArgs,
} from "./Relay.interface";

/**
 *
 * This class is in charge of updating the store.
 *
 */
export class RelayService {
  /**
   * This method add a record to a particular edge in the store
   */
  static onAddOneUpdater({
    store,
    connectionId,
    payload,
    edgeType,
    insertionType,
  }: addOneUpdaterArgs) {
    const connection = store.get(connectionId);

    if (connection) {
      const newEdge: RecordProxy<any> = ConnectionHandler.createEdge(
        store,
        connection,
        payload,
        edgeType
      );
      if (insertionType && insertionType === "Before") {
        ConnectionHandler.insertEdgeBefore(connection, newEdge);
      } else {
        ConnectionHandler.insertEdgeAfter(connection, newEdge);
      }
    }
  }

  static onDeleteUpdater({
    store,
    connectionId,
    deletedId,
  }: deleteUpdaterArgs) {
    const connection = store.get(connectionId);
    if (connection) {
      ConnectionHandler.deleteNode(connection, deletedId);
    }
  }
  /**
   * This method add a list of objects to the a particular edge in the store
   */
  static onAddUpdater({
    store,
    connectionId,
    payload,
    edgeType,
    insertionType,
  }: addUpdaterArgs) {
    const connection = store.get(connectionId);

    if (connection) {
      payload.forEach((node) => {
        const newEdge: RecordProxy<any> = ConnectionHandler.createEdge(
          store,
          connection,
          node,
          edgeType
        );
        if (insertionType && insertionType === "Before") {
          ConnectionHandler.insertEdgeBefore(connection, newEdge);
        } else {
          ConnectionHandler.insertEdgeAfter(connection, newEdge);
        }
      });
    }
  }
}
