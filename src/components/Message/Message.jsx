import React from "react";

import { Avatar, Stack, Chip } from "@mui/material";

import "./styles.css";

const styles = {
  item: {
    width: '80%',
    margin: 2,
    height: 'auto',
    padding: 0.5,
    '& .MuiChip-label': {
      display: 'block',
      whiteSpace: 'normal',
    },
  }
};


function TextMessage () {
  return (
    <Stack>
      <span className="message-username">userName</span>
      <span className="message-text" >Message Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et voluptatibus est repudiandae soluta consequatur explicabo, assumenda, eligendi voluptate atque obcaecati eaque libero. Ea, quo unde harum dicta architecto delectus fugit.</span>
    </Stack>
  );
}


const Message = () => {
  return (
    <div className="container-chip">
      <Chip
          sx={styles.item}
          avatar={<Avatar alt="Natacha" src="/static/images/avatar/1.jpg" />}
          label={<TextMessage/>}
      />
    </div>
  );
};

export default Message;
