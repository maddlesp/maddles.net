import { redirect } from 'next/navigation'

export default async function Page() {
  // Optional: Run server-side conditions or fetch data here
  redirect('/en') 
}
