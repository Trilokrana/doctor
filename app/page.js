// pages/index.js
import Link from 'next/link';
import Image from 'next/image';
import styles from './globals.css'; // Import a separate CSS module for styling

const Home = () => {
  return (
    <div className={`text-center text-xl m-4 ${styles.container}`}>
      <h1 className='text-4xl'>Welcome to the Medical Portal</h1>
      <p>Book an Appointment for an in-Clinic medical consultations</p>
      <div className={`flex flex-col md:flex-row justify-around border-2 m-10 p-6 rounded-lg ${styles.cardContainer}`}>
        <div className={`border-2 p-6 m-4 rounded-lg hover:bg-gray-100 transition duration-500 ${styles.card}`}>
          <Link href="/Dentist">
            <Image className='rounded-lg' src={'https://t3.ftcdn.net/jpg/01/97/37/30/360_F_197373009_Mr2yNi8zxaYCpiIiP9gOB8QNDKqUpWo2.jpg'} alt='Image' width={300} height={300} />
            <h1 className='text-start text-lg font-semibold m-1'>Dentist</h1>
            <p className='text-lg'>Dentists take care of teeth & specialize in oral health and hygiene...</p>
          </Link>
        </div>
        <div className={`border-2 p-6 m-4 rounded-lg hover:bg-gray-100 transition duration-500 ${styles.card}`}>
          <Link href="Orthopedics">
            <Image className='rounded-lg' src={'https://wp02-media.cdn.ihealthspot.com/wp-content/uploads/sites/476/2020/05/iStock-994645346-1024x683.jpg'} alt='Image' width={300} height={300} />
            <h1 className='text-start text-lg font-semibold m-1'>Orthopedics</h1>
            <p className='text-lg'>Orthopedic doctors focus on the affecting bones, and tendons...</p>
          </Link>
        </div>
        <div className={`border-2 p-6 m-4 rounded-lg hover:bg-gray-100 transition duration-500 ${styles.card}`}>
          <Link href="Gyanocologist">
            <Image className='rounded-lg' src={'https://thumbs.dreamstime.com/b/gynecologist-doctor-pregnant-woman-hospital-pregnancy-gynecology-medicine-health-care-people-concept-stethoscope-70948901.jpg'} alt='Image' width={300} height={300} />
            <h1 className='text-start text-lg font-semibold m-1'>Gynecologist</h1>
            <p className='text-lg'>Gynecologists specialize in women's reproductive health...</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
