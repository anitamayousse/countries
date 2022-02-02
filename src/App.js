import './App.css';
import React from 'react';
import Button from './components/Button';
import Card from './components/Card';

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      name: "",
      capital: "",
      flag: "",
      population: "",
      region: "",
      loading: true,
    };
    this.getCountry = this.getCountry.bind(this)
  }

  componentDidMount() {
    
    fetch(`https://restcountries.com/v3.1/name/france`)
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        this.setState({ 
          loading: false, 
          name: res[0].name.common, 
          capital: res[0].capital,
          population: res[0].population,
          region: res[0].region,
          flag: res[0].flag,
           });
      })
}
  
  componentDidUpdate(prevProps, prevState) {

		console.log(prevState, this.state);
	}

 getCountry (country) {
   fetch(`https://restcountries.com/v3.1/name/${country}`)
    .then((res) => res.json())
    .then((res) => {
      console.log(res);
      this.setState({ 
        loading: false, 
        name: res[0].name.common, 
        capital: res[0].capital,
        population: res[0].population,
        region: res[0].region,
        flag: res[0].flag, 
        });
    })
  }
  render() {
    return (
      <div className="App" >
        <h1 className="p-2">Country selector</h1>
        {this.state.loading ? (
					<p>Loading...</p>
				) : (
          <div>
          <Button onClick={this.getCountry} isSelected={this.state.name === 'france'}>France</Button>
          <Button onClick={this.getCountry} isSelected={this.state.name === 'brazil'}>Brazil</Button>
          <Button onClick={this.getCountry} isSelected={this.state.name === 'croatia'}>Croatia</Button>

            <Card
                flag={this.state.flag}
                name={this.state.name}
                capital={this.state.capital}
                population={this.state.population}
                region={this.state.region}
            />
            </div>
          )}
           </div>
    );
  }
}

export default App;

