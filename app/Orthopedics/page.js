import Image from 'next/image';
import Link from 'next/link';
import styles from '@/app/Home.module.css'// Import a separate CSS module for styling

const Orthopedics = () => {
  return (
    <div className={`flex flex-col md:flex-row ${styles.orthoContainer}`}>
      <div className={`border-2 p-6 m-4 rounded-lg w-full md:w-96 hover:bg-gray-100 transition duration-500 ${styles.orthoCard}`}>
        <Image className='rounded-xl' src={'https://aica.com/wp-content/uploads/2020/01/How-to-Find-an-Orthopedic-Doctor-After-an-Accident.jpg'} alt='Image' width={300} height={300} />
        <h1 className='text-2xl text-cyan-500 font-semibold mt-2'>Dr. Amit Trivedi</h1>
        <h1 className='text-lg font-semibold'>Orthopedics</h1>
        <p className='text-sm'>
          33+ years of experience Human Bone Marrow
        </p>
        <h1>Bangalore, AIIMS</h1>
        <Link href={''}>
          <h1 className='text-green-500 mt-4 font-semibold'>Available Today</h1>
          <button className='text-white text-lg bg-cyan-600 hover:bg-cyan-500 p-3 rounded-lg'>Book Appointment</button>
        </Link>
      </div>
      <div className={`border-2 p-6 m-4 rounded-lg w-full md:w-96 hover:bg-gray-100 transition duration-500 ${styles.orthoCard}`}>
        <Image className='rounded-xl' src={'https://www.manipalhospitals.com/uploads/doctors_photo/best-orthopedics-doctor-in-mysore-dr-amruth-k-h.png'}  alt='Image' width={300} height={300} />
        <h1 className='text-2xl text-cyan-500 font-semibold mt-2'>Dr. Sudhanshu Patel</h1>
        <h1 className='text-lg font-semibold'>Orthopedics</h1>
        <p className='text-sm'>
          19+ years of experience Ligaments and surgical operations
        </p>
        <h1>Pune, J.V.M Hospital</h1>
        <Link href={''}>
          <h1 className='text-green-500 mt-4 font-semibold'>Available Today</h1>
          <button className='text-white text-lg bg-cyan-600 hover:bg-cyan-500 p-3 rounded-lg'>Book Appointment</button>
        </Link>
      </div>
    </div>
  );
};

export default Orthopedics;
