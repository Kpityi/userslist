import "./index.scss";

const SelectField = ({ setPage }) => {
  return (
    <div className="select-container">
      <label className="select-container__label" htmlFor="page-select">
        page:
      </label>
      <select
        className="select-container__select"
        name="page-select"
        id="page-select">
        {[...Array(10)].map((v, i) => {
          return (
            <option
              key={i}
              value={i + 1}
              onClick={() => {
                setPage(i + 1);
              }}>
              {i + 1}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default SelectField;
