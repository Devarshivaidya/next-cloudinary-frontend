import styles from '../styles/Home.module.css'
import Query from "../components/Query";
import POSTS_QUERY from "../apollo/queries/posts/posts";
import Image from 'next/image'

export default function Home() {
  return (
    <div className={styles.container}>
      <Query query = {POSTS_QUERY}>
        {({data: {posts}}) => {
            return(
            <div>
              <main className={styles.main}>
                <div className = {styles.grid}> 
                  {posts.key(post).map((post) => {
                    return (
                      <div  key= {post.id} className = {styles.card}>
                        <div className = {styles.image}>
                          <Image key= {post.id} src = {post.cover.url} height="1000px" width="1000px" alt="Image"></Image>
                        </div>
                        <h1>{post.title}</h1>
                        <p>{post.content}</p>
                      </div>
                    )
                  })}
                </div>
              </main>
            </div>
            )
          }
        }
      </Query>
    </div>
  )
}