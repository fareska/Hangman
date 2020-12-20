import React, { Component } from 'react'

class Solution extends Component {
    render() {

        let underScores = ['_ ', '_ ', '_ ', '_ ']
        let hint = 'Hint'

        return (
            <div id="Solution">
                {underScores.map(u=> <i>{u}</i>)}
                <h5>Hint:{hint}</h5>
            </div>
        )
    }
}

export default Solution
