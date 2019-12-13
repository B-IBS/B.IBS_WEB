import { useStore } from './useStore';

export const useDefaultStore = () => {
  // @ts-ignore
  const { state, dispatch } = useStore();

  return {
    login: state.loginToken,
    logged: state.logged,
    updateLogin: (newLogin: String) => dispatch({ type: 'updateLogin', loginToken: newLogin }),
    resetDefaultState: () => dispatch({ type: 'resetDefaultState' }),
  };
};

export default useDefaultStore;
