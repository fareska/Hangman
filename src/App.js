import logo from './logo.svg'
import './App.css'

import Solution from './components/Solution'
import Score from './components/Score'
import Letters from './components/Letters'
import Letter from './components/Letter'

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <div>
                    <Score />
                    <Solution />
                    <Letters />
                    <Letter />
                </div>
            </header>
        </div>
    )
}

export default App
