import React from 'react';
import { List, ListItem, ListItemAvatar, Avatar, ListItemText, Divider, Drawer } from '@mui/material';
import './style.css';

const listChats = [
  { name: 'Chat 1', url: 'https://i.postimg.cc/y6Q2CpP5/Logo1.png', lastMessage: 'Hola, ¿cómo estás?' },
  { name: 'Chat 2', url: 'https://i.postimg.cc/J4svr3Yh/Logo2.png', lastMessage: '¿Qué planes tienes para el fin de semana?' },
  { name: 'Chat 3', url: 'https://i.postimg.cc/BbVz5tbs/Logo3.png', lastMessage: '¿Has visto la nueva película de acción?' },
  { name: 'Chat 4', url: 'https://i.postimg.cc/4dwqdWTY/Logo4.png', lastMessage: 'Me alegra escuchar eso.' },
  { name: 'Chat 5', url: 'https://i.postimg.cc/x8C7bL0t/Logo5.png', lastMessage: 'Nos vemos pronto.' },
];
  


function ChatList(props) {
  return (
    <div className='container-list'>
      <List>
        {
          listChats && listChats.map(item => (
            <div key={item.name}>
              <ListItem button>
                <ListItemAvatar>
                  <Avatar src={item.url}/>
                </ListItemAvatar>
                <ListItemText primary={item.name} secondary={item.lastMessage} />
              </ListItem>
              <Divider />
            </div>
          ))
        }
      </List>
    </div>
  );
}

export default ChatList;
