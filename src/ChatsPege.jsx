import { PrettyChatWindow } from "react-chat-engine-pretty";

const ChatsPage = (props) => {
  return (
    <div className="background">
      <PrettyChatWindow
        projectId='77d97214-2d0e-4dfb-b05a-13fa0e3b1d35'
        // eslint-disable-next-line react/prop-types
        username={props.user.username}
        // eslint-disable-next-line react/prop-types
        secret={props.user.secret}
      />
    </div>
  );
};

export default ChatsPage;