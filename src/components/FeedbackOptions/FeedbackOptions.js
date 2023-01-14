import s from './FeedbackOptions.module.css';
import PropTypes from 'prop-types';


export default function FeedbackOptions({ options, onLeaveFeedback }) {


    return (
        <>
            {options.map((option, index) => (
                <button
                    key={index}
                    type="button"
                    className={s.button}
                    onClick={onLeaveFeedback}
                >
                    {firstLetterCaps(option)}
                </button>
            ))}
        </>
    );
}

const firstLetterCaps = string =>
string[0].toUpperCase() + string.substring(1);


FeedbackOptions.propTypes = {
    option: PropTypes.arrayOf(PropTypes.string.isRequired),
    onLeaveFeedback: PropTypes.func.isRequired,
};