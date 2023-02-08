export type Author = {
  name: string;
  avatar: string;
};

export type Message = {
  id: number;
  author: Author;
  text: string;
  date: number;
};

export type ChatState = {
    messages: Message[];
}
