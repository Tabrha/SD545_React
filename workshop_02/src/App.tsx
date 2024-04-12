import React, { useRef, useState, useEffect } from 'react';
import classNames from 'classnames';
import _ from 'lodash';
import { v4 as uuidv4 } from 'uuid';
import dayjs from 'dayjs';

import './App.scss';
import avatar from './images/bozai.png';

interface Comment {
  comment_id: number | string;
  user: {
    user_id: string;
    avatar: string;
    user_name: string;
  };
  content: string;
  comment_time: string;
  like: number;
}
const user = {  // Define user within the scope of the component
  user_id: '30009257',
  avatar: avatar,
  user_name: 'Arkan A',
};



// Nav Tab
const tabs = [
  { type: 'hot', text: 'Top' },
  { type: 'newest', text: 'Newest' },
];

function useGetList(){
  const [commentList, setCommentList] = useState<Comment[]>([]);
  
  useEffect(() => {
    async function getDefaultList(){
      const response = await fetch('http://localhost:3004/list');
      const data = await response.json();
      setCommentList(_.orderBy(data, 'like', 'desc'));
    }
    getDefaultList();
  }, []);

  return {
    commentList,
    setCommentList
  }
}

function App() {
  const { commentList, setCommentList } = useGetList();
  const [activeType, setActiveType] = useState('hot');
  const [newComment, setNewComment] = useState<string>('');
  const textareaRef = useRef<HTMLTextAreaElement>(null);

 
  const deleteComment = (comment_id: string | number) => {
    setCommentList(commentList.filter(item => item.comment_id !== comment_id));
  };

  const changeActiveType = (type: string) => {
    setActiveType(type);

    if (type === 'hot') {
      setCommentList(_.orderBy(commentList, 'like', 'desc'));
    } else {
      setCommentList(_.orderBy(commentList, 'comment_time', 'desc'));
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setNewComment(event.target.value);
  };

  const makePost = () => {
    const newCommentObject: Comment = {
      comment_id: uuidv4(),
      user: user,
      content: newComment,
      comment_time: dayjs(Date.now()).format('MM-DD HH:mm'),
      like: 0,
    };

    setCommentList([...commentList, newCommentObject]);
    setNewComment('');
    if (textareaRef.current) {
      textareaRef.current.focus();
    }
  };

  return (
    <div className="app">
      {/* Nav Tab */}
      <div className="reply-navigation">
        <ul className="nav-bar">
          <li className="nav-title">
            <span className="nav-title-text">Comments</span>
            <span className="total-reply">{commentList.length}</span>
          </li>
          <li className="nav-sort">
            {tabs.map(tab => (
              <span
                key={tab.type}
                className={classNames('nav-item', { active: tab.type === activeType })}
                onClick={() => changeActiveType(tab.type)}>
                {tab.text}
              </span>
            ))}
          </li>
        </ul>
      </div>

      <div className="reply-wrap">
        <div className="box-normal">
          <div className="reply-box-avatar">
            <div className="bili-avatar">
              <img className="bili-avatar-img" src={avatar} alt="Profile" />
            </div>
          </div>
          <div className="reply-box-wrap">
            <textarea
              ref={textareaRef}
              value={newComment}
              onChange={handleChange}
              placeholder="Enter your comment..."
              className="reply-box-textarea"
            />
            <div className="reply-box-send" onClick={makePost}>
              <div className="send-text">post</div>
            </div>
          </div>
        </div>

        {/* Render the comment list */}
        <div className="reply-list">
          {commentList.map(comment => (
            <Childcomponent key={comment.comment_id} comment={comment} toDelete={deleteComment} />
          ))}
        </div>
      </div>
    </div>
  );
}

interface Props {
  comment: Comment;
  toDelete: (comment_id: number | string) => void;
}

function Childcomponent(props: Props) {
  const { comment, toDelete } = props;
  return (
    <div className="reply-item">
      <div className="root-reply-avatar">
        <div className="bili-avatar">
          <img className="bili-avatar-img" src={comment.user.avatar} alt="" />
        </div>
      </div>
      <div className="content-wrap">
        <div className="user-info">
          <div className="user-name">{comment.user.user_name}</div>
        </div>
        <div className="root-reply">
          <span className="reply-content">{comment.content}</span>
          <div className="reply-info">
            <span className="reply-time">{comment.comment_time}</span>
            <span className="reply-time">Like: {comment.like}</span>
   
            {comment.user.user_id === user.user_id  && (
              <span className="delete-btn" onClick={() => toDelete(comment.comment_id)}>
                Delete
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
