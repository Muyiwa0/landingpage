import React, { useEffect } from 'react'
import confirmedEmail from '@/images/confirmedemail.png'
import Image from 'next/image'

function Confirmemail() {

  useEffect(() => {
    setTimeout(() => {
      window.location.href = `https://dashboard.ft9ja.com/dashboards?token=${localStorage.getItem("access_token")}&refresh_token=${localStorage.getItem("refresh_token")}`;
    }, 5000);
  }, []);

  return (
    <div className="flex h-[100vh] flex-col items-center justify-center">
      <div className="flex flex-col items-center gap-10 text-xl ">
        <Image src={confirmedEmail} alt="confirmedEmail" />
        <p>Email sent. Please check your email.</p>
      </div>
    </div>
  )
}

export default Confirmemail
