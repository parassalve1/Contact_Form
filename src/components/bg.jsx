

export default function BackGround() {
  return (
    <div>
        <video autoPlay loop muted className='absolute top-0 left-0 z-[1] h-full w-full object-cover' >
            <source src='/bg.mp4' type='video/mp4' />
        </video>
    </div>
  )
}
