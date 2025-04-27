import React, { createContext, useContext, useState, useEffect } from "react";

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  // Load saved data from localStorage or initialize as an empty object.
  const [feedbackData, setFeedbackData] = useState(() => {
    const stored = localStorage.getItem("feedbackData");
    return stored ? JSON.parse(stored) : {};
  });

  // Persist feedbackData to localStorage whenever it changes.
  useEffect(() => {
    localStorage.setItem("feedbackData", JSON.stringify(feedbackData));
  }, [feedbackData]);

  // Get feedback for a given project, with default values.
  const getProjectFeedback = (projectId) => {
    return feedbackData[projectId] || {
      likes: 0,
      isLiked: false,
      userRating: null, // user's rating (null if not rated)
      ratingsCount: 0,
      ratingSum: 0,
      avgRating: 0,
    };
  };

  // Toggle like status and update total likes.
  const toggleLike = (projectId) => {
    setFeedbackData((prev) => {
      const current = getProjectFeedback(projectId);
      const newIsLiked = !current.isLiked;
      const newLikes = current.likes + (newIsLiked ? 1 : -1);
      return {
        ...prev,
        [projectId]: { ...current, isLiked: newIsLiked, likes: newLikes },
      };
    });
  };

  // Set or update the rating for a project.
  const setRating = (projectId, newRating) => {
    setFeedbackData((prev) => {
      const current = getProjectFeedback(projectId);
      let newRatingsCount = current.ratingsCount;
      let newRatingSum = current.ratingSum;

      // If the user already rated, update the sum; otherwise, add a new rating.
      if (current.userRating !== null) {
        newRatingSum = newRatingSum - current.userRating + newRating;
      } else {
        newRatingsCount += 1;
        newRatingSum += newRating;
      }
      const avgRating = newRatingsCount > 0 ? newRatingSum / newRatingsCount : 0;
      return {
        ...prev,
        [projectId]: {
          ...current,
          userRating: newRating,
          ratingsCount: newRatingsCount,
          ratingSum: newRatingSum,
          avgRating,
        },
      };
    });
  };

  // Remove the user's rating.
  const removeRating = (projectId) => {
    setFeedbackData((prev) => {
      const current = getProjectFeedback(projectId);
      if (current.userRating === null) return prev; // nothing to remove
      const newRatingsCount = current.ratingsCount - 1;
      const newRatingSum = current.ratingSum - current.userRating;
      const avgRating = newRatingsCount > 0 ? newRatingSum / newRatingsCount : 0;
      return {
        ...prev,
        [projectId]: {
          ...current,
          userRating: null,
          ratingsCount: newRatingsCount,
          ratingSum: newRatingSum,
          avgRating,
        },
      };
    });
  };

  return (
    <FeedbackContext.Provider value={{ getProjectFeedback, toggleLike, setRating, removeRating }}>
      {children}
    </FeedbackContext.Provider>
  );
};

export const useFeedback = () => useContext(FeedbackContext);
