import cardiologist from './cardiologist.jpg'
import dermatologist from './dermatologist.webp'
import endocrinologist from './endocrinologist.webp'
import entspecialist from './entspecialist.jpg'
import gastroenterologist from './gastroenterologist.webp'
import gynecologist from './gynecologist.webp'
import doctorbanner from './doctorbanner.png'


import Nephrologist from './Nephrologist.webp'
import Neurologist from './Neurologist.webp'
import Oncologist from './Oncologist.webp'
import Ophthalmologist from './Ophthalmologist.webp'


import doc1 from './Orthopedic.webp'
import doc2 from './Pediatrician.webp'
import doc3 from './Psychiatrist.webp'
import doc4 from './Pulmonologist.webp'
import doc5 from './Urologist.webp'
import logo from './logo.webp'
import profilePic from './profilePic.jpeg'
import doctorgroup from './doctorgroup.png'
import doctorcontact from './doctorcontact.png';

import aboutpagedoc from './aboutpagedoc.webp'

export const assets = {
  logo,
  profilePic,
  doctorgroup,
  doc1,
  doc2,
  doc3,
  doctorbanner,
  aboutpagedoc,
  doctorcontact
}

export const specialtyData = [
  {
    speciality: "cardiologist",
    image: cardiologist
  },
  {
    speciality: "dermatologist",
    image: dermatologist
  },
  {
    speciality: "ent-specialist",
    image: entspecialist
  },
  {
    speciality: "endocrinologist",
    image: endocrinologist
  },
  {
    speciality: "gynecologist",
    image: gynecologist
  },
  {
    speciality: "gastroenterologist",
    image: gastroenterologist
  },
];

export const doctors = [
  {
    id: 1,
    name: "Dr. Amit Sharma",
    image: doc1,
    speciality: "Cardiologist",
    degree: "MBBS, MD (Cardiology)",
    experience: "12 Years",
    about:
      "Experienced cardiologist specializing in the diagnosis and treatment of heart diseases with a patient-centered approach.",
    fees: 1000,
    address: {
      line1: "17th Cross, Richmond Town",
      line2: "Circle Ring Road, Mumbai",
    },
  },
  {
    id: 2,
    name: "Dr. Priya Verma",
    image: doc2,
    speciality: "Dermatologist",
    degree: "MBBS, MD (Dermatology)",
    experience: "8 Years",
    about:
      "Specialist in skin, hair, and nail disorders with expertise in cosmetic dermatology treatments.",
    fees: 800,
    address: {
      line1: "22nd Main, Indiranagar",
      line2: "MG Road, Bengaluru",
    },
  },
  {
    id: 3,
    name: "Dr. Rajesh Gupta",
    image: doc3,
    speciality: "Orthopedic",
    degree: "MBBS, MS (Orthopedics)",
    experience: "15 Years",
    about:
      "Orthopedic surgeon focused on joint replacement, sports injuries, and fracture management.",
    fees: 1200,
    address: {
      line1: "45 Park Street",
      line2: "Salt Lake Sector V, Kolkata",
    },
  },
  {
    id: 4,
    name: "Dr. Neha Kapoor",
    image: doc4,
    speciality: "Pediatrician",
    degree: "MBBS, MD (Pediatrics)",
    experience: "10 Years",
    about:
      "Dedicated pediatrician providing comprehensive healthcare services for infants, children, and adolescents.",
    fees: 900,
    address: {
      line1: "12 Green Avenue",
      line2: "Civil Lines, Delhi",
    },
  },
  {
    id: 5,
    name: "Dr. Arjun Mehta",
    image: doc5,
    speciality: "Neurologist",
    degree: "MBBS, DM (Neurology)",
    experience: "14 Years",
    about:
      "Neurologist specializing in the treatment of brain, spine, and nervous system disorders.",
    fees: 1500,
    address: {
      line1: "78 Lake View Colony",
      line2: "Banjara Hills, Hyderabad",
    },
  },
];
export const user = {
  id: 1,
  fullName: "Kundan Kumar",
  email: "kundan.kumar865@gmail.com",
  phone: "9876543210",
  gender: "Male",
  dateOfBirth: "2002-08-15",
  bloodGroup: "B+",
  address: "Patna, Bihar",
  emergencyContact: "9876543200",
  profileImage: "https://i.pravatar.cc/300?img=1",
  createdAt: "2026-06-01T10:30:00",
}

const userData = [{
  id: 2,
  fullName: "Rahul Sharma",
  email: "rahul.sharma12@gmail.com",
  phone: "9876543211",
  gender: "Male",
  dateOfBirth: "1999-05-10",
  bloodGroup: "A+",
  address: "Delhi, India",
  emergencyContact: "9876543201",
  profileImage: "https://i.pravatar.cc/300?img=2",
  createdAt: "2026-05-20T09:15:00",
},
{
  id: 3,
  fullName: "Priya Singh",
  email: "priya.singh45@gmail.com",
  phone: "9876543212",
  gender: "Female",
  dateOfBirth: "2001-03-22",
  bloodGroup: "O+",
  address: "Lucknow, UP",
  emergencyContact: "9876543202",
  profileImage: "https://i.pravatar.cc/300?img=3",
  createdAt: "2026-05-18T14:20:00",
},
{
  id: 4,
  fullName: "Aman Verma",
  email: "aman.verma88@gmail.com",
  phone: "9876543213",
  gender: "Male",
  dateOfBirth: "1998-11-14",
  bloodGroup: "AB+",
  address: "Jaipur, Rajasthan",
  emergencyContact: "9876543203",
  profileImage: "https://i.pravatar.cc/300?img=4",
  createdAt: "2026-05-15T11:45:00",
},
{
  id: 5,
  fullName: "Neha Gupta",
  email: "neha.gupta67@gmail.com",
  phone: "9876543214",
  gender: "Female",
  dateOfBirth: "2000-07-30",
  bloodGroup: "B-",
  address: "Mumbai, Maharashtra",
  emergencyContact: "9876543204",
  profileImage: "https://i.pravatar.cc/300?img=5",
  createdAt: "2026-05-12T08:00:00",
},
{
  id: 6,
  fullName: "Rohit Kumar",
  email: "rohit.kumar99@gmail.com",
  phone: "9876543215",
  gender: "Male",
  dateOfBirth: "1997-09-18",
  bloodGroup: "O-",
  address: "Ranchi, Jharkhand",
  emergencyContact: "9876543205",
  profileImage: "https://i.pravatar.cc/300?img=6",
  createdAt: "2026-05-10T16:30:00",
},
{
  id: 7,
  fullName: "Anjali Mishra",
  email: "anjali.mishra23@gmail.com",
  phone: "9876543216",
  gender: "Female",
  dateOfBirth: "2003-01-25",
  bloodGroup: "A-",
  address: "Varanasi, UP",
  emergencyContact: "9876543206",
  profileImage: "https://i.pravatar.cc/300?img=7",
  createdAt: "2026-05-08T13:10:00",
},
{
  id: 8,
  fullName: "Vikash Yadav",
  email: "vikash.yadav55@gmail.com",
  phone: "9876543217",
  gender: "Male",
  dateOfBirth: "1996-12-05",
  bloodGroup: "B+",
  address: "Gaya, Bihar",
  emergencyContact: "9876543207",
  profileImage: "https://i.pravatar.cc/300?img=8",
  createdAt: "2026-05-05T10:00:00",
},
{
  id: 9,
  fullName: "Sneha Roy",
  email: "sneha.roy11@gmail.com",
  phone: "9876543218",
  gender: "Female",
  dateOfBirth: "2002-04-17",
  bloodGroup: "AB-",
  address: "Kolkata, West Bengal",
  emergencyContact: "9876543208",
  profileImage: "https://i.pravatar.cc/300?img=9",
  createdAt: "2026-05-03T15:40:00",
},
{
  id: 10,
  fullName: "Arjun Patel",
  email: "arjun.patel77@gmail.com",
  phone: "9876543219",
  gender: "Male",
  dateOfBirth: "1995-06-12",
  bloodGroup: "O+",
  address: "Ahmedabad, Gujarat",
  emergencyContact: "9876543209",
  profileImage: "https://i.pravatar.cc/300?img=10",
  createdAt: "2026-05-01T12:00:00",
},
];

export const appointments = [
  {
    id: 1,
    doctorId: "DOC001",
    doctorName: "Dr. Rajesh Kumar",
    speciality: "Cardiologist",
    experience: "12 Years",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
    address: {
      line1: "Apollo Hospital",
      line2: "Boring Road, Patna"
    },
    appointmentDate: "10 Jun 2026",
    appointmentTime: "10:00 AM",
    fees: 800,
    status: "Confirmed"
  },
  {
    id: 2,
    doctorId: "DOC002",
    doctorName: "Dr. Priya Sharma",
    speciality: "Dermatologist",
    experience: "8 Years",
    image: "https://randomuser.me/api/portraits/women/2.jpg",
    address: {
      line1: "Medanta Clinic",
      line2: "Connaught Place, Delhi"
    },
    appointmentDate: "12 Jun 2026",
    appointmentTime: "11:30 AM",
    fees: 600,
    status: "Pending"
  },
  {
    id: 3,
    doctorId: "DOC003",
    doctorName: "Dr. Amit Verma",
    speciality: "Neurologist",
    experience: "15 Years",
    image: "https://randomuser.me/api/portraits/men/3.jpg",
    address: {
      line1: "AIIMS",
      line2: "Ansari Nagar, New Delhi"
    },
    appointmentDate: "15 Jun 2026",
    appointmentTime: "09:00 AM",
    fees: 1200,
    status: "Confirmed"
  },
  {
    id: 4,
    doctorId: "DOC004",
    doctorName: "Dr. Neha Singh",
    speciality: "Gynecologist",
    experience: "10 Years",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
    address: {
      line1: "Paras Hospital",
      line2: "Bailey Road, Patna"
    },
    appointmentDate: "18 Jun 2026",
    appointmentTime: "02:00 PM",
    fees: 700,
    status: "Completed"
  },
  {
    id: 5,
    doctorId: "DOC005",
    doctorName: "Dr. Vikash Kumar",
    speciality: "Orthopedic",
    experience: "14 Years",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
    address: {
      line1: "Ford Hospital",
      line2: "Kankarbagh, Patna"
    },
    appointmentDate: "20 Jun 2026",
    appointmentTime: "04:00 PM",
    fees: 900,
    status: "Confirmed"
  },
  {
    id: 6,
    doctorId: "DOC006",
    doctorName: "Dr. Anjali Gupta",
    speciality: "Pediatrician",
    experience: "9 Years",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
    address: {
      line1: "Child Care Center",
      line2: "Lalpur, Ranchi"
    },
    appointmentDate: "22 Jun 2026",
    appointmentTime: "11:00 AM",
    fees: 500,
    status: "Pending"
  },
  {
    id: 7,
    doctorId: "DOC007",
    doctorName: "Dr. Rohit Mishra",
    speciality: "ENT Specialist",
    experience: "11 Years",
    image: "https://randomuser.me/api/portraits/men/7.jpg",
    address: {
      line1: "Max Hospital",
      line2: "Gomti Nagar, Lucknow"
    },
    appointmentDate: "25 Jun 2026",
    appointmentTime: "03:30 PM",
    fees: 650,
    status: "Cancelled"
  },
  {
    id: 8,
    doctorId: "DOC008",
    doctorName: "Dr. Pooja Sinha",
    speciality: "Ophthalmologist",
    experience: "13 Years",
    image: "https://randomuser.me/api/portraits/women/8.jpg",
    address: {
      line1: "Eye Care Hospital",
      line2: "Fraser Road, Patna"
    },
    appointmentDate: "27 Jun 2026",
    appointmentTime: "10:15 AM",
    fees: 750,
    status: "Confirmed"
  },
  {
    id: 9,
    doctorId: "DOC009",
    doctorName: "Dr. Sandeep Yadav",
    speciality: "Psychiatrist",
    experience: "16 Years",
    image: "https://randomuser.me/api/portraits/men/9.jpg",
    address: {
      line1: "Mental Wellness Center",
      line2: "Saket, Delhi"
    },
    appointmentDate: "29 Jun 2026",
    appointmentTime: "05:00 PM",
    fees: 1000,
    status: "Completed"
  },
  {
    id: 10,
    doctorId: "DOC010",
    doctorName: "Dr. Kavita Singh",
    speciality: "Dentist",
    experience: "7 Years",
    image: "https://randomuser.me/api/portraits/women/10.jpg",
    address: {
      line1: "Smile Dental Care",
      line2: "Exhibition Road, Patna"
    },
    appointmentDate: "30 Jun 2026",
    appointmentTime: "12:30 PM",
    fees: 400,
    status: "Confirmed"
  }
];
