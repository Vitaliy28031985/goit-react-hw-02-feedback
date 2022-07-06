import PropTypes from 'prop-types';

import React from 'react';
export const FeedbackOptions = ({options, onFeedback}) => {
return (
   <div>
      {options.map(option => (<button
      type="button"
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