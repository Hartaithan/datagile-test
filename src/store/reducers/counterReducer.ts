import {
  CounterAction,
  CounterActionTypes,
  DecrementCounterAction,
  ICounterItem,
  ICounterState,
  IncrementCounterAction,
} from "../../models/CounterModel";

const initialState: ICounterState = {
  index: 0,
  counters: [],
};

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

const isNth = (index: number): boolean => {
  const nth = 4;
  const i = index === 0 ? index : index + 1;
  const isNth = index !== 0 && i % nth === 0;
  return isNth;
};

const counterReducer = (
  state = initialState,
  action: CounterAction
): ICounterState => {
  const { index, counters } = state;
  switch (action.type) {
    case CounterActionTypes.ADD_COUNTER:
      const id = counters.length > 0 ? counters[counters.length - 1].id + 1 : 1;
      const total = counters.reduce((n, item) => n + item.value, 0);
      const newCounter: ICounterItem = {
        id,
        value: total,
        nth: isNth(index) ? true : false,
      };
      return {
        ...state,
        index: index + 1,
        counters: [...counters, newCounter],
      };
    case CounterActionTypes.DELETE_COUNTER:
      return {
        ...state,
        counters: [...counters].filter(
          (counter) => counter.id !== action.payload
        ),
      };
    case CounterActionTypes.INCREMENT_COUNTER:
      return {
        ...state,
        counters: [...counters].map((counter) =>
          mutateCounter(counter, action)
        ),
      };
    case CounterActionTypes.DECREMENT_COUNTER:
      return {
        ...state,
        counters: [...counters].map((counter) =>
          mutateCounter(counter, action)
        ),
      };
    default:
      return state;
  }
};

export default counterReducer;
