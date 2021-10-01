import { useRouter } from 'next/router'
import React from 'react'

function Document() {
    const router = useRouter();
    const {url, doc} = router.query;

    return (
        <div>
            {`${url},${doc}`}
        </div>
    )
}

export default Document
