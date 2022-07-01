export interface ICounterItem {
  id: number;
  value: number;
}

export interface ICounterState {
  counters: ICounterItem[];
}

export enum CounterActionTypes {
  ADD_COUNTER = "ADD_COUNTER",
  DELETE_COUNTER = "DELETE_COUNTER",
  INCREMENT_COUNTER = "INCREMENT_COUNTER",
  DECREMENT_COUNTER = "DECREMENT_COUNTER",
}

export interface AddCounterAction {
  type: CounterActionTypes.ADD_COUNTER;
}

export interface DeleteCounterAction {
  type: CounterActionTypes.DELETE_COUNTER;
  payload: number;
}

export interface IncrementCounterAction {
  type: CounterActionTypes.INCREMENT_COUNTER;
  payload: number;
}

export interface DecrementCounterAction {
  type: CounterActionTypes.DECREMENT_COUNTER;
  payload: number;
}

export type CounterAction =
  | AddCounterAction
  | DeleteCounterAction
  | IncrementCounterAction
  | DecrementCounterAction;
