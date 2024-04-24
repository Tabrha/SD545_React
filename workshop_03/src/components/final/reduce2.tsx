
import { FormEvent, useReducer } from 'react';

const initialState = {
  username: '',
  password: '',
  error: '',
  isLoggedIn: false
};

type StateType = {
  username: string;
  password: string;
  error: string;
  isLoggedIn: boolean;
};

const USERNAME = 'USERNAME';
const PASSWORD = 'PASSWORD';
const ERROR = 'ERROR';
const IS_LOGGED_IN = 'IS_LOGGED_IN';

type ActionType =
  | { type: typeof USERNAME; payload: string }
  | { type: typeof PASSWORD; payload: string }
  | { type: typeof ERROR; payload: string }
  | { type: typeof IS_LOGGED_IN; payload: boolean };

const reducer = (state: StateType, action: ActionType): StateType => {
  switch (action.type) {
    case USERNAME:
      return { ...state, username: action.payload };
    case PASSWORD:
      return { ...state, password: action.payload };
    case ERROR:
      return { ...state, error: action.payload };
    case IS_LOGGED_IN:
      return { ...state, isLoggedIn: action.payload };
    default:
      return state;
  }
};

const LoginUseReducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { username, password, error, isLoggedIn } = state;

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch({ type: ERROR, payload: '' });
    try {
      await new Promise((resolve, reject) => {
        setTimeout(() => {
          if (username === 'user' && password === 'pwd123') {
            resolve('success');
          } else {
            reject('fail');
          }
        }, 1000);
      });
      dispatch({ type: IS_LOGGED_IN, payload: true });
    } catch (error) {
      dispatch({ type: ERROR, payload: 'Incorrect username or password!' });
      dispatch({ type: USERNAME, payload: '' });
      dispatch({ type: PASSWORD, payload: '' });
    }
  };

  return (
    <div className='App'>
      <div className='login-container'>
        {isLoggedIn ? (
          <>
            <h1>Welcome {username}!</h1>
            <button onClick={() => dispatch({ type: IS_LOGGED_IN, payload: false })}>Log Out</button>
          </>
        ) : (
          <form className='form' onSubmit={onSubmit}>
            {error && <p className='error'>{error}</p>}
            <p>Please Login!</p>
            <input
              type='text'
              placeholder='username'
              value={username}
              onChange={(e) => dispatch({ type: USERNAME, payload: e.currentTarget.value })}
            />
            <input
              type='password'
              placeholder='password'
              autoComplete='new-password'
              value={password}
              onChange={(e) => dispatch({ type: PASSWORD, payload: e.currentTarget.value })}
            />
            <button className='submit' type='submit'>Log In</button>
          </form>
        )}
      </div>
    </div>
  );
};

export default LoginUseReducer;
