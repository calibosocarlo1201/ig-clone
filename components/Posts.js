import Post from "./Post"

const Posts = () => {

  const posts = [
    {
      id: "1",
      username: "codewithsandbox",
      userImg: "https://scontent.fmnl8-1.fna.fbcdn.net/v/t39.30808-1/414925425_2122205534782671_3242666902145637566_n.jpg?stp=dst-jpg_p160x160&_nc_cat=106&ccb=1-7&_nc_sid=5740b7&_nc_eui2=AeH8DbhNHveCgHaMSCJF7ZcK7MpdtpyzdHnsyl22nLN0eYsO74kiy5U_exEapD61ukl0P0Zypct3450rzKLQ7ECG&_nc_ohc=jCDRiJP7tyIAX8uzcil&_nc_ht=scontent.fmnl8-1.fna&oh=00_AfBln7E8DAX8yocgVwL67PasHEihDVH5CXVqEIEzh2oK8A&oe=65E09B2E",
      img: "https://images.unsplash.com/photo-1708721205323-98eaaa0482ac?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      caption: "What a beautiful sunset."
    },
    {
      id: "2",
      username: "seigrein",
      userImg: "https://scontent.fmnl8-2.fna.fbcdn.net/v/t39.30808-6/399339771_2089865588016666_459205975921080427_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=9c7eae&_nc_eui2=AeHvCT3_NI2QPThsUriqFoeG7NT6uBAtyMns1Pq4EC3IyWL1XQYey7Qko_SZ3cYqMABr2iF01EvGk0MfzfTYr8_7&_nc_ohc=DSomjWau5LgAX9wpUP4&_nc_ht=scontent.fmnl8-2.fna&oh=00_AfDWQciBj8hFrH9_b3-OuF2SI0qIB6n_hTttkTItt6Leww&oe=65E10602",
      img: "https://images.unsplash.com/photo-1682685796766-0fddd3e480de?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      caption: "What a beautiful sunset."
    }
  ]

  return (
    <div>
      {posts.map(post => {

        const {id, username, userImg, img, caption} = post;

        return <Post key={id} id={id} username={username} userImg={userImg} img={img} caption={caption} />
      })}
    </div>
  )
}

export default Posts
