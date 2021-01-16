function Forecast(props) {
  return (
    <div className="forecast-table">
      <div className="container">
        <div className="forecast-container">{props.children}</div>
      </div>
    </div>
  );
}

export default Forecast;
