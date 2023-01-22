import PropTypes from "prop-types";
import styles from "./feedbackOptions.module.css";

import Button from "../../../shared/components/Button/Button";

const FeedbackOptions = ({ options, leaveVote }) => {
    
    const elements = options.map(name => <p key={name} >
        <Button onClick={() => leaveVote(name)} type="button">{name}</Button>
        </p>)
    return (
        <div className={styles.divWrapper}>
           {elements}
        </div>
    )
}

export default FeedbackOptions;

FeedbackOptions.propTypes = {
    leaveVote: PropTypes.func.isRequired,
    options: PropTypes.arrayOf(PropTypes.string).isRequired,
}