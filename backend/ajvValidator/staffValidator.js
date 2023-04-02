const objectIdRegex = /^[a-f\d]{24}$/i;

const staffValidator = {
  type: "object",
  required: ["name", "email", "salary", "organization"],
  properties: {
    name: {
      type: "string",
      errorMessage: {
        type: "Name must be a String",
      },
    },
    email: {
      type: "string",
    },
    salary: {
      type: "object",
      required: ["base", "pf"],
      properties: {
        base: {
          type: "number",
          errorMessage: {
            type: "Salary must be a number",
          },
        },
        pf: {
          type: "number",
          errorMessage: {
            type: "PF must be a number",
          },
        },
        salaryType: {
          type: "number",
          default: "Monthly",
        },
      },
    },
    organization: {
      type: "string",
      pattern: objectIdRegex.source,
      errorMessage: {
        pattern: "Invalid ObjectID format",
      },
    },
    perDaySalary: {
      type: "number",
      default: 0,
      errorMessage: {
        type: "PerDaySalary must be number",
      },
    },
    workingWeekDay: {
      type: "array",
      items: {
        type: "number",
        enum: [0, 1],
      },
      maxItems: 7,
      minItems: 7,
      errorMessage: {
        maxItems: "Length must be 7",
        minItems: "Length must be 7",
      },
    },
  },
  additionalProperties: false,
};

module.exports = staffValidator;
