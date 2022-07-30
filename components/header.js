export default function Header() {
  return (
    <div className='text-center absolute inset-x-0 mx-4 my-8 py-2 z-50 
      backdrop-blur-sm rounded-lg'>
      <h1 className='text-4xl font-black mb-4'>Three.js</h1>
      <p>
        <a target={'_blank'} href='https://threejs.org/'
          className='hover:underline text-violet-400 font-bold'>
          Three.js
        </a> is a JavaScript library for building 3D applications.
      </p>
    </div>
  )
}
