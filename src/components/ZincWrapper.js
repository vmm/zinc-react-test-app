import React, { Component } from "react";
import { Zinc } from "zinc-react-components"

class ZincWrapper extends Component {

  constructor(props) {
    super();
    this.onNewZincMessage = this.onNewZincMessage.bind(this);
    this.onZincUnreadChange = this.onZincUnreadChange.bind(this);
    this.onNewZincBroadcast = this.onNewZincBroadcast.bind(this);
    this.onNewZincCall = this.onNewZincCall.bind(this);

    this.handlePostDataChange = this.handlePostDataChange.bind(this);
    this.handlePostRouteChange = this.handlePostRouteChange.bind(this);
    this.handlePostConversationChange = this.handlePostConversationChange.bind(this);
    this.handlePostRouteMessageChange = this.handlePostRouteMessageChange.bind(this);

    this.state = {
      postData: "",
      postNavigateToData: "",
      postConversationData: "",
      incomingData: "",
      incomingNotification: ""
    }
  }

  handlePostDataChange(event) {
    this.setState({
      postData: JSON.parse(event.target.value.slice())
    });
  }

  handlePostRouteChange(event) {
    this.setState({
      postNavigateToData: JSON.parse(event.target.value.slice())
    });
  }

  handlePostConversationChange(event) {
    this.setState({
      postConversationData: JSON.parse(event.target.value.slice())
    });
  }

  handlePostRouteMessageChange(event) {
    this.setState({
      postRouteMessageData: JSON.parse(event.target.value.slice())
    });
  }

  attributes() {
    return {
      height: '600px',
      width: '600px'
    }
  }

 getAuthToken() {
    return "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ2ZWxpQHRhcGZvby5pbyIsImp0aSI6IjREMk80WWFBWmh5ZnVqSFQiLCJpYXQiOjE2NTMwNjk2MjAsImV4cCI6MTY1NDI3OTIyMCwiaXNzIjoiY29tLmNvdGFwLmFwaSIsImF1ZCI6ImNvbS5jb3RhcC5hcGkudGFsa2VyIiwiY29tLnppbmMtYXBwLnBheWxvYWQiOnsidGFsa2VyIjp7ImZpcnN0X25hbWUiOiLmr4_kuKrkurrpg73mnInku5bnmoTkvZzmiJjnrZbnlaUiLCJsYXN0X25hbWUiOiJGSVJTVCDwn5ibIn19fQ.mI5-Ku5aEW2m2zfcFOvDRE9U4Pkpz_Gqe9p3JE8Aoa0";
  }

  onNewZincMessage(payload) {
    console.log('PARENT CALLBACK -- onNewZincMessage');
    console.log(payload);
    this.setState({
      incomingNotification: JSON.stringify(payload, null, 2)
    });
  }

  onZincUnreadChange(payload) {
    console.log('PARENT CALLBACK -- onZincUnreadChange');
    console.log(payload);
    this.setState({
      incomingData: JSON.stringify(payload, null, 2)
    });
  }

  onNewZincBroadcast(payload) {
    console.log('PARENT CALLBACK -- onNewZincBroadcast');
    console.log(payload);
  }

  onNewZincCall(payload) {
    console.log('PARENT CALLBACK -- onNewZincCall');
    console.log(payload);
  }

  onZincAuthenticationError(payload) {
    console.log('PARENT CALLBACK -- onZincAuthenticationError');
    console.log(payload);
  }

  styles() {
    return { height: '300px', width: '300px' };
  }

  render() {
    return (
      <div>
        <Zinc
          iFrameAttributes={this.attributes()}
          authToken={this.getAuthToken()}
          zincEnvironment='localhost'
          timeZone='America/Los_Angeles'
          locale='fr-FR'
          // callback functions
          onNewZincMessage={this.onNewZincMessage}
          onZincUnreadChange={this.onZincUnreadChange}
          onNewZincBroadcast={this.onNewZincBroadcast}
          onNewZincCall={this.onNewZincCall}
          onZincAuthenticationError={this.onZincAuthenticationError}
          // data sent to the Zinc application
          postData={this.state.postData}
          postNavigateToData={this.state.postNavigateToData}
          postConversationData={this.state.postConversationData}
          postRouteMessageData={this.state.postRouteMessageData}
        />
        <div>
          <textarea style={this.styles()} value={this.state.incomingNotification} placeholder='New notifications will popup here' />
          <textarea style={this.styles()} value={this.state.incomingData} placeholder='unread counts will popup here' />
        </div>
        <div>
          <textarea style={this.styles()} onChange={this.handlePostDataChange} placeholder='Send any JSON data to Zinc applicaiton' />
          <textarea style={this.styles()} onChange={this.handlePostConversationChange} placeholder='Compose a new conversation JSON data' />
          <textarea style={this.styles()} onChange={this.handlePostRouteChange} placeholder='Change Zinc application route'/>
          <textarea style={this.styles()} onChange={this.handlePostRouteMessageChange} placeholder='Send a new route message to recipient'/>
        </div>
    </div>
    )
  };
}

export default ZincWrapper
