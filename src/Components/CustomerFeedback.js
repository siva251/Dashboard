import React from "react";

const CustomerFeedback = () => {
  const feedbacks = [
    {
      name: "Jenny Wilson",
      rating: 5,
      comment: "The food was excellent and so was the service...",
    },
    {
      name: "Dianne Russell",
      rating: 5,
      comment: "We enjoyed the Eggs Benedict...",
    },
    {
      name: "Devon Lane",
      rating: 4,
      comment: "Normally are wings, but theirs are lean...",
    },
  ];

  return (
    <div className="customer-feedback">
      <h3>Customer's Feedback</h3>
      {feedbacks.map((feedback, index) => (
        <div key={index} className="feedback">
          <div className="feedback-header">
            <span>{feedback.name}</span>
            <span>{"★".repeat(feedback.rating)}</span>
          </div>
          <p>{feedback.comment}</p>
        </div>
      ))}
    </div>
  );
};

export default CustomerFeedback;
