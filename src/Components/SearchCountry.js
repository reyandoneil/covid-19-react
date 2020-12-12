import { Form } from 'react-bootstrap'


function SearchCountry() {
    return (
        <div>
            <Form>
                <Form.Group controlId="exampleForm.SelectCustom">
                    <Form.Label>Custom select</Form.Label>
                    <Form.Control as="select" custom>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                    </Form.Control>
                </Form.Group>
            </Form>
        </div>
    )
}

export default SearchCountry
