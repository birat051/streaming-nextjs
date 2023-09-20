import { getPosts } from '@/services/getPosts'
import React, { Suspense, createContext } from 'react'
import styles  from "../../styles/posts.module.css"
import AllComents from '@/components/AllComents';
import LoadingComponent from '@/components/LoadingComponent';


interface PostData {
  userId: number;
  id: number;
  title: string;
  body: string;
}


async function Posts() {
  const posts=await getPosts()
  return (
    <div className={styles.container}>
      {posts && posts.data && posts.data.map((post:PostData)=>{
        return (
          <div className={styles.postcontainer} key={post.id+post.userId+post.title}>
            <h1>{post.title}</h1>
            <h2>Comments</h2>
            <Suspense fallback={<LoadingComponent noOfLines={3}/>}>
              <AllComents postId={post.id} />
            </Suspense>
          </div>
        )
      })}
    </div>
  )
}

export default Posts
