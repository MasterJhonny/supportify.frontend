import React from 'react';
import ChatHeader from '../ChatHeader';
import ChatMessages from '../ChatMessages';

const PageView = () => {
    return (
        <div style={{ width: '100%', height: '100%', backgroundColor: '#F2F2F2'}}>
            <ChatHeader/>
            <ChatMessages/>
        </div>
    );
}
 
export default PageView;