import styles from '../styles/Home.module.css'
import Query from "../components/query";
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
                  {posts.map((post) => {
                    return (
                      <div className = {styles.card}>
                        <div className = {styles.image}>
                          <Image src = {post.cover.url} height="1000px" width="1000px"></Image>
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