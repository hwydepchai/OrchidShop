import "./Toggle.css";

export const Toggle = (isChecked, handleChange) => {
  return (
    <div className="toggle-theme">
      <label htmlFor="check" className="switch">
        <input
          type="checkbox"
          id="check"
          onChange={() => handleChange}
          //checked={isChecked}
        />
        <span className="slider"></span>
      </label>
    </div>
  );
};
