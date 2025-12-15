import { Search } from 'lucide-react'
import React from 'react'

const SearchBox = () => {
    return (
        <div className="flex items-center pl-4 py-2 pr-2 bg-secondary rounded-md w-full">
            <input
                type="text"
                placeholder="Search…"
                className="flex-1 bg-transparent outline-none text-sm" />
            <Search className="size-4 opacity-70" />
        </div>
    )
}

export default SearchBox