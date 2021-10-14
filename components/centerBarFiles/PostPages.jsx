import InputPost from 'components/forms/InputPost'
import React from 'react'
import PostPage from './PostPage'

function PostPages() {
    return (
        // <div className="mt-4 w-full">
        <div className="lg:p-10 space-y-2 ">
            {/* <InputPost/> */}
         <PostPage/>
         <PostPage/>
         <PostPage/>
         <PostPage/>
         <PostPage/>
         <PostPage/>
         </div>
        // </div>
    )
}

export default PostPages
