import React, {useRef, useState} from "react";
import "./styles/App.css";
import PostList from "./component/PostList";
import PostForm from "./component/PostForm";
import MySelect from "./component/UI/select/MySelect";
import MyInput from "./component/UI/input/MyInput";

function App() {
    const [posts, setPosts] = useState([
        {id: 1, title: "A JavaScript", body: "B Description"},
        {id: 2, title: "C JavaScript 2", body: "A Description"},
        {id: 3, title: "B JavaScript 3", body: "D Description"},
    ])

    const [selectedSort, setSelectedSort] = useState("")
    const [searchQuery, setSearchQuery] = useState("")

    function getSortedPosts() {
        console.log("Отработала функция Sorted Posts")
        if (selectedSort) {
            return [...posts].sort((a, b) => a[selectedSort].localeCompare(b[selectedSort]))
        }
        return posts;
    }

    const sortedPosts = getSortedPosts()

    const createPost = (newPost) => {
        setPosts([...posts, newPost])
    }

    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id))
    }

    const sortPosts = (sort) => {
        setSelectedSort(sort);
    }

    return (
        <div className="App">
            <PostForm create={createPost}/>
            <hr style={{margin: "15px 0"}}/>
            <div>
                <MyInput
                    value={searchQuery}
                    onChange={e => setSearchQuery(e.target.value)}
                    placeholder="Поиск..."
                />
                <MySelect
                    value={selectedSort}
                    onChange={sortPosts}
                    defaultValue="Сортировка"
                    options={[
                        {value: "title", name: "По названию"},
                        {value: "body", name: "По описанию"},
                    ]}
                />
            </div>
            {posts.length
                ?
                <PostList remove={removePost} posts={sortedPosts} title="Посты по JS"></PostList>
                :
                <h1 style={{textAlign: "center"}}>
                    Посты не найдены!
                </h1>
            }
        </div>
    );
}

export default App;
