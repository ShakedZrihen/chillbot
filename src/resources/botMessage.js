const MESSAGE = {
  toPersonEmail: "julie@example.com",
  attachments: [
    {
      contentType: "application/vnd.microsoft.card.adaptive",
      content: {
        type: "AdaptiveCard",
        version: "1.0",
        body: [
          {
            type: "TextBlock",
            text: "Adaptive Cards",
            size: "large",
          },
        ],
        actions: [
          {
            type: "Action.OpenUrl",
            url: "http://adaptivecards.io",
            title: "Learn More",
          },
        ],
      },
    },
  ],
};

export default function generateMessage(card, email) {
  return {
    toPersonEmail: email,
    attachments: [card],
    text: "If you see this - i failed to create songHug for you",
  };
}
