import FriendsComponentList from '@/components/messageFiles/FriendsComponentList'
import MainMessageBoard from '@/components/messageFiles/MainMessageBoard'

import { useRouter } from 'next/dist/client/router'
import React from 'react'

function IndividualMessage() {
    const router=useRouter()
    console.log("router",router.query.message)
    return (
        <div className="">
        <MainMessageBoard/>
        </div>
    )
}

export default IndividualMessage
