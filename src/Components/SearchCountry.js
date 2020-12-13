import { Form } from 'react-bootstrap'
import { fetchDailyCovid } from '../store/actions/covid-action'
import { useDispatch } from 'react-redux'


function SearchCountry(dataCountry) {
    const dispatch = useDispatch()
    const { data } = dataCountry

    const handleChange = (e) => {
        dispatch(fetchDailyCovid(e.target.value));
    }
    // console.log(data, 'serach');
    return (
        <div className='search'>
            <center>
                <Form>
                    <Form.Group controlId="search-country">
                        <Form.Label></Form.Label>
                        <Form.Control as="select" custom onChange={(e) => handleChange(e)}>
                            {data.map((country, i) => {
                                return <option key={i}>{country.Country}</option>
                            })}
                        </Form.Control>
                    </Form.Group>
                </Form>
            </center>
        </div>
    )
}

export default SearchCountry
