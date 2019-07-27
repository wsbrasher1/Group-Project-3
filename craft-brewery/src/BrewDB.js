import React, {Component} from 'react';


const API_KEY = process.env.REACT_APP_BREWERYDB_API_KEY;
const urlForUsersearch = usersearch =>
    `https://api.brewerydb.com/v2/${usersearch}/?key=API_KEY`

class BreweryDB extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    componentDidMount() {
        fetch(urlForUsersearch(this.props.usersearch))
        .then(data => data.json())
        .then(data => {
            this.setState({
                brewerydbData: data
            })
        })
    }

    render() {
        return (
            <div>
                <p>Loading up....</p>
            </div>
        )
    }
}

export default BreweryDB;