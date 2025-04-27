export const groupedInputs = [
  {
    groupClass: "flex flex-wrap gap-6 xs:flex-col sm:flex-col md:flex-row",
    fields: [
      { label: "Your Name", name: "username", id: "username", type: "text" },
      {
        label: "Phone Number",
        name: "phoneNumber",
        id: "phoneNumber",
        type: "text",
      },
    ],
  },
  {
    groupClass: "flex flex-col gap-4 font-titleFont",
    fields: [{ label: "Email", name: "email", id: "email", type: "email" }],
  },
  {
    groupClass: "flex flex-col gap-4 font-titleFont",
    fields: [
      { label: "Subject", name: "subject", id: "subject", type: "text" },
    ],
  },
  {
    groupClass: "flex flex-col gap-4 font-titleFont",
    fields: [
      {
        label: "Message",
        name: "message",
        id: "message",
        type: "textarea",
        rows: 6,
      },
    ],
  },
];
