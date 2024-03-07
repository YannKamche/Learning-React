import React, { useEffect, useState } from 'react'

const IntervalCounter = () => {
    const [count, setCount] = useState(0)

    const tick = () => {
        setCount(prevCount => prevCount + 1)
    }

    useEffect(() => {
        const interval = setInterval(tick, 1000)
        return () => {
            clearInterval(interval)
        }
    }, [])
  return (
    <div className='text-3xl font-bold'>
        {count}
    </div>
  )
}

export default IntervalCounter
