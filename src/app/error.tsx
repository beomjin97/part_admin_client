'use client'

import { useEffect } from "react"

export default function Error({error, reset}:{
    error: Error & { digest?: string }
    reset: () => void
  }) {
    useEffect(() => {
        // Log the error to an error reporting service
        console.error(error)
      }, [error])

    return (
        <div>
            <h1>Server Error</h1>
            <button className="border-2 p-2 hover:cursor-pointer" onClick={() => reset}>Try again</button>
        </div>
    )
  } 