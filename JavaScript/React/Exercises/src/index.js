import React from 'react'
import ReactDOM from 'react-dom'

import First from './Components/First'
import Greetings from './Components/Greetings'
import {GoodMorning, GoodEvening} from './Components/Multiples'
import Class from './Components/Class'
import Pai from './Components/Pai'
import Filho from './Components/Filho'

//const head = <h1>React Head</h1>

ReactDOM.render(<div>
        <First /> 
        <Greetings name="Gabriel" /> 
        <GoodMorning name="Gabriel" />
        <GoodEvening name="Gabriel" />
        <Class type="Welcome" name="Gabriel" />
        <Pai name="Juninho" surname="Junior">
            <Filho name="Jones" />
            <Filho />
            <Filho name="James" />
        </Pai>
    </div>, document.getElementById('root'))