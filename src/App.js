import React, {useState} from "react";
import Counter from "./component/Counter";
import ClassCounter from "./component/ClassCounter";
import "./styles/App.css";
import PostItem from "./component/PostItem";
import PostList from "./component/PostList";
import MyButton from "./component/UI/button/MyButton";

function App() {
    const [posts, setPosts] = useState([
        {id: 1, title: "JavaScript", body: "Description"},
        {id: 2, title: "JavaScript 2", body: "Description"},
        {id: 3, title: "JavaScript 3", body: "Description"},
    ])


    return (
        <div className="App">
            <form>
                <input type="text" placeholder="Название поста"/>
                <input type="text" placeholder="Название поста"/>
                <MyButton>Создать пост</MyButton>
            </form>
            <PostList posts={posts} title="Посты по JS"></PostList>
        </div>
    );
}

export default App;
