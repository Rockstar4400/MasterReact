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

     const quotes = this.state.quotes;
     console.log(quotes)
      
    // const listItems = quotes.map((quote) => (
    //     <figure
    //       key={quote.quote}
    //       author={quote.author}
    //       house={quote.house}
    //       className="card-body"
    //     >
    //       <blockquote>{quote.quote}</blockquote>
    //     </figure>
    //   ));
    //   const max = this.props.quotes.length - 1;
    //   const random = Math.floor(Math.random() * (max - 0 + 1)) + 0;
    // if (this.state.quotes == null) {
         return <FetchGetCounter />;
    //   } else {
    //     return <FetchGetCounter id="text" message={listItems[random].key} />;
    //   }
     }
}

export default App;
