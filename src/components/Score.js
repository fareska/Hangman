import React, { Component } from 'react'

class Score extends Component {
    render() {

        let tries = 5

        return (
            <div id="Score">
                <div>{tries}</div>
            </div>
        )
    }
}

export default Score