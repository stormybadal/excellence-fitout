export const contactFormFields = [
  {
    name: "firstName",
    label: "First Name",
    type: "text",
    placeholder: "Enter your first name",
    required: true,
  },
  {
    name: "email",
    label: "Email",
    type: "email",
    placeholder: "your.email@example.com",
    required: true,
  },
  {
    name: "phoneNumber",
    label: "Phone Number",
    type: "text",
    placeholder: "+917 XX XXX XXXX",
    required: true,
  },
  {
    name: "serviceNeeded",
    label: "Service Needed",
    type: "dropdown",
    options: [
      { label: "General Inquiry", value: "general" },
      { label: "Support", value: "support" },
      { label: "Feedback", value: "feedback" },
    ],
    required: true,
  },
  {
    name: "message",
    label: "Message",
    type: "textarea",
    placeholder: "Tell us about your project requirements, timeline, and any specific details.",
    required: true,
  },
];
