// Gyanocologist.js
import Image from 'next/image';
import Link from 'next/link';
import styles from '@/app/Home.module.css';; // Import a separate CSS module for styling

const Gyanocologist = () => {
  return (
    <div className={`flex flex-col md:flex-row ${styles.gynaContainer}`}>
      <div className={`border-2 p-6 m-4 rounded-lg w-full md:w-96 hover:bg-gray-100 transition duration-500 ${styles.gynaCard}`}>
        <Image className='rounded-xl' src={'https://www.toplinemd.com/south-miami-obgyn-associates/wp-content/uploads/sites/55/2022/01/8-Things-to-Consider-When-Choosing-a-Gynecologist.jpg'} alt='Image' width={300} height={300} />
        <h1 className='text-2xl text-cyan-500 font-semibold mt-2'>Dr. Anjali Malohtra</h1>
        <h1 className='text-lg font-semibold'>Gynecologist</h1>
        <p className='text-sm'>
          28+ years of experience in the field of women antispecies of blood
        </p>
        <h1>Gurugram, Haryana</h1>
        <Link href={''}>
          <h1 className='text-green-500 mt-4 font-semibold'>Available Today</h1>
          <button className='text-white text-lg bg-cyan-600 hover:bg-cyan-500 p-3 rounded-lg'>Book Appointment</button>
        </Link>
      </div>
      <div className={`border-2 p-6 m-4 rounded-lg w-full md:w-96 hover:bg-gray-100 transition duration-500 ${styles.gynaCard}`}>
        <Image className='rounded-xl' src={'https://www.drarchanadubey.com/wp-content/uploads/2021/02/PLtTGsTs2t.jpg'} alt='Image' width={300} height={300} />
        <h1 className='text-2xl text-cyan-500 font-semibold mt-2'>Dr. Sunidhi Upadhya</h1>
        <h1 className='text-lg font-semibold'>Gynecologist</h1>
        <p className='text-sm'>
          16+ years of experience in women Reproductive Organ
        </p>
        <h1>Delhi, South West</h1>
        <Link href={''}>
          <h1 className='text-green-500 mt-4 font-semibold'>Available Today</h1>
          <button className='text-white text-lg bg-cyan-600 hover:bg-cyan-500 p-3 rounded-lg'>Book Appointment</button>
        </Link>
      </div>
    </div>
  );
};

export default Gyanocologist;
