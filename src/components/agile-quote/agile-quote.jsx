import React, {Component} from 'react';
import './agile-quote.css';


class AgileQuoteComponent extends Component {

    render() {
        return (
          <div className="agile-quote">
            <p className="quote">
              <span className="quote-marks">&ldquo;</span>
              <span className="quote-content">
                I want to stand as close to the edge
                as I can without going over. Out on the
                edge you see all kinds of things you
                can't see from the center.
              </span>
              <span className="quote-author">- Kurt Vonnegut, <i>Player Piano</i></span>
            </p>
          </div>
        );
    }
}

export default AgileQuoteComponent;
