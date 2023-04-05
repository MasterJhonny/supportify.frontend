import { Paper, List } from "@mui/material";

import Message from './Message/Message';

const ChatMessages = () => {
  return (
    <Paper>
      <List>
        <Message
          username='Rol'
          message='Mensaje fulll'
        />
        <Message
          username='Carlos'
          message='Mensaje este es un message full que esta compuesto de varias lines!'
        />
      </List>
    </Paper>
  );
};

export default ChatMessages;
