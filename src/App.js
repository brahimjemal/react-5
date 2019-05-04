import React, { Component } from 'react';
import Card from './components/Card';
import City from './components/City';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
      <div>
        <Card titre="Full Time Program" para="desc1desc1desc1desc1desc " button="en savoire plus " color="grey" />
        <Card titre="Part Time Program" para="desc2desc2de2s2desc2desc " button="en savoire plus " color="red" />
        <Card titre="kids coding programme" para="desc3desc3desc3desc3desc3  " button="en savoire plus " color="blue" />
        <Card titre="summer academy " para="desc4desc4desc4desc4desc " button="en savoire plus " color="green" />
      </div>

      <div className="city-css">
        <City img="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Empire_State_Building_%28HDR%29.jpg/150px-Empire_State_Building_%28HDR%29.jpg" para="new york "/>
        <City img="https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Echo_Park_Lake_with_Downtown_Los_Angeles_Skyline.jpg/278px-Echo_Park_Lake_with_Downtown_Los_Angeles_Skyline.jpg" para="los angeles "/>
        <City img="https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/NYC_-_Washington_Square_Park.JPG/280px-NYC_-_Washington_Square_Park.JPG" para="paris "/>

      </div>


      </div>
    )
  }
}
export default App;
