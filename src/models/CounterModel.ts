export interface ICounterItem {
  count: number;
}

export interface ICounterState {
  counters: ICounterItem[];
}

export enum CounterActionTypes {
  ADD_COUNTER = "AddCounterAction",
  DELETE_COUNTER = "DeleteCounterAction",
  INCREMENT_COUNTER = "IncrementCounterAction",
  DECREMENT_COUNTER = "DecrementCounterAction",
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
