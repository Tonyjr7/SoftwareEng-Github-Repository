import './board.css';
import { useState, useEffect } from 'react';



const Board = () => {
    const [blogs, setBlogs] = useState(null);
    const [IsPending, setPending] = useState(true);

    const handleOnDelete = (id) => {
        setBlogs(blogs.filter(blog => blog.id !== id ));
    }

    useEffect(() => {
        setTimeout(() => {
            fetch('http://localhost:3001/blogs')
            .then(res => {
                return res.json()
            })
            .then(data => {
                setBlogs(data);
                setPending(false);
            })
        }, 1000);
    }, []);

    return (
        <div className="Board">
            <h3>My Movies</h3>
            {IsPending && <div>loading...</div>}
            {blogs && blogs.map((blog) => (
                <div className="blog-preview" key={blog.title}>
                    <h2 className='Title'>{blog.title}</h2>
                    <p className='Body'>{blog.body}</p>
                    <p className='Author'>{blog.author}</p>
                    <button className='delete-blog' onClick={() => handleOnDelete(blog.id)}>Delete</button>
                </div>
            ))}
        </div>
    )
}

export default Board;