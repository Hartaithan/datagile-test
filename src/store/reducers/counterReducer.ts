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
      return [...state];
    case CounterActionTypes.DELETE_COUNTER:
      return [...state];
    case CounterActionTypes.INCREMENT_COUNTER:
      return [...state];
    case CounterActionTypes.DECREMENT_COUNTER:
      return [...state];
    default:
      return state;
  }
};

export default counterReducer;
