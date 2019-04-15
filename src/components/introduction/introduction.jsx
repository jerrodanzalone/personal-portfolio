import React, {Component} from 'react';
import './introduction.css';
import Avatar from 'material-ui/Avatar';


class IntroductionComponent extends Component {
    render() {
        return (
          <div className="introduction">
            <Avatar src="avatar.jpg" size={150}/>
            <p className="introduction-text">
              Loves coding, reading, and all the animals.
              May 2019 M.S. in MIS Graduate from the University of Nebraska.
              Development enthusiast located in the middle of the United States (Omaha, Nebraska).
            </p>
          </div>
        );
    }
}

export default IntroductionComponent;
