import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const PUBLIC_KEY = "pk_test_51MtZHVDhQ0hUgSqkOlAWvWZu8YGVgFDuFYiKgSMVWFFjwfqSjk6VcCvacWNISZ6V7gy82PmGCNlhub0YmA9FeVTn00NlgLySlO";

const stripeTestPromise = loadStripe(PUBLIC_KEY);

const StripeContainer = ({ children }) => {
  return <Elements stripe={stripeTestPromise}>{children}</Elements>;
};

export default StripeContainer;