import React from "react";

import { Avatar, Stack, Chip } from "@mui/material";

import "./styles.css";

const styles = {
  item: {
    width: 'auto',
    maxWidth: '90%',
    height: 'auto',
    padding: 0.5,
    '& .MuiChip-label': {
      display: 'block',
      whiteSpace: 'normal',
    },
  }
};


function TextMessage ({ username, message }) {
  return (
    <Stack>
      <span className="message-username">{username}</span>
      <span className="message-text" >{message}</span>
    </Stack>
  );
}


const Message = ({ username, message }) => {
  return (
    <div className="container-chip">
      <Chip
          sx={styles.item}
          avatar={<Avatar alt="Natacha" src="/static/images/avatar/1.jpg" />}
          label={<TextMessage username={username} message={message} />}
      />
    </div>
  );
};

export default Message;
