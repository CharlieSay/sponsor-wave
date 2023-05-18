import { Deal, columns } from "./columns"
import { DataTable } from "./data-table"

async function getData(): Promise<Deal[]> {
  // Fetch data from your API here.
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        ...Array.from({ length: 97 }, (_, i) => ({
          id: i + 1,
          deal_offer_id: i + 1,
          streamer_id: 1,
          proposal: `This is proposal ${
            i + 1
          }. I think I would be a great fit for your brand because... I think I would be a great fit for your brand because... I think I would be a great fit for your brand because... I think I would be a great fit for your brand because... I think I would be a great fit for your brand because... I think I would be a great fit for your brand because...`,
          bid_deadline: new Date(Date.now() + 1000 * 60 * 60 * 24 * (i + 1)), // i+1 days from now
          average_earnings: Math.floor(Math.random() * 2000) + 1000, // random average earnings between 1000 and 3000
          demand_level: ["very low", "low", "medium", "high", "very high"][
            Math.floor(Math.random() * 5)
          ], // random demand level
        })),
      ])
    }, 1000)
  })
}

export default async function DemoPage() {
  const data = await getData()

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>
  )
}
