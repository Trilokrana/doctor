// pages/doctors.js
import { useRouter } from 'next/router';
import axios from 'axios';

const Doctors = ({ doctors }) => {
  const router = useRouter();
  const { category } = router.query;

  return (
    <div>
      <h1>Doctors in {category}</h1>
      {doctors.length > 0 ? (
        <ul>
          {doctors.map((doctor) => (
            <li key={doctor.id}>
              {doctor.name} - {doctor.specialty}
            </li>
          ))}
        </ul>
      ) : (
        <p>No doctors available for this category.</p>
      )}
    </div>
  );
};

export async function getServerSideProps(context) {
  const { category } = context.query;

  try {
    const response = await axios.get(`/api/doctors?category=${category}`);
    const doctors = response.data;

    return {
      props: {
        doctors,
      },
    };
  } catch (error) {
    console.error('Error fetching doctors:', error.message);
    return {
      props: {
        doctors: [],
      },
    };
  }
}

export default Doctors;
