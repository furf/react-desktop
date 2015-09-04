import * as reducers from './reducers';

export default function(state = [], action) {
  const reducer = reducers[action.type];
  return reducer ? reducer(state, action) : state;
};

export * from './actions';
