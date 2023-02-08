import { useAppSelector } from "../../store/hooks";
import Message from "./Message";

const MessageDisplay = () => {
  const messages = useAppSelector((state) => state.chat.messages);

  return (
    <div className="ui comments">
      <h3 className="ui diving header">Chat</h3>

      {messages.map((message, index) => (
        <Message key={index} index={index} message={message}/>
      ))}
    </div>
  );
};

export default MessageDisplay;
