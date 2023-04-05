import { AppBar, Toolbar, Typography, IconButton, Avatar } from "@mui/material";
import { Menu as MenuIcon } from "@mui/icons-material";

const ChatHeader = () => {
  return (
    <AppBar position="static">
      <Toolbar sx={{ backgroundColor: '#EEEEEE', color: '#282828'}}>
        <Avatar alt="Profile Picture" src="/static/images/avatar/1.jpg" />
        <Typography variant="h6" sx={{ marginLeft: "10px" }}>
          Chat
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default ChatHeader;
