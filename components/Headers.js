import Image from "next/image"

const Headers = () => {
  return (
    <div>
        {/* Left */}
        <div className="flex items-center justify-between max-w-6xl">
            <div className="cursor-pointer h-24 w-24 relative hidden lg:inline-grid">
                <Image src="https://clipart.info/images/ccovers/1522452762Instagram-logo-png-text.png" layout="fill" className="object-contain" />
            </div>
            <div className="cursor-pointer h-24 w-24 relative lg:hidden">
                <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/2048px-Instagram_icon.png" layout="fill" className="object-contain" />
            </div>
        </div>

        {/* Middle */}

        {/* right */}

    </div>
  )
}

export default Headers
