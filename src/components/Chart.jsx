import React from "react"
import moment from "moment"
import {AreaChart,Area,CartesianGrid,XAxis,YAxis,Tooltip } from "recharts"

const Chart = ({ sparklineData }) => {
    const formattedData = sparklineData.map((price, idx) => {
        if (idx % 6 === 0) {
            const timeToSubtract = 168 - idx
            const date = moment().subtract(timeToSubtract, "hours").format("M/d")
            return { value: price, date }
        } else if (idx === sparklineData.length - 1) {
            const date = moment().format("M/d")
            return { value: price, date }
        }
        return null
    })
    .filter(data => data)

    return (
        <AreaChart width={1100} height={300} data={formattedData}>
            <Area type="monotone" dataKey="value" stroke="#4444ff" fill="#1111bb" />
            <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
            <XAxis dataKey="date" interval={2} />
            <YAxis />
            <Tooltip />
        </AreaChart>
    )
}

export default Chart