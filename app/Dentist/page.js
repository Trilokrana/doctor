// Dentist.js
import Image from 'next/image';
import Link from 'next/link';
import styles from '@/app/Home.module.css' // Import a separate CSS module for styling

const Dentist = () => {
  return (
    <div className={`flex flex-col md:flex-row ${styles.dentistContainer}`}>
      <div className={`border-2 p-6 m-4 rounded-lg w-full md:w-96 hover:bg-gray-100 transition duration-500 ${styles.dentistCard}`}>
        <Image className='rounded-xl' src={'https://t4.ftcdn.net/jpg/03/20/52/31/360_F_320523164_tx7Rdd7I2XDTvvKfz2oRuRpKOPE5z0ni.jpg'} width={300} height={300} />
        <h1 className='text-2xl text-cyan-500 font-semibold mt-2'>Dr. S.J. Kriplani</h1>
        <h1 className='text-lg font-semibold'>Senior Dentist</h1>
        <p className='text-sm'>
          19+ years of experience in the field of dentistry, specializing in oral health and restorative care.
        </p>
        <h1>Dalanwala, Dehradun</h1>
        <Link href={''}>
          <h1 className='text-green-500 mt-4 font-semibold'>Available Today</h1>
          <button className='text-white text-lg bg-cyan-600 hover:bg-cyan-500 p-3 rounded-lg'>Book Appointment</button>
        </Link>
      </div>
      <div className={`border-2 p-6 m-4 rounded-lg w-full md:w-96 hover:bg-gray-100 transition duration-500 ${styles.dentistCard}`}>
        <Image className='rounded-xl' src={'https://media.istockphoto.com/id/1470505351/photo/portrait-of-a-smiling-doctor-holding-glasses-and-a-mobile-phone-at-the-office.webp?b=1&s=170667a&w=0&k=20&c=8CebFLF4PFnt9JYJznGhYoOQxcyHLVpTGVfkvEsZd2Q='} width={300} height={100} />
        <h1 className='text-2xl text-cyan-500 font-semibold mt-2'>Dr. Pawan Kathait</h1>
        <h1 className='text-lg font-semibold'>Senior Dentist</h1>
        <p className='text-sm'>
          13+ years of overall experience
        </p>
        <h1>Premnagar, Dehradun</h1>
        <Link href={''}>
          <h1 className='text-green-500 mt-4 font-semibold'>Available Today</h1>
          <button className='text-white font-semibold text-lg bg-cyan-600 hover:bg-cyan-500 p-3 rounded-lg'>Book Appointment</button>
        </Link>
      </div>
    </div>
  );
};

export default Dentist;
