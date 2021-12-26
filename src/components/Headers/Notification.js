
import classes from "./Notification.module.css";
const Notification = (props) => {
    return (
        <div className={classes[props.styleName]}>
            <div>{props.status}</div>
            <div>{props.message}</div>
        </div>
    )
};
export default Notification;