import React, { FunctionComponent, useState } from "react";

const App: FunctionComponent = () => {
    // const name: string = "React";
    const [name, setName] = useState<String>('name');

    return (
        <h1>Bonjour, {name}!</h1>
    )
}

export default App;

/* 
import React from "react";

export default class App extends React.Component {
    const name: string = "React";
 
    render() {
        return ( <h1>Bonjour, {name}!</h1> );
    }
}
*/