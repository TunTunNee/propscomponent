import './blog.css'

const Blog = ({ title, author, content, date }) => {
    return (
    <div>
        <div className="third">
        <h2>{title}</h2>
        <h3>{author}</h3>
        <p>{content}</p>
        <p>{date}</p>
      </div>
    </div>
      
    );
  };

  export default Blog