import axios from 'axios'
import Image from 'next/image'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'


function PayoutImage() {
    const [imgUrl, setImgUrl] = useState("")
    const router = useRouter()
    const id = router.query.id
    // console.log(imgUrl)

    const getPayoutImage = async (id) => {
        await axios.post(`https://maindashbe-june-b18731a0e161.herokuapp.com/api/getpayoutimage/`, { _id: id }).then(res => {
            // console.log(res)
            setImgUrl(res.data.imgurl)
        }).catch(err => {
            // console.log(err)
            setImgUrl("Something Went Wrong")
        })
    }

    useEffect(() => {
        getPayoutImage(id)
    }, [id])

    return (
        <div className='flex items-center justify-center h-[100vh]'>
            {imgUrl === "" ? <p>Loading payout certificate...</p> : imgUrl !== "Something Went Wrong" ? <Image src={imgUrl} alt='' width={380} height={500} priority /> : <p>This payout certificate is no longer available.</p>}
        </div>
    )
}

// export async function getServerSideProps() {
//     // Fetch data from external API
//     const res = await fetch(`https://maindashbe-june-b18731a0e161.herokuapp.com/api/`)
//     const data = await res.json()

//     // Pass data to the page via props
//     return { props: { data } }
//   }

export default PayoutImage