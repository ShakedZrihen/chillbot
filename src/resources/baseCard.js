export const TITLE_BLOCK = {
  type: "TextBlock",
  text: "",
  wrap: true,
  fontType: "Default",
  size: "ExtraLarge",
  weight: "Bolder",
  color: "Accent",
  horizontalAlignment: "Center",
  isSubtle: true,
};

export const IMAGE_BLOCK = {
  type: "Image",
  size: "Small",
  url: "imageUrl",
  isVisible: true,
  selectAction: {
    type: "Action.OpenUrl",
    url: "Youtube link",
  },
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
    body: [TITLE_BLOCK, IMAGE_BLOCK, DESCRIPTION_BLOCK, EXPLAINATION_BLOCK],
  },
};

const buildCard = (title, image, youtubeLink, description) => {
  const titleBlock = { ...TITLE_BLOCK, text: title };
  const imageBlock = {
    ...IMAGE_BLOCK,
    url: image,
    selectAction: { ...IMAGE_BLOCK.selectAction, url: youtubeLink },
  };
  const descriptionBlock = { ...DESCRIPTION_BLOCK, text: description };
  return {
    ...BASE_CARD,
    content: {
      ...BASE_CARD.content,
      body: [titleBlock, imageBlock, descriptionBlock, EXPLAINATION_BLOCK],
    },
  };
};

export default buildCard;
