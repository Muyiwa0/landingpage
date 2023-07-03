import confirmedEmail from '@/images/confirmedemail.png'
import Image from 'next/image'

function confirmpasswordreset() {
  return (
    <div className="flex h-[100vh] flex-col items-center justify-center">
      <div className="flex flex-col items-center gap-10 text-xl ">
        <Image src={confirmedEmail} alt="confirmedEmail" />
        <p className="text-center">
          Password reset email sent. Please check your email.
        </p>
      </div>
    </div>
  )
}

export default confirmpasswordreset
