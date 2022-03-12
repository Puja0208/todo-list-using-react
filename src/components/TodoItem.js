
import classes from "./TodoItem.module.css";
const TodoItem = (props) => {
  const handleClick = () => {
    props.onMarkComplete(props.id);
  };
  return (
    <p onClick={handleClick} className={props.complete ? classes.strike : ""}>
      {props.task}
    </p>
  );
};

export default TodoItem;
