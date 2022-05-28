import React from 'react';
import FetchGetCounter from './components/FetchGetCounter';
import $ from 'jquery';


class App extends React.Component {
    
    state = {
        fbCount: null
    }

    shareUrl = 'https://belyash.github.io';

    SocialShares = {
      fb: {
        url: "https://graph.facebook.com/?id=",
        callback: function (data) {
          console.log("fb", data);
          if (data && data.shares) {
            this.count = data.shares;
          } else {
            this.count = 0;
          }
        },
        share: "https://www.facebook.com/sharer/sharer.php?u="
      },
      tw: {
        url: "https://cdn.api.twitter.com/1/urls/count.json?url=",
        callback: function (data) {
          console.log("tw", data);
          if (data && data.count) {
            this.count = data.count;
          } else {
            this.count = 0;
          }
        },
        share: "https://twitter.com/intent/tweet?url="
      }  
    };
  

  helperFunction = (SocialShares, shareUrl) => {
    $('[data-social]').each(function () {
      var $this = $(this),
        social = $this.data('social'),
        oSocial;
      if (SocialShares.hasOwnProperty(social)) {
        oSocial = SocialShares[social];
  
        console.log(oSocial.url)
        if (oSocial.url) {
          $.getScript(
            oSocial.url + shareUrl + "&callback=SocialShares." + social + ".callback",
            function(data, textStatus, jqxhr) {
              $this.attr("data-count", oSocial.count);
            }
          );
        }
        
        if (oSocial.share) {
          $this.on("click", function () {
            window.open(
              oSocial.share + shareUrl, 
              '', 
              'menubar=no,toolbar=no,resizable=yes' + 
              ',scrollbars=yes' +
              ',height=300,width=600'
            );
          });
        }
      }
    });
  }

  componentDidMount(){
    if(this.shareUrl !== undefined && this.SocialShares !== undefined){
      this.helperFunction(this.SocialShares,this.shareUrl);
    }
  }

  render() {
    if (this.SocialShares === undefined) {
      return (
        <div>Nothing</div>
      );
    }
    else {
      return (
           <FetchGetCounter id="text" >
            <div className="social">
              <div className="social__item">
                <span className="fa fa-facebook" data-count="..." data-social="fb">facebook</span>
              </div>
            </div>
          </FetchGetCounter>
      );
    }
  }
}

export default App;
