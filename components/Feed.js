import Posts from './Posts'
import Stories from './Stories'

const Feed = () => {
  return (
    <main class="grid grid-cols-1 md:grid-cols-3 md:max-w-6xl mx-auto">
      <section className='md:col-span-2'>
        {/* stories */}
        <Stories />

        {/* post */}
        <Posts />
      </section>

      <section className='hidden md:inline-gird md-col-span-1'>

      </section>
    </main>
  )
}

export default Feed
