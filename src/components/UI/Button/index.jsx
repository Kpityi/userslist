import classNames from "classnames";
import "./index.scss";

const Button = ({ color, label, ...rest }) => {
  return (
    <button className={classNames("button", color && `-${color}`)} {...rest}>
      {label}
    </button>
  );
};

export default Button;
