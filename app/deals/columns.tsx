"use client"

import { ColumnDef } from "@tanstack/react-table"

export type Deal = {
  id: number
  deal_offer_id: number
  streamer_id: number
  proposal: string
  bid_deadline: Date
  average_earnings: number
  demand_level: DemandLevel
}

export enum DemandLevel {
  VeryLow = "very low",
  Low = "low",
  Medium = "medium",
  High = "high",
  VeryHigh = "very high",
}

const demandLevelReturn = (demand: DemandLevel) => {
  if (demand === DemandLevel.VeryHigh) return "bg-green-700 text-green-100"
  if (demand === DemandLevel.High) return "bg-green-300 text-green-800"
  if (demand === DemandLevel.Medium) return "bg-orange-400 text-orange-800"
  if (demand === DemandLevel.Low)
    return "bg-red-300 text-red-800 dark:bg-red-900 dark:text-red-300"
  if (demand === DemandLevel.VeryLow)
    return "bg-red-700 text-pink-200 dark:bg-pink-900 dark:text-pink-300"
}

export const columns: ColumnDef<Deal>[] = [
  {
    header: "Proposal",
    accessorKey: "proposal",
    size: 400,
  },
  {
    header: "Bid deadline",
    accessorKey: "bid_deadline",
    cell: ({ row }) => {
      return <span>{row.getValue("bid_deadline").toDateString()}</span>
    },
  },
  {
    header: "Average Earnings",
    accessorKey: "average_earnings",
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("average_earnings"))
      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "GBP",
      }).format(amount)

      return <div className="font-medium">{formatted}</div>
    },
  },
  {
    header: "Demand Level",
    accessorKey: "demand_level",
    cell: ({ row }) => {
      const demandLevel: DemandLevel = row.getValue("demand_level")
      return (
        <span
          className={`mr-2 min-w-full rounded px-2.5 py-0.5 text-xs font-bold uppercase ${demandLevelReturn(
            demandLevel
          )}`}
        >
          {demandLevel}
        </span>
      )
    },
  },
]
