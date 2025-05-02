import React, { useState } from 'react'
import ClubCard from '../Cards/ClubCard'
import Search from '../Search/Search'

const allClubs = [
  { name: "Gautam Buddha", clubid: "302", charterdate: "2024-04-20", member: "40", districmultiple: "12345" },
  { name: "Ashoka Lions", clubid: "303", charterdate: "2023-03-12", member: "35", districmultiple: "12345" },
  { name: "Nehru Vision", clubid: "304", charterdate: "2022-06-18", member: "42", districmultiple: "12345" },
  { name: "Tagore Harmony", clubid: "305", charterdate: "2021-09-24", member: "37", districmultiple: "12345" },
  { name: "Vivekananda Youth", clubid: "306", charterdate: "2020-01-11", member: "50", districmultiple: "12345" },
  { name: "Subhash Unity", clubid: "307", charterdate: "2019-07-30", member: "28", districmultiple: "12345" },
  { name: "Azad Dreamers", clubid: "308", charterdate: "2023-02-25", member: "45", districmultiple: "12345" },
  { name: "Kalam Innovators", clubid: "309", charterdate: "2021-05-17", member: "60", districmultiple: "12345" },
  { name: "Sardar Peace", clubid: "310", charterdate: "2024-01-10", member: "39", districmultiple: "12345" },
  { name: "Bose Inspiration", clubid: "311", charterdate: "2022-10-06", member: "41", districmultiple: "12345" },
  { name: "Ramanujan Brilliance", clubid: "312", charterdate: "2020-08-23", member: "33", districmultiple: "12345" },
  { name: "Bhabha Intellect", clubid: "313", charterdate: "2021-11-19", member: "38", districmultiple: "12345" },
  { name: "Chandrashekhar Spirit", clubid: "314", charterdate: "2022-04-28", member: "47", districmultiple: "12345" },
  { name: "Aryabhatta Wisdom", clubid: "315", charterdate: "2019-09-14", member: "31", districmultiple: "12345" },
  { name: "Tilak Visionaries", clubid: "316", charterdate: "2020-03-08", member: "43", districmultiple: "12345" },
  { name: "Rajaji Integrity", clubid: "317", charterdate: "2023-05-01", member: "36", districmultiple: "12345" },
  { name: "Lal Bahadur", clubid: "318", charterdate: "2022-07-05", member: "29", districmultiple: "12345" },
  { name: "Raman Scientists", clubid: "319", charterdate: "2021-02-27", member: "34", districmultiple: "12345" },
  { name: "Vikram Sarabhai", clubid: "320", charterdate: "2020-10-13", member: "40", districmultiple: "12345" },
  { name: "Kiran Bedi", clubid: "321", charterdate: "2018-06-09", member: "32", districmultiple: "12345" },
  { name: "Mother Teresa", clubid: "322", charterdate: "2023-11-03", member: "48", districmultiple: "12345" },
  { name: "Mahatma Peace", clubid: "323", charterdate: "2022-12-20", member: "44", districmultiple: "12345" },
  { name: "Ambedkar Equality", clubid: "324", charterdate: "2021-04-02", member: "46", districmultiple: "12345" },
  { name: "Sarojini Strength", clubid: "325", charterdate: "2019-01-26", member: "30", districmultiple: "12345" },
  { name: "Nightingale Helpers", clubid: "326", charterdate: "2023-08-15", member: "53", districmultiple: "12345" },
  { name: "Green Earth", clubid: "327", charterdate: "2020-12-01", member: "49", districmultiple: "12345" },
  { name: "Unity in Action", clubid: "328", charterdate: "2022-01-18", member: "27", districmultiple: "12345" },
  { name: "Hope Builders", clubid: "329", charterdate: "2021-03-14", member: "51", districmultiple: "12345" },
  { name: "Peace Warriors", clubid: "330", charterdate: "2019-05-21", member: "26", districmultiple: "12345" },
  { name: "Bright Future", clubid: "331", charterdate: "2024-02-07", member: "52", districmultiple: "12345" }
];

const Clubs = () => {
  const [query, setQuery] = useState("");
  const filteredClubs = allClubs.filter(club =>
    club.clubid.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className='flex flex-col items-center justify-center pt-48'>
      <Search onSearch={setQuery} query={query} />
      <div className='flex flex-col justify-center items-center  xl:p-10 gap-4'>
        <ClubCard clubs={query === "" ? allClubs : filteredClubs} />
      </div>
    </div>
  );
};

export default Clubs;
