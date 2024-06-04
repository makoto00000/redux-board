import "./App.css"
import { useDispatch, useSelector } from "react-redux"
import { addPost, deletePost } from "./features/Posts";
import { RootState } from "./main"
import { useState } from "react";
function App() {
const postList = useSelector((state: RootState) => state.posts.value)
const dispatch = useDispatch();
const [name, setName] = useState("");
const [content, setContent] = useState("");

const handleClick = () => {
  dispatch(addPost(
    {
      id: postList.length+1,
      name: name,
      content: content,
    }
  ))
}

  return (
    <div className="App">
      <div>
        <h1>React-Redux掲示板</h1>
      </div>
      <div className="addPost">
        <input
          type="text"
          placeholder="お名前"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
        <input
          type="text"
          placeholder="投稿内容"
          onChange={(e) => setContent(e.target.value)}
          value={content}
        />
        <button 
        onClick={() => handleClick()}
        >投稿</button>
        <hr />
      </div>
      <div className="displayPosts">
        {postList.map((post) => (
          <div key={post.id} className="post">
            <h1 className="postName">{post.name}</h1>
            <h1 className="postContent">{post.content}</h1>
            <button 
            onClick={() => dispatch(deletePost({ id: post.id }))}
            >
              削除
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default App
