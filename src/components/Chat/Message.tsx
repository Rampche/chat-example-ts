import dayjs from "dayjs";
import { Message as MessageModel } from "../../models/chat";
import { useAppDispatch } from "../../store/hooks";
import relativeTime from "dayjs/plugin/relativeTime";

type Props = {
  index: number;
  message: MessageModel;
};

const Message: React.FC<Props> = ({ index, message }) => {
  dayjs.extend(relativeTime);

  const dispatch = useAppDispatch();

  const handleDeleteMessage = (index: number) => {
    //TODO: Trabalho de casa
  };

  return (
    <div className="comment">
      <span className="avatar">
        <img src={message.author.avatar} />
      </span>

      <div className="content">
        <span className="author">{message.author.name}</span>

        <div className="metadata">
          <span className="data">{dayjs(message.date).fromNow()}</span>
        </div>

        <div className="text">{message.text}</div>

        <div className="text">
          <a
            href="#"
            className="reply"
            onClick={() => handleDeleteMessage(index)}
          >
            Delete
          </a>
        </div>
      </div>
    </div>
  );
};

export default Message;
