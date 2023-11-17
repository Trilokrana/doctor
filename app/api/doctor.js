// pages/api/doctors.js
import axios from 'axios';
import faker from 'faker';

export default async (req, res) => {
  const { category } = req.query;

  // Generate some fake doctor data for demonstration
  const doctors = Array.from({ length: 5 }, (_, index) => ({
    id: index + 1,
    name: faker.name.findName(),
    specialty: faker.random.word(),
  }));

  res.status(200).json(doctors);
};
