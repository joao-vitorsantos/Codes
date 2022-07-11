import { Header } from './components/Header';
import { Post } from './components/Post';
import { Sidebar } from './components/Sidebar';

import styles from './App.module.css';

import './global.css';

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/joao-vitorsantos.png',
      name: 'João Vitor',
      role: 'Suporte Técnico @CMM',
    },
    content: [
      { type: 'paragraph', content: 'Fala Galera 👋'},
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      { type: 'link', content: 'jane.design/doctorcare'},
    ],
    publishedAt: new Date('2022-05-03 20:00:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2grmnUAr3lX3qDKKYwbvrx3J_VB3CY1vRjQ&usqp=CAU',
      name: 'Rodrigo Faro',
      role: 'Apresentador e Jornalista @Record',
    },
    content: [
      { type: 'paragraph', content: 'Boa noite Brasil 👋'},
      { type: 'paragraph', content: 'Vamos a mais um episódio de vai dar namoro 🚀'},
      { type: 'link', content: 'https://www.youtube.com/watch?v=mackpesBQv4'},
    ],
    publishedAt: new Date('2022-05-10 20:00:00'),
  },
];


export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post =>{
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

export default App
