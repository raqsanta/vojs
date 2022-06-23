import react from 'react'
import {render} from 'react-dom'

const App = () => {

    return(
        <a>
            Main Screen
        </a>
    )

}

const appDiv = document.getElementById('app')
render(<App />, appDiv)

export default App;