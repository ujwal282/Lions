import React from "react";
import { motion } from "framer-motion";
const ProfileCard = () => {
    const members = [
  {
    name: "Lion Ujwal Paudel",
    position: "District Governor",
    contact: "9741719167",
    email: "ujwalpaudel12345@gmail.com",
    memberNumber: "2602406",
    address: "Simara, Bara"
  },
  {
    name: "Lion Sita Sharma",
    position: "Secretary",
    contact: "9812345678",
    email: "sitasharma.lions@gmail.com",
    memberNumber: "2602407",
    address: "Birgunj, Parsa"
  },
  {
    name: "Lion Ram Karki",
    position: "Treasurer",
    contact: "9801122334",
    email: "ramkarki.lions@gmail.com",
    memberNumber: "2602408",
    address: "Hetauda, Makwanpur"
  },
  {
    name: "Lion Asha Thapa",
    position: "Vice Governor",
    contact: "9823456789",
    email: "ashathapa.lions@gmail.com",
    memberNumber: "2602409",
    address: "Chitwan, Bharatpur"
  },
  {
    name: "Lion Bikash Regmi",
    position: "Member",
    contact: "9745612345",
    email: "bikashregmi.lions@gmail.com",
    memberNumber: "2602410",
    address: "Narayangadh, Chitwan"
  },
  {
    name: "Lion Sunita Yadav",
    position: "Member",
    contact: "9809988776",
    email: "sunitayadav.lions@gmail.com",
    memberNumber: "2602411",
    address: "Kalaiya, Bara"
  },
  {
    name: "Lion Dipesh Shrestha",
    position: "IT Officer",
    contact: "9811122233",
    email: "dipeshshrestha.lions@gmail.com",
    memberNumber: "2602412",
    address: "Janakpur, Dhanusha"
  },
  {
    name: "Lion Rupa Chaudhary",
    position: "Member",
    contact: "9865432109",
    email: "rupachaudhary.lions@gmail.com",
    memberNumber: "2602413",
    address: "Gaur, Rautahat"
  },
  {
    name: "Lion Kiran Bista",
    position: "Event Coordinator",
    contact: "9803214567",
    email: "kiranbista.lions@gmail.com",
    memberNumber: "2602414",
    address: "Lahan, Siraha"
  },
  {
    name: "Lion Manish Tiwari",
    position: "Youth Director",
    contact: "9856078945",
    email: "manishtiwari.lions@gmail.com",
    memberNumber: "2602415",
    address: "Rajbiraj, Saptari"
  }
];

  return (
       <>
       {
        members.map(({name, position, contact, email, memberNumber, address}) => (
            <motion.div key={Math.random() * 100 + 1} className="w-72 shadow shadow-gray-500"
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: false }}
>
            <div className="w-full flex justify-center items-center bg-primary">
            <img src="images/dgone.svg" className="w-full" alt="Digi Members" />
            </div>
            <div className="flex flex-col items-center justify-center p-4">
              <div className="text-info text-sm flex flex-col justify-center items-center gap-2">
                <h1 className="text-heading text-xl font-bold">{name}</h1>
                  <span className="text-black font-bold text-sm"><strong>{position}</strong></span>
                <div className="flex flex-col justify-center items-center gap-1 text-info">
                <span>{contact}</span>
                  <span>{email}</span>
                  <span>{memberNumber}</span>
                  <span>{address}</span>
                </div>
              </div>
            </div>
          </motion.div>
        ))
       }
       </>
  );
};

export default ProfileCard;
