import {
  CounterAction,
  CounterActionTypes,
  DecrementCounterAction,
  ICounterItem,
  IncrementCounterAction,
} from "../../models/CounterModel";

const initialState: ICounterItem[] = [];

const mutateCounter = (
  counter: ICounterItem,
  action: IncrementCounterAction | DecrementCounterAction
) => {
  if (counter.id !== action.payload) {
    return counter;
  }
  switch (action.type) {
    case CounterActionTypes.INCREMENT_COUNTER:
      return { ...counter, value: counter.value + 1 };
    case CounterActionTypes.DECREMENT_COUNTER:
      return { ...counter, value: counter.value - 1 };
    default:
      return counter;
  }
};

const markEveryNth = (arr: ICounterItem[], nth: number) => {
  const result = [...arr].map((item, index) => {
    const i = index === 0 ? index : index + 1;
    if (index !== 0 && i % nth === 0) {
      return { ...item, nth: true };
    }
    return item;
  });
  return result;
};

const counterReducer = (
  state = initialState,
  action: CounterAction
): ICounterItem[] => {
  switch (action.type) {
    case CounterActionTypes.ADD_COUNTER:
      const nth = 4;
      const id = state.length > 0 ? state[state.length - 1].id + 1 : 1;
      const total = state.reduce((n, item) => n + item.value, 0);
      const newCounter: ICounterItem = { id, value: total, nth: false };
      return markEveryNth([...state, newCounter], nth);
    case CounterActionTypes.DELETE_COUNTER:
      return [...state].filter((counter) => counter.id !== action.payload);
    case CounterActionTypes.INCREMENT_COUNTER:
      return [...state].map((counter) => mutateCounter(counter, action));
    case CounterActionTypes.DECREMENT_COUNTER:
      return [...state].map((counter) => mutateCounter(counter, action));
    default:
      return state;
  }
};

export default counterReducer;
