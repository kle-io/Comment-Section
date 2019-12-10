import React from 'react';
import styles from '../styles/Feed.css';

const Reply = (props) => (
  <li className={styles.Feed_list}>
    <div className={styles.Feed_comment}>
      <div className={styles.Feed_commentBox}>
        <img src={props.reply.user_photo} className={styles.Feed_image}/>
        <div className={styles.commentItem}>
          <div className={styles.commentText}>{props.reply.username}</div>
          <p>{props.reply.reply_body}</p>
        </div>
        <div>
          <div>{props.reply.time.slice(4,16)}</div>
        </div>
    </div>
    </div>
  </li>
)

export default Reply;