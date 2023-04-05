import {
  Paper,
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
} from "@mui/material";

const styles = {
    width: "100%",
    maxWidth: "36ch",
    backgroundColor: '#E4DCCF',
    marginTop: '10px'
};

const ChatMessages = () => {

  return (
    <Paper>
      <List>
        <ListItem alignItems="flex-start" sx={styles}>
          <ListItemAvatar>
            <Avatar alt="Profile Picture" src="/static/images/avatar/1.jpg" />
          </ListItemAvatar>
          <ListItemText
            primary="John Doe"
            secondary={
              <>
                {"Hey, how's it going? Did you get the report?"}
              </>
            }
          />
        </ListItem>
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar alt="Profile Picture" src="/static/images/avatar/2.jpg" />
          </ListItemAvatar>
          <ListItemText
            primary="Jane Doe"
            secondary={
              <>
                {"Yeah, I got it. Thanks for sending it over."}
              </>
            }
          />
        </ListItem>
      </List>
    </Paper>
  );
};

export default ChatMessages;
