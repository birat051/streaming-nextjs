import React from 'react'
import styles from '../styles/comments.module.css'
import { getComments } from '@/services/getPosts'
import Comment from './Comment'


type AllCommentsProp=
{
    postId: number
}

export interface CommentData {
    postId: number;
    id: number;
    name: string;
    email: string;
    body: string;
}

async function AllComents(props:AllCommentsProp) {
  const {data,error}=await getComments(props.postId)  
  return (
    <div className={styles.comments}>
      {data && data.map((comment:CommentData)=>{
        return (
        <Comment key={comment.id+comment.name} comment={comment}/>
        )
      })}
      {
        error && <p>{error}</p>
      }
    </div>
  )
}




export default AllComents
