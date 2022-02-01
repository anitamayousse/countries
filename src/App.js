import './App.css';
import React from 'react';
import Button from './components/Button';

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
  }
    componentDidMount() {
     
      fetch("https://restcountries.com/v3.1/all")
        .then((res) => res.json())
        .then((res) => {
          console.log(res);
          this.setState({ loading: false, countries: res });
        });
  }
  
  componentDidUpdate(prevProps, prevState) {

		console.log(prevState, this.state);
	}

  render() {
    return (
      <div>
      </div>,
      <div className="App" >
        <Button onClick={this.selectFrance} isSelected={this.state.activeTabs === 'france' ? true : false}>France</Button>
        <Button onClick={this.selectFrance} isSelected={this.state.activeTabs === 'france' ? true : false}>Brazil</Button>
        <Button onClick={this.selectFrance} isSelected={this.state.activeTabs === 'france' ? true : false}>Croatia</Button>
        	{this.state.loading ? (
					<p>Loading...</p>
				) : (
					this.state.countries.map((country) => {
						return <div>
              <p>{country.flag}</p>
              <p><b>{country.name.common}</b></p>
              <p>{country.capital}</p>
              <p>{country.population}</p>
              <p>{country.region}</p>
              </div>;
					})
				)}
      </div>
    );
  }
}

export default App;

/*<p>Capital:</p>
<p>Flag:</p>
<p>Population:</p>
<p>Region:</p>*/