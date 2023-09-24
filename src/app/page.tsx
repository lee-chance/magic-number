'use client'
import axios from "axios";
import Image from "next/image";
import { useEffect, useState } from "react";

export type Team = {
  teamId:          number;
  cpTeamId:        string;
  nameMain:        string;
  rank:            Rank;
  shortName:       string;
  imageUrl:        string;
  name:            string;
}

export type Rank = {
  rank:    number;
  game:    number;
  win:     number;
  draw:    number;
  loss:    number;
  wpct:    number;
  gb:      string;
  streak:  string;
  orderNo: number;
}

export default function Home() {
  const [recordList, setRecordList] = useState<Team[]>([])

  useEffect(() => {
    axios.get('/api/rank')
      .then(res => {
        const recordList = res.data.list
        setRecordList(recordList)
      })
  }, [])

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                순위
              </th>
              <th scope="col" className="px-6 py-3">
                경기수
              </th>
              <th scope="col" className="px-6 py-3">
                승
              </th>
              <th scope="col" className="px-6 py-3">
                무
              </th>
              <th scope="col" className="px-6 py-3">
                패
              </th>
              <th scope="col" className="px-6 py-3">
                매직넘버
              </th>
              {/* <th scope="col" className="px-6 py-3">
                기타
              </th> */}
            </tr>
          </thead>

          <tbody>
            {
              recordList.map((team) => (
                <tr key={team.teamId} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                  <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    <div className="flex items-center">
                      <span>{team.rank.rank}</span>
                      <Image src={team.imageUrl} width="30" height="30" alt="" />
                      <span>{team.shortName}</span>
                    </div>
                  </th>
                  <td className="px-6 py-4">
                    {team.rank.game}
                  </td>
                  <td className="px-6 py-4">
                    {team.rank.win}
                  </td>
                  <td className="px-6 py-4">
                    {team.rank.draw}
                  </td>
                  <td className="px-6 py-4">
                    {team.rank.loss}
                  </td>
                  <td className="px-6 py-4">
                    todo
                  </td>
                  {/* <td className="flex items-center px-6 py-4 space-x-3">
                    <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                    <a href="#" className="font-medium text-red-600 dark:text-red-500 hover:underline">Remove</a>
                  </td> */}
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    </main>
  )
}
