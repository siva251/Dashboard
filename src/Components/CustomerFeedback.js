import React from "react";

const CustomerFeedback = () => {
  const feedbacks = [
    {
      name: "Jenny Wilson",
      rating: 5,
      comment: "The food was excellent and so was the service. I had the mushroom risotto with scallops which was awesome",
    },
    {
      name: "Dianne Russell",
      rating: 3,
      comment: "We enjoyed the Eggs Benedict served on homemade focaccia bread and hot coffee.",
    },
    {
      name: "Devon Lane",
      rating: 4,
      comment: "Normally wings are wings, but theirs are lean",
    },
    {
      name: " Wilson",
      rating: 5,
      comment: "The food was excellent and so was the service. I had the mushroom risotto with scallops which was awesome",
    },
    {
      name: "Russell",
      rating: 3,
      comment: "We enjoyed the Eggs Benedict served on homemade focaccia bread and hot coffee.",
    }
  ];

  return (
    <div className="customer-feedback">
      <h3>Customer's Feedback</h3>
      {feedbacks.map((feedback, index) => (
        <div key={index} className="feedback">
          <div className="feedback-header">
            <span>{feedback.name}</span>
            <span>{"⭐".repeat(feedback.rating)}</span>
          </div>
          <p className="text_left">{feedback.comment}</p>
        </div>
      ))}
    </div>
  );
};

export default CustomerFeedback;
