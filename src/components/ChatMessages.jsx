import { Paper, List } from "@mui/material";

import Message from './Message/Message';

const ChatMessages = () => {
  return (
    <Paper>
      <List>
        <Message/>
      </List>
    </Paper>
  );
};

export default ChatMessages;
