import React from "react";
import PropTypes from "prop-types";

const FOODS = [
  {
    id: 1,
    name: "Kimchi",
    rates: 5
  }, {
    id: 2,
    name: "Ramen",
    rates: 3
  }, {
    id: 3,
    name: "Tuna"
  }
];

function Food({ name, rates}) {
  const formattedRates = rates
    ? `${rates} / 5`
    : "No rates given";

  return <div>
    <h3>{ name }</h3>
    <p>Rates: { formattedRates }</p>
  </div>;
}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  rates: PropTypes.number
}

function App() {
  return (
    <div>
      {FOODS.map(food => {
        return <Food key={food.id} name={food.name} rates={food.rates} />;
      })}
    </div>
  );
}

export default App;
