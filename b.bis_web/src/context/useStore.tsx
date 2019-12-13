// @ts-ignore wtf ???????
import React, { createContext, useContext, useReducer } from 'react';

const initialState = {
  loginToken: '',
  logged: false,
};
const StoreContext = createContext(initialState);

interface StoreState {
  loginToken: String,
  logged: Boolean,
}

interface ActionState {
  loginToken: String,
  logged: Boolean,
  type: any
}

const reducer = (state: StoreState, action: ActionState) => {
  switch (action.type) {
    case 'updateLogin':
      return {
        loginToken: action.loginToken,
        logged: true,
      };
    case 'resetDefaultState':
      return {
        loginToken: '',
        logged: false,
      };
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};

export const StoreProvider: React.FC = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    // @ts-ignore
    <StoreContext.Provider value={{ state, dispatch }}>
      {/* eslint-disable-next-line react/destructuring-assignment,react/prop-types */}
      {props.children}
    </StoreContext.Provider>
  );
};

export const useStore = () => useContext(StoreContext);
