export enum ChatBubblePosition {
  start = "chat chat-start",
  end = "chat chat-end mb-[10px]",
}
export enum ChatBubbleColor {
  lightSide = "chat-bubble-info",
  darkSide = "chat-bubble-error",
}
export enum ChatInputColor {
  lightSide = "input-info",
  darkSide = "input-error",
}

export enum AvatarEnum{
  light = "https://static.wikia.nocookie.net/shaniverse/images/4/4c/Obi-Wan.jpg",
  dark = "https://i.pinimg.com/originals/f3/62/45/f3624514ad63a0a144d7d411b2447b43.jpg"
}

export type ChatAvatarProps = {
  _src: string;
  _alt: string;
};

export type ChatBubbleProps = {
  message: string;
  position: ChatBubblePosition;
  color: ChatBubbleColor;
  avatarProps: ChatAvatarProps;
};

// export type ChatInputProps = {

// }