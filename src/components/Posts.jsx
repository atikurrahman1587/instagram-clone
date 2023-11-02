import Post from "./Post"

export default function Posts() {
  const posts = [
    {
      id: "1",
      username: "atikurrahman1587",
      userImg: "/atikur.jpg",
      img: "https://images.unsplash.com/photo-1682685796186-1bb4a5655653?auto=format&fit=crop&q=60&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fHx8",
      caption: "Nice picture"
    },
    {
      id: "2",
      username: "atikurrahman",
      userImg: "/atikur.jpg",
      img: "https://images.unsplash.com/photo-1682687982046-e5e46906bc6e?auto=format&fit=crop&q=60&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxNnx8fGVufDB8fHx8fA%3D%3D",
      caption: "New picture"
    }
  ]
  return (
    <div>
        {posts.map(post => (
          <Post key={post.id}  id={post.id} username={post.username} userImg={post.userImg} img={post.img} caption={post.caption}/>
        ))}
    </div>
  )
}
