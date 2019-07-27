import React, {Component} from 'react';

const API_KEY = process.env.REACT_APP_BREWERYDB_API_KEY;
const urlForUsersearch = usersearch =>
    `https://api.brewerydb.com/v2/${usersearch}/?key=${API_KEY}`;

const urlForLocation = locationZip =>
    `https://api.brewerydb.com/v2/location/?postalCode=${locationZip}&key=92d341b4fae6f216a0f4c979d51501cd`;

class BreweryDB extends Component {
    constructor(props) {
        super(props)
        this.state = {
            brewerydbData: null
        };
    }

    componentDidMount() {
        // fetch(urlForUsersearch(this.props.usersearch))
        fetch('/api/randomBrewery')
            .then(data => data.json())
            .then(data => {
                this.setState({
                    brewerydbData: data
                })
            });
    }

    render() {
        return (
            <div>
                {this.state.brewerydbData 
                    ? (<h3>{this.state.brewerydbData.name}</h3>) 
                    : (<p>Loading up....</p>)}
            </div>
        )
    }
}

export default BreweryDB;