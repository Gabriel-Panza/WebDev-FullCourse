import React, {Component} from 'react'

export default class Class extends Component{
    state = {
        type: this.props.type,
        name: this.props.name
    }
    setType(e) {
        this.setState({ type: e.target.value })
    }
    setName(e) {
        this.setState({ name: e.target.value })
    }

    render() {
        const {type,name} = this.state

        return (
            <div>
                <h2>{type} {name}!</h2>
                <hr />
                <input type="text" placeholder="Type..." 
                    value={type} onChange={e => this.setType(e)} />
                <input type="text" placeholder="Name..." 
                    value={name} onChange={e => this.setName(e)} />
                <hr />
            </div>
        )
    }
}