import React, {Component} from 'react';
import {
    Card,
    CardHeader,
    CardText
} from 'material-ui/Card';
import Chip from 'material-ui/Chip';
import './timeline.css';

class TimelineComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
          expanded1: false,
          expanded2: false,
          expanded3: false
        };
    }

    async componentDidMount() {}

    componentWillUnmount() {}

    handleExpandChange = (expanded1) => {
      this.setState({expanded1: expanded1});
    };

    handleExpandChange2 = (expanded2) => {
      this.setState({expanded2: expanded2});
    };

    handleExpandChange3 = (expanded3) => {
      this.setState({expanded3: expanded3});
    };

    handleExpand = () => {
      this.setState({expanded: true});
    };

    handleExpand2 = () => {
      this.setState({expanded2: true});
    };

    handleExpand3 = () => {
      this.setState({expanded3: true});
    };

    handleReduce = () => {
      this.setState({expanded1: false});
    };

    handleReduce2 = () => {
      this.setState({expanded2: false});
    };

    handleReduce3 = () => {
      this.setState({expanded3: false});
    };
    render() {
        return (
            <div className="timeline">
              <p className="headline">Working experience</p>
                <div className="timeline-entry">
                  <Card expanded={this.state.expanded1} onExpandChange={this.handleExpandChange}>
                        <CardHeader title="Development Lead" subtitle="University of Nebraska"
                          actAsExpander={true} showExpandableButton={true}/>
                        <CardText expandable={true}>
                            Spring 2019. University of Nebraska MIS Capstone.
                            <br/><br/>
                              <div className="timeline-entries">
                                <div className="timeline-entry-chip">
                                  <Chip>Python</Chip>
                                </div>
                                <div className="timeline-entry-chip">
                                  <Chip>Django, Wagtail</Chip>
                                </div>
                                <div className="timeline-entry-chip">
                                  <Chip>Heroku</Chip>
                                </div>
                                <div className="timeline-entry-chip">
                                  <Chip>Amazon Web Services</Chip>
                                </div>
                                <div className="timeline-entry-chip">
                                  <Chip>Google Maps API</Chip>
                                </div>
                                <div className="timeline-entry-chip">
                                  <Chip>HTML, CSS, Bootstrap</Chip>
                                </div>
                                <div className="timeline-entry-chip">
                                  <Chip>Github, Zenhub</Chip>
                                </div>
                              </div>
                        </CardText>
                    </Card>
                </div>
                  <div className="timeline-entry">
                    <Card expanded={this.state.expanded2} onExpandChange={this.handleExpandChange2}>
                        <CardHeader title="Lead Optician" subtitle="University of Nebraska Medical Center"
                          actAsExpander={true} showExpandableButton={true}/>
                        <CardText expandable={true}>
                            August 2011 - Present. Truhlsen Eye Institute.
                            <br/><br/>
                              <div className="timeline-entries">
                                <div className="timeline-entry-chip">
                                  <Chip>Microsoft Office, Access</Chip>
                                </div>
                                <div className="timeline-entry-chip">
                                  <Chip>Epic/One Chart</Chip>
                                </div>
                                <div className="timeline-entry-chip">
                                  <Chip>E-Z Frame</Chip>
                                </div>
                                <div className="timeline-entry-chip">
                                  <Chip>Filemaker Pro</Chip>
                                </div>
                                <div className="timeline-entry-chip">
                                  <Chip>Adobe Creative Suite</Chip>
                                </div>
                                <div className="timeline-entry-chip">
                                  <Chip>SAS, Concur</Chip>
                                </div>
                              </div>
                        </CardText>
                    </Card>
                  </div>
                  <div className="timeline-entry">
                  <Card expanded={this.state.expanded3} onExpandChange={this.handleExpandChange3}>
                      <CardHeader title="Technology Support Assistant" subtitle="University of Nebraska"
                        actAsExpander={true} showExpandableButton={true}/>
                      <CardText expandable={true}>
                          January 2009 - August 2011. College of Education, UNO.
                          <br/><br/>
                          <div className="timeline-entries">
                            <div className="timeline-entry-chip">
                              <Chip>Windows XP/7/10</Chip>
                            </div>
                            <div className="timeline-entry-chip">
                              <Chip>Apple OS X</Chip>
                            </div>
                            <div className="timeline-entry-chip">
                              <Chip>iMovie</Chip>
                            </div>
                            <div className="timeline-entry-chip">
                              <Chip>VMWare</Chip>
                            </div>
                            <div className="timeline-entry-chip">
                              <Chip>A/V Equipment</Chip>
                            </div>
                            <div className="timeline-entry-chip">
                              <Chip>Dreamweaver</Chip>
                            </div>
                            <div className="timeline-entry-chip">
                              <Chip>SPSS</Chip>
                            </div>
                          </div>
                      </CardText>
                  </Card>
                </div>
                <div className="timeline-entry">
                  <Card expanded={this.state.expanded4} onExpandChange={this.handleExpandChange4}>
                      <CardHeader title="Graduate Student" subtitle="University of Nebraska"
                        actAsExpander={true} showExpandableButton={true}/>
                      <CardText expandable={true}>
                          M.S. in MIS from the University of Nebraska, May 2019.

                          <div className="timeline-entries">
                            <div className="timeline-entry-chip">
                              <Chip>Data Management</Chip>
                            </div>
                            <div className="timeline-entry-chip">
                              <Chip>Data Analysis</Chip>
                            </div>
                            <div className="timeline-entry-chip">
                              <Chip>Systems Analysis & Design</Chip>
                            </div>
                          </div>
                      </CardText>
                  </Card>
                </div>
            </div>
        );
    }
}

export default TimelineComponent;
