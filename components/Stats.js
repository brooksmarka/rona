import useStats from "../utils/useStats";
import { parseNumber } from "../utils/helper";

export default function Stats({ url }){
    const { stats, loading, error } = useStats(url);
    console.log(stats, loading, error);
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error...</p>;
    return (
        <div>
            <div className="statBlock">
                <h3>Confirmed</h3>
                <span>{stats && stats.confirmed ? parseNumber(stats.confirmed.value) : "0"}</span>
            </div>
            <div className="statBlock">
                <h3>Deaths</h3>
                <span>{stats && stats.deaths ? parseNumber(stats.deaths.value) : "0"}</span>
            </div>
            <div className="statBlock">
                <h3>Recovered</h3>
                <span>{stats && stats.recovered? parseNumber(stats.recovered.value) : "0"}</span>
            </div>
        </div>
    )
}