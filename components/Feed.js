import Posts from './Posts'
import Stories from './Stories'

const Feed = () => {
  return (
    <main>
      <section>
        {/* stories */}
        <Stories />

        {/* post */}
        <Posts />
      </section>
    </main>
  )
}

export default Feed
