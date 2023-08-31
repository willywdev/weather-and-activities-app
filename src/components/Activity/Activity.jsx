import "./Activity.css";
export default function Activity({
  activity,
  isForGoodWeather,
  id,
  onDeleteActivity,
}) {
  return (
    <li className="weather__list-item">
      {activity} {""}{" "}
      {/* {isForGoodWeather ? <span>Good</span> : <span>Bad</span>}{" "} */}
      <button
        type="button"
        className="delete-button"
        onClick={() => {
          onDeleteActivity(id);
        }}>
        <img src="./trash.svg" />
      </button>
    </li>
  );
}
