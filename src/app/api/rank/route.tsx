import axios from 'axios'
import { NextResponse } from 'next/server'
 
export async function GET() {
    const res = await axios.get('https://sports.daum.net/prx/hermes/api/team/rank.json?leagueCode=kbo&seasonKey=2023&page=1&pageSize=100')
    const data = res.data
 
  return NextResponse.json(data)
}