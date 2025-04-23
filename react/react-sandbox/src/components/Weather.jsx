const Weather = ({ temperature }) => {
  let message = "";

  if (temperature <= 15) {
    message = "It's cold outside!";
    return (
      <>
        <h1>Weather</h1>
        <p>{message}</p>
      </>
    );
  } else if (temperature > 15 && temperature < 25) {
    message = "It's nice outside!";
    return (
      <>
        <h1>Weather</h1>
        <p>{message}</p>
      </>
    );
  } else if (temperature >= 25) {
    message = "It's hot outside!";
    return (
      <>
        <h1>Weather</h1>
        <p>{message}</p>
      </>
    );
  }
};

export default Weather;
