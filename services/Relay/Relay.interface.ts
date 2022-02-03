import { RecordProxy, RecordSourceSelectorProxy } from 'relay-runtime';

export interface addOneUpdaterArgs {
  store: RecordSourceSelectorProxy;
  connectionId: string;
  payload: RecordProxy<any>;
  edgeType: string;
  insertionType?: 'Before' | 'After';
}

export interface addUpdaterArgs {
  store: RecordSourceSelectorProxy;
  connectionId: string;
  payload: RecordProxy<any>[];
  edgeType: string;
  insertionType?: 'Before' | 'After';
}

export interface deleteUpdaterArgs {
  store: RecordSourceSelectorProxy;
  connectionId: string;
  deletedId: string;
}
