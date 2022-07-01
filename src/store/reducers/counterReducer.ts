import {
  CounterAction,
  CounterActionTypes,
  ICounterItem,
} from "../../models/CounterModel";

const initialState: ICounterItem[] = [];

const counterReducer = (
  state = initialState,
  action: CounterAction
): ICounterItem[] => {
  switch (action.type) {
    case CounterActionTypes.ADD_COUNTER:
      const id = state.length > 0 ? state[state.length - 1].id + 1 : 1;
      const newCounter: ICounterItem = { id, value: 0 };
      return [...state, newCounter];
    case CounterActionTypes.DELETE_COUNTER:
      const counters = [...state].filter(
        (counter) => counter.id !== action.payload
      );
      return counters;
    case CounterActionTypes.INCREMENT_COUNTER:
      return [...state];
    case CounterActionTypes.DECREMENT_COUNTER:
      return [...state];
    default:
      return state;
  }
};

export default counterReducer;
