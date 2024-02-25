'use client'

import minifaker from 'minifaker'
import { useEffect, useState } from 'react'

const Suggestions = () => {

    const [suggestions, setSuggestions] = useState([]);
  
    useEffect(() => {
        const suggestionsFaker = minifaker.array(5, (i) => (
        {
            username: minifaker.username({locale:"en"}).toLowerCase(),
            jobTitle: minifaker.jobTitle(),
            id: i
        }
        ))
        setSuggestions(suggestionsFaker);
    }, [])

    return (
        <div className="mt-4 ml-10">
            <div className="flex justify-between mb-5 text-sm">
                <h3 className="fon-bold text-gray-400">Suggestions</h3>
                <button className="font-semibold text-gray-600">See All</button>
            </div>
            {suggestions.map(suggestion => (
                <div key={suggestion.id} className='flex items-center mt-3'>
                    <img src={`https://i.pravatar.cc/150?img=${Math.ceil(Math.random() * 70)}`} alt="user-image" className="h-10 rounded-full border p-[2px]" />
                    <div className='flex-1 ml-4'>
                        <h2 className='font-semibold text-sm'>{suggestion.username}</h2>
                        <h3 className='text-gray-400 truncate w-[200px]'>{suggestion.jobTitle}</h3>
                    </div>
                    <button className='font-semibold text-blue-400'>Follow</button>
                </div>
            ))}
        </div>
    )
}

export default Suggestions
