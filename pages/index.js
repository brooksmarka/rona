import Stats from '../components/Stats';
import CountrySelector from '../components/CountrySelector';
import Header from '../components/Header';
import useStats from '../utils/useStats';
import { parseDate } from '../utils/helper'


export default function IndexPage(){

    const { stats:countries, loading, error } = useStats(
        `https://covid19.mathdro.id/api/countries/USA`
    );

    return (
        <div>
            <Header />
            <h2>Worldwide Stats</h2>
            <Stats url={"https://covid19.mathdro.id/api"}></Stats>
            <CountrySelector url={"https://covid19.mathdro.id/api/countries"}></CountrySelector>
            <h4>Source: Johns Hopkins University Center for Systems Science and Engineering (CSSE)</h4>
            {countries && <h4>Last Updated: {parseDate(countries.lastUpdate)}</h4>}

        </div>
    )
}