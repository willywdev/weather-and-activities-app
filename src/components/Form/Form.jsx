import "./Form.css";

export default function Form({ onAddActivity, handleIsForGoodWeather }) {
  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    onAddActivity(data);
  }

  return (
    <main>
      <h1>Weather & Activities App</h1>
      <form onSubmit={handleSubmit} className="form">
        <label htmlFor="activity">Your activity:</label>
        <input type="text" name="activity" />
        <div className="form__checkbox-wrapper">
          <label htmlFor="selectWeather">Good weather:</label>
          <input
            type="checkbox"
            name="selectWeather"
            id="selectWeather"
            onChange={handleIsForGoodWeather}
          />
        </div>
        <button className="form__submit-button">Submit</button>
      </form>
    </main>
  );
}
