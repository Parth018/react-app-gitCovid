import logo from "./logo.svg";
import "./App.css";
import React, { Component } from "react";
import Cards from "./Components/cards/Cards";
import Chart from "./Components/charts/Charts";
import CountryPicker from "./Components/countryPicker/CountryPicker";
import { fetchData } from "./Api";
import coronaImage from "./Image/image.png";
import styles from "./App.css";
import { cards, countryPicker, chart } from "./Components";

class App extends Component {
  state = {
    data: {},
    country: " ",
  };

  async componentDidMount() {
    const data = await fetchData();

    this.setState({ data });
  }

  handleCountryChange = async (country) => {
    const data = await fetchData(country);

    this.setState({ data, country: country });
  };

  render() {
    const { data, country } = this.state;
    return (
      <div className="container">
        <img className={styles.image} src={coronaImage} alt="COVID-19" />
        <Cards data={data} />
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <Chart data={data} country={country} />
      </div>
    );
  }
}

export default App;
