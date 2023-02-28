export const TITLE_BLOCK = {
  type: "TextBlock",
  text: "",
  wrap: true,
  fontType: "Default",
  size: "Large",
  weight: "Bolder",
  color: "Accent",
  horizontalAlignment: "Center",
  isSubtle: true,
};

export const SENDER_BLOCK = {
  type: "TextBlock",
  text: "${title}",
  horizontalAlignment: "Center",
  weight: "Bolder",
};

export const IMAGE_BLOCK = {
  type: "Image",
  size: "Large",
  horizontalAlignment: "Center",
  url: "imageUrl",
  altText: "*Cute GIF*",
  isVisible: true,
};

export const DESCRIPTION_BLOCK = {
  type: "TextBlock",
  text: "",
  wrap: true,
  horizontalAlignment: "Center",
  weight: "Bolder",
  size: "Medium",
  color: "Accent",
};

export const EXPLAINATION_BLOCK = {
  type: "TextBlock",
  text: "click on the picture for listen to the song!",
  wrap: true,
  horizontalAlignment: "Center",
  isSubtle: true,
};

export const BASE_CARD = {
  contentType: "application/vnd.microsoft.card.adaptive",
  content: {
    type: "AdaptiveCard",
    $schema: "http://adaptivecards.io/schemas/adaptive-card.json",
    version: "1.2",
    body: [
      TITLE_BLOCK,
      SENDER_BLOCK,
      IMAGE_BLOCK,
      DESCRIPTION_BLOCK,
      EXPLAINATION_BLOCK,
    ],
    selectAction: {
      type: "Action.OpenUrl",
      url: "Youtube link",
    },
  },
};

const buildCard = (title, senderTitle, image, youtubeLink, description) => {
  const titleBlock = { ...TITLE_BLOCK, text: title };
  const senderBlock = { ...SENDER_BLOCK, text: senderTitle };
  const imageBlock = {
    ...IMAGE_BLOCK,
    url: image,
  };
  const descriptionBlock = { ...DESCRIPTION_BLOCK, text: description };
  return {
    ...BASE_CARD,
    content: {
      ...BASE_CARD.content,
      selectAction: { type: "Action.OpenUrl", url: youtubeLink },
      body: [
        titleBlock,
        senderBlock,
        imageBlock,
        descriptionBlock,
        EXPLAINATION_BLOCK,
      ],
    },
  };
};

export default buildCard;
