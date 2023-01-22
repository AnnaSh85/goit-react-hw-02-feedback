import PropTypes from "prop-types";
import styles from "./statistics.module.css";

const Statistics = ({ total, good, bad, neutral, positivePercentage }) => {
    return (
        <div className={styles.divWrap}>
            <p>Good: {good}</p>
            <p>Neural: {neutral}</p>
            <p>Bad: {bad}</p>
            <p>Total: {total}</p>
            <p>Positive feedback: {positivePercentage} %</p>

        </div>)
}

export default Statistics;

Statistics.propTypes = {
    total: PropTypes.number.isRequired,
    good: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
}