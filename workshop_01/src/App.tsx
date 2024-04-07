
import { useRef, useState } from 'react';
import classNames from 'classnames';
import _ from 'lodash';
import { v4 as uuidv4 } from 'uuid';
import dayjs from 'dayjs';

import './App.scss'
import avatar from './images/bozai.png'

interface Comment {
  comment_id: number | string;
  user: {
    user_id: string,
    avatar: string,
    user_name: string
  };
  content: string;
  comment_time: string;
  like: number;
}

// Comment List data
const defaultList = [
  {
    // comment id
    comment_id: 3,
    // user info
    user: {
      user_id: '13258165',
      avatar: '',
      user_name: 'Jay Zhou',
    },
    // comment content
    content: 'Nice, well done',
    // created datetime
    comment_time: '10-18 08:15',
    like: 88,
  },
  {
    comment_id: 2,
    user: {
      user_id: '36080105',
      avatar: '',
      user_name: 'Song Xu',
    },
    content: 'I search for you thousands of times, from dawn till dusk.',
    comment_time: '11-13 11:29',
    like: 88,
  },
  {
    comment_id: 1,
    user: {
      user_id: '30009257',
      avatar,
      user_name: 'Arkan A',
    },
    content: 'I told my computer I needed a break... now it will not stop sending me vacation ads.',
    comment_time: '10-19 09:00',
    like: 66,
  },
  {
    comment_id: 4,
    user: {
      user_id: '30009257',
      avatar,
      user_name: 'Arkan A',
    },
    content: 'Follow Me',
    comment_time: '10-18 09:00',
    like: 77,
  }
]
// current logged in user info
const user = {
  // userid
  user_id: '30009257',
  // profile
  avatar,
  // username
  user_name: 'Arkan A',
}

// Nav Tab
const tabs = [
  { type: 'hot', text: 'Top' },
  { type: 'newest', text: 'Newest' },
]

function App() {
 
  const [commentList, setCommentList] = useState<Comment[]>(_.orderBy(defaultList, 'like', 'desc'));
  const [activeType, setActiveType] = useState<string>('hot');
  const [newComment, setNewComment] = useState<string>('');

  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const deleteComment = (comment_id: string | Number) => {
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
      like: 0
    };

    setCommentList([...commentList, newCommentObject]);
    setNewComment('');
    if (textareaRef.current) {
      textareaRef.current.focus();
    }
  };

  return (

    <div className="app">
      {/* {activetype} */}
      {/* Nav Tab */}
      <div className="reply-navigation">
        <ul className="nav-bar">
          <li className="nav-title">
            <span className="nav-title-text">Comments</span>
            {/* Like */}
            <span className="total-reply" >{commentList.length}</span>
          </li>
          <li className="nav-sort">
            {/* highlight class name： active */}
            {tabs.map(tab =>
              <span key={tab.type}
                className={classNames('nav-item', { active: tab.type === activeType })}
                // <span key={tab.type}className={`nav-item ${tab.type===activeType? 'active' :''}`}
                onClick={() => changeActiveType(tab.text)}>
                {tab.text}
              </span>)}

            {/* <span className='nav-item'>Newest</span> */}
          </li>
        </ul>
      </div>

      <div className="reply-wrap">
        {/* comments */}
        <div className="box-normal">
          {/* current logged in user profile */}
          <div className="reply-box-avatar">
            <div className="bili-avatar">
              <img className="bili-avatar-img" src={avatar} alt="Profile" />
            </div>
          </div>
          <div className="reply-box-wrap">
            {/* comment */}
            <textarea ref={textareaRef}
              value={newComment}
              onChange={handleChange}
              placeholder="Enter your comment..."
              className="reply-box-textarea"

            />
            {/* post button */}
            <div className="reply-box-send" onClick={makePost}>
              <div className="send-text" >post</div>
            </div>
          </div>
        </div>
        {/* comment list */}
        <div className="reply-list">
          {/* comment item */}
          {commentList.map(item => (
            <div className="reply-item" key={item.comment_id}>
              {/* profile */}
              <div className="root-reply-avatar">
                <div className="bili-avatar">
                  <img
                    className="bili-avatar-img"
                    alt=""
                  />
                </div>
              </div>

              <div className="content-wrap">
                {/* username */}
                <div className="user-info">
                  <div className="user-name">{item.user.user_name}</div>
                </div>
                {/* comment content */}
                <div className="root-reply">
                  <span className="reply-content">{item.content}</span>
                  <div className="reply-info">
                    {/* comment created time */}
                    <span className="reply-time">{item.comment_time}</span>
                    {/* total likes */}
                    <span className="reply-time">Like:{item.like}</span>
                    {
                      item.user.user_id === user.user_id && (<span className="delete-btn" onClick={() => deleteComment(item.comment_id)}>
                        Delete
                      </span>)
                    }
                  </div>
                </div>
              </div>
            </div>
          ))}

        </div>
      </div>
    </div>
  )
}
export default App



