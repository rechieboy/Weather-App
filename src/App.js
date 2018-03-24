import React, { Component } from 'react';
import Titles from "./Components/Titles";
import Form from "./Components/Form";
import Weather from "./Components/Weather";
import './App.css';


const API_KEY = '2297341e552a6cf9736f3ab3d19248c3';

class App extends Component {
 getWeather = async (e) => {
 	e.preventDefault();
 	const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=${API_KEY}&units=metric`);
 	const data = await api_call.json();
 	console.log(data);
 }
 render() {
    return (
      <div className="App">
       <Titles/>
       <Form getWeather={this.getWeather}/>
       <Weather/>
      </div>
    );
  }
}

export default App;
