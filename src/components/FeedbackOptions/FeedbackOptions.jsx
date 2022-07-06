import PropTypes from 'prop-types';
import s from './FeedbackOptions.module.css';

export const FeedbackOptions = ({options, onFeedback}) => {
return (
   <div className={s.conteiner}>
      {options.map(option => (<button className={s.button}      type="button"
      data-feedback={option}
      onClick={onFeedback}
      key={option}
      >{option}</button>))}
   </div>
)
}

FeedbackOptions.prototype = {
   options: PropTypes.array.isRequired,
   onFeedback: PropTypes.func.isRequired,
}