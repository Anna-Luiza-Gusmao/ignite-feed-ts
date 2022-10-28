import { Header } from "./components/Header.jsx"
import { Sidebar } from "./components/Sidebar.jsx"
import { Post } from "./components/Post.jsx"

import styles from "./App.module.css"
import "./global.css"

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https://avatars.githubusercontent.com/u/87679298?s=400&u=eee5a9ce7f86217c20bc58c8d8ab8afe60f15b00&v=4",
      name: "Anna Gusmão",
      role: "Front-End Developer"
    },
    content: [
      { type: "paragraph", content: "Fala galeraa 👋"},
      { type: "paragraph", content: "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀"},
      { type: "link", content: "👉 jane.design/doctorcare"}
    ],
    publishedAt: new Date("2022-10-26 11:36:34")
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://avatars.githubusercontent.com/u/59926475?v=4",
      name: "Ericles Miller",
      role: "Back-End Developer"
    },
    content: [
      { type: "paragraph", content: "Fala galeraa 👋"},
      { type: "paragraph", content: "Acabei de subir mais um projeto no meu portifólio. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀"},
      { type: "link", content: "👉 ericles.design/doctorcare"}
    ],
    publishedAt: new Date("2022-10-26 11:38:34")
  }
]

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return (
              <Post 
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}
        </main>
      </div>
    </div>
  )
}
