

import { ReactNode, useState} from 'react';

type Props = {
  age: number;
  name: string;
  isLoggedIn: boolean;
  fruits: string[];
  person: {
    firstName: string;
    lastName: string
  },
  callback: () => void;
  child: ReactNode
}

function Son(props: Props) {
  const { age, name, isLoggedIn, fruits, person, callback, child } = props;

  return (
    <div>
      <h4>This is a Son componenet!</h4>
      <span>age:{age}</span>
      <span>isLoggedIn:{isLoggedIn}</span>
      <span>fruits:{fruits}</span>
      <span>person:{person.firstName},
        {person.lastName}</span>

    </div>
  )
}

//parent to child
//1. bind data as customized HTML attribute on the child component
//2.in the child component via props
// React.strictMod is allowing to print the App componenet only one time
function App() {
  return (
    <div className="App">
      <Son age={20}
        name='John'
        isLoggedIn={true}
        fruits={['banana', 'apple']}
        person={{ firstName: 'john', lastName: 'smith'}}
        callback={() => console.log('callback passed to Son from APP!')}
        child={ <span>Hello</span>}
        />
    </div>
  );
}

export default App;