import { createSlice } from "@reduxjs/toolkit";
import { ChatState } from "../models/chat";

const initialState: ChatState = {
  messages: [
    {
      id: 1,
      author: {
        name: "Daniel",
        avatar: "images/avatars/daniel.jpg",
      },
      text: "Hey!",
      date: Date.now(),
    },
    {
      id: 2,
      author: {
        name: "Molly",
        avatar: "images/avatars/molly.png",
      },
      text: "How are you?",
      date: Date.now(),
    },
  ],
};

export const chatSlice = createSlice({
  name: "chat",
  initialState,
  reducers: {
    //Dentro dos reducers estão as nossas ações
    addMessage: (state, action) => {
      state.messages.push(action.payload);
    },
    removeMessage: (state, action) => {
      //TODO: Trabalho de casa
    },
  },
});

export const { addMessage, removeMessage } = chatSlice.actions;

export default chatSlice.reducer;
