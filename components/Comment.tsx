import React from 'react'
import { CommentData } from './AllComents'
import styles from '../styles/comments.module.css'

type CommentProp=
{
    comment: CommentData
}


function Comment(props:CommentProp) {
  return (
    <div className={styles.commentcontainer}>
      <h1>{props.comment.body}</h1>
      <h2>Posted by &nbsp;{props.comment.name}</h2>
    </div>
  )
}


export default Comment
