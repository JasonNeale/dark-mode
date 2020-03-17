import React from "react"
import Chart from "./Chart"

const Charts = ({ coinData }) => {
    return (
        <div className="charts">
            {coinData.map(coin => (
                <div className="chart__container" key={coin.name}>
                    <div className="coin__info_wrapper">
                        <span className="coin__title">{coin.market_cap_rank}. <img className="coin__logo" src={coin.image} height="40" alt={coin.name} />
                            {coin.name} (<span>{coin.symbol}</span>) - ${coin.current_price}
                        </span>
                    </div>
                    <Chart sparklineData={coin.sparkline_in_7d.price} />
                </div>
            ))}
        </div>
    )
}
export default Charts