import { LineChart, Line, XAxis, YAxis } from 'recharts';
const LinkChart = () => {
  const studentData = [
    {
      id: 1,
      name: "Ayaan",
      math: 78,
      english: 85,
      science: 74,
      physics: 80,
      chemistry: 76,
    },
    {
      id: 2,
      name: "Meera",
      math: 92,
      english: 88,
      science: 81,
      physics: 90,
      chemistry: 85,
    },
    {
      id: 3,
      name: "Rahim",
      math: 65,
      english: 70,
      science: 68,
      physics: 62,
      chemistry: 66,
    },
    {
      id: 4,
      name: "Sophia",
      math: 88,
      english: 91,
      science: 84,
      physics: 87,
      chemistry: 89,
    },
    {
      id: 5,
      name: "Kabir",
      math: 72,
      english: 75,
      science: 70,
      physics: 73,
      chemistry: 71,
    },
    {
      id: 6,
      name: "Liya",
      math: 95,
      english: 89,
      science: 93,
      physics: 94,
      chemistry: 96,
    },
    {
      id: 7,
      name: "Arjun",
      math: 60,
      english: 65,
      science: 62,
      physics: 64,
      chemistry: 61,
    },
    {
      id: 8,
      name: "Naira",
      math: 85,
      english: 87,
      science: 80,
      physics: 86,
      chemistry: 83,
    },
    {
      id: 9,
      name: "Dev",
      math: 74,
      english: 78,
      science: 72,
      physics: 75,
      chemistry: 73,
    },
    {
      id: 10,
      name: "Hana",
      math: 90,
      english: 92,
      science: 88,
      physics: 91,
      chemistry: 90,
    },
  ];
  return <div className='md:w-4/6 mx-auto mt-10 items-center'>
    <LineChart width={800} height={400} data={studentData}>
        <XAxis dataKey={'name'}/>
        <YAxis></YAxis>
        <Line dataKey="math" stroke="yellow"></Line>
        <Line dataKey="physics" stroke="orange"></Line>
    </LineChart>
  </div>;
};

export default LinkChart;
