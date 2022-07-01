import {
  AddCounterAction,
  CounterActionTypes,
  DecrementCounterAction,
  DeleteCounterAction,
  IncrementCounterAction,
} from "../../models/CounterModel";

export const addCounterAction = (): AddCounterAction => ({
  type: CounterActionTypes.ADD_COUNTER,
});

export const deleteCounterAction = (payload: number): DeleteCounterAction => ({
  type: CounterActionTypes.DELETE_COUNTER,
  payload,
});

export const incrementCounterAction = (
  payload: number
): IncrementCounterAction => ({
  type: CounterActionTypes.INCREMENT_COUNTER,
  payload,
});

export const decrementCounterAction = (
  payload: number
): DecrementCounterAction => ({
  type: CounterActionTypes.DECREMENT_COUNTER,
  payload,
});
