export default function Story({username, img, id}) {
  return (
    <div>
        <img src={img} alt={username}/>
        <p>{username}</p>
    </div>
  )
}
