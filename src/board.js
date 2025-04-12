import './board.css';
import { useState } from 'react';



const Board = () => {
    const [blogs, setBlogs] = useState([
        {title: 'Oblivious', body: 'lorem porem iptuso...', author: 'Joseph'},
        {title: 'The Tudors', body: 'lorem porem iptuso...', author: 'Shang Chi'},
        {title: 'Mr Queen', body: 'lorem porem iptuso...', author: 'Temi'}
      ]);

    const handleOnDelete = (title) => {
        setBlogs(blogs.filter(blog => blog.title !== title ));
    }

    return (
        <div className="Board">
            <h3>My Movies</h3>
            {blogs.map((blog) => (
                <div className="blog-preview" key={blog.title}>
                    <h2 className='Title'>{blog.title}</h2>
                    <p className='Body'>{blog.body}</p>
                    <p className='Author'>{blog.author}</p>
                    <button className='delete-blog' onClick={() => handleOnDelete(blog.title)}>Delete</button>
                </div>
            ))}
        </div>
    )
}

export default Board;