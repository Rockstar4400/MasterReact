import React from 'react';
import FetchGetCounter from './components/FetchGetCounter';

class App extends React.Component {
  
    state = {
        qoutes: null
    }

componentDidMount(){

    fetch(
          "https://gist.githubusercontent.com/Rockstar4400/" +
          "7678c57b0cebc5f740973ecb7a2691d0/raw/2daef0c7cdd39460787b086bb5af6166ebd56d2f/" +
          "quotes.json"
      )
        .then((response) => response.json())
        .then((data) =>
          this.setState({
            quotes: data.quotes,
          })
        );
  }

  render() {
    var countUp, setCount, url;
    const quotes = this.state.quotes;
    if (quotes == null) {
      return (
          <FetchGetCounter id="text" message={"No quote"} />
      );
    }
    else {
      const listItems = quotes.map((quote) => (
        <figure
          key={quote.quote}
          author={quote.author}
          house={quote.house}
          className="card-body"
        >
          <blockquote>{quote.quote}</blockquote>
          <blockquote>{quote.author}</blockquote>
        </figure>
      ));

      return (
           <FetchGetCounter id="text" message={listItems} />
      );
    }
  }
}

export default App;
