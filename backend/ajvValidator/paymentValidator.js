const objectIdRegex = /^[a-f\d]{24}$/i;

const paymentValidator = {
  type: "object",
  properties: {
    staff: {
      type: "string",
      pattern: objectIdRegex.source,
      errorMessage: {
        pattern: "Invalid ObjectID format",
      },
    },
    amount: {
      type: "number",
    },
  },
  required: ["date", "staff", "amount"],
  additionalProperties: false,
};

module.exports = paymentValidator;
