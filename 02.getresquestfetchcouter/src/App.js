import React from 'react';
import FetchGetCounter from './components/FetchGetCounter';

class App extends React.Component {
  
    state = {
        fbCount: null
    }

componentDidMount(){
    const url = 'https://codesignal.com';
    fetch(
        `https://graph.facebook.com/?id=`
      )
        .then((response) => response.json())
        .then((data) =>
          this.setState({
            fbCount: data.shares,
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
