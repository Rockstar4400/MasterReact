import React from "react";

class FetchGet extends React.Component {

    state = { quotes: null };
    
    componentDidMount(){
        fetch(
        'https://cors-anywhere.herokuapp.com/https://gist.githubusercontent.com/Rockstar4400/a1a4f83488316699885358653277d9ab/raw/fcd1aa99fc94cd533899309ecd1350b5ec19f654/quotes.json'
        )
        .then(response => response.json())
        .then(data =>  this.setState({ quotes: data.quotes }));
    }

    render() {
        const { quotes } = this.state;
        console.log(quotes)
        return (
            <div className="card text-center m-3">
                <h5 className="card-header">Simple GET Request</h5>
                <div className="card-body">
                    
                </div>
            </div>
        );
    }
}

export default FetchGet;
