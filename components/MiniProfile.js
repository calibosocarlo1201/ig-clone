const MiniProfile = () => {
  return (
    <div className="flex items-center mt-14 ml-14">
      <img 
        src="https://scontent.fmnl8-1.fna.fbcdn.net/v/t39.30808-1/414925425_2122205534782671_3242666902145637566_n.jpg?stp=dst-jpg_p160x160&_nc_cat=106&ccb=1-7&_nc_sid=5740b7&_nc_eui2=AeH8DbhNHveCgHaMSCJF7ZcK7MpdtpyzdHnsyl22nLN0eYsO74kiy5U_exEapD61ukl0P0Zypct3450rzKLQ7ECG&_nc_ohc=jCDRiJP7tyIAX8uzcil&_nc_ht=scontent.fmnl8-1.fna&oh=00_AfBln7E8DAX8yocgVwL67PasHEihDVH5CXVqEIEzh2oK8A&oe=65E09B2E" 
        alt="user-image"
        className="h-16 rounded-full border p-[2px]"
      />
      <div className="flex-1 ml-4">
        <h2 className="font-bold">EmCarlo01</h2>
        <h3 className="text-sm text-gray-400">Welcome to Instagram</h3>
      </div>
      <button className="font-semibold text-blue-400">Sign out</button>
    </div>
  )
}

export default MiniProfile
