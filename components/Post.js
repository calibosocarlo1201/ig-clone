import { DotsHorizontalIcon } from "@heroicons/react/outline"

const Post = ({id, username, userImg, img, caption}) => {
  return (
    <div className="bg-white my-7 border rounded-md">

        <div className="flex items-center p-5">
            <img src={userImg} alt="user-image" className="h-12 rounded-full object-cover border p-1 mr-3" />
            <p className="font-bold flex-1">{username}</p>
            <DotsHorizontalIcon className="h-5" />
        </div>

        <img src={img} alt={caption} className="object-cover w-full" />

    </div>
  )
}

export default Post
 