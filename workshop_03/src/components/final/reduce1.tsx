import { FormEvent, useState } from 'react';



// channge the usestate to useReducer

// take the rules
/**
 * 1.initial state
 * 2. reducer function(state, action )
 *    action=( all the set...   set..  )
 * 3. const [state, dispatch] = useReducer(reducer, initial state)
 * 4. call dispatch
 * 
 * 5. use object to represent the values
 * 
 * 
 * @returns 
 */

// type StateType = {
//     username: string,
//     password: string,
//     error: string,
//     isLoggedIn: boolean
// }

// type ActionType = {
//     type: string,
//     payload: StateType
// }

// const initialState: StateType = {
//     username: "",
//     password: "",
//     error: "",
//     isLoggedIn: false
// }

// function reducer(state: StateType, action: ActionType) {
//     const { type, payload } = action;
//     switch (type) {
//         case 'USERNAME':
//             return { ...state, username: payload.username }
//         case 'PASSWORD':
//             return { ...state, password: payload.password }
//         case 'ERROR':
//             return { ...state, error: payload.error }
//         case 'IS_LOGGED_IN':
//             return { ...state, isLoggedIn: payload.isLoggedIn }
//         default:
//             return initialState;
//     }

// }
// export default function LoginUseState() { // loginUseReducer
//     // const [username, setUsername] = useState('');
//     // const [password, setPassword] = useState('');
//     const [state, dispatch] = useReduce(reducer, initialState)
//     const [username, password, error, isLoggedIn ] = state;


//     // const [error, setError] = useState('');
//     // const [isLoggedIn, setIsLoggedIn] = useState(false);
//     const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
//         e.preventDefault();
//         // setError('');
//         dispatch({type:error, payload:''});
//         try {
//             await new Promise((resolve, reject) => {
//                 setTimeout(() => {
//                     if (username === 'user' && password === 'pwd123') {
//                         resolve('success');
//                     } else {
//                         reject('fail');
//                     }
//                 }, 1000);
//             });
//        // setIsLoggedIn(true);
//             dispatch({type: isLoggedIn, payload:true});
//         } catch (error) {
//             dispatch({ type: error, payload: 'Incorrect username or password!' });
//             dispatch({ type: username, payload: '' });
//             dispatch({ type: password, payload: '' });

//             // setError('Incorrect username or password!');
//             // setUsername('');
//             // setPassword('');


//         }
//     };
//     return (
//         <div className='App'>
//             <div className='login-container'>
//                 {isLoggedIn ? (
//                     <>
//                         <h1>Welcome {username}!</h1>
                       
//                         {/* <button onClick={() => setIsLoggedIn(false)}>Log Out</button> */}
//                         <button onClick={() => dispatch({ type: 'IS_LOGGED_IN', payload:{...state, isLoggedIn:false}})}>Log Out</button>            
//             </>
//             ) : (
//             <form className='form' onSubmit={onSubmit}>
//                 {error && <p className='error'>{error}</p>}
//                 <p>Please Login!</p>
//                 <input
//                     type='text'
//                     placeholder='username'
//                     value={username}
//                     // onChange={(e) => setUsername(e.currentTarget.value)}
//                     onChange={(e) => dispatch({ type: 'USERNAME', payload: { ...state, username: e.currentTarget.value } })}
//                 />
//                 <input
//                     type='password'
//                     placeholder='password'
//                     autoComplete='new-password'
//                     value={password}
//                     // onChange={(e) => setPassword(e.currentTarget.value)}
//                     onChange={(e) => dispatch({ type: 'PASSWORD', payload: { ...state, password: e.currentTarget.value } })}
//                 />
//                 <button className='submit' type='submit'>Log In</button>
//             </form>
//                 )}
//         </div>
//         </div >
//     );
// }

// function useReduce(reduce: any, initialState: { username: string; password: string; error: string; isLoggedIn: boolean; }): [any, any] {
//     throw new Error('Function not implemented.');
// }
type StateType = {
    username: string,
    password: string,
    error: string,
    isLoggedIn: boolean
}

type ActionType = {
    type: string,
    payload: StateType
}

const initialState: StateType = {
    username: "",
    password: "",
    error: "",
    isLoggedIn: false
}

function reducer(state: StateType, action: ActionType) {
    const { type, payload } = action;
    switch (type) {
        case 'USERNAME':
            return { ...state, username: payload.username }
        case 'PASSWORD':
            return { ...state, password: payload.password }
        case 'ERROR':
            return { ...state, error: payload.error }
        case 'IS_LOGGED_IN':
            return { ...state, isLoggedIn: payload.isLoggedIn }
        default:
            return initialState;
    }

}
export default function loginUseReducer() { 
    
    const [state, dispatch] = useReduce(reducer, initialState)
    const [username, password, error, isLoggedIn ] = state;


    
    const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
       
        dispatch({type:error, payload:''});
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
      
            dispatch({type: isLoggedIn, payload:true});
        } catch (error) {
            dispatch({ type: error, payload: 'Incorrect username or password!' });
            dispatch({ type: username, payload: '' });
            dispatch({ type: password, payload: '' });

          


        }
    };
    return (
        <div className='App'>
            <div className='login-container'>
                {isLoggedIn ? (
                    <>
                        <h1>Welcome {username}!</h1>
                       
                     
                        <button onClick={() => dispatch({ type: 'IS_LOGGED_IN', payload:{...state, isLoggedIn:false}})}>Log Out</button>            
            </>
            ) : (
            <form className='form' onSubmit={onSubmit}>
                {error && <p className='error'>{error}</p>}
                <p>Please Login!</p>
                <input
                    type='text'
                    placeholder='username'
                    value={username}
                   
                    onChange={(e) => dispatch({ type: 'USERNAME', payload: { ...state, username: e.currentTarget.value } })}
                />
                <input
                    type='password'
                    placeholder='password'
                    autoComplete='new-password'
                    value={password}
                  
                    onChange={(e) => dispatch({ type: 'PASSWORD', payload: { ...state, password: e.currentTarget.value } })}
                />
                <button className='submit' type='submit'>Log In</button>
            </form>
                )}
        </div>
        </div >
    );
}

function useReduce(reduce: any, initialState: { username: string;
     password: string; 
     error: string;
      isLoggedIn: boolean; }): [any, any] {
    throw new Error('Function not implemented.');
}


