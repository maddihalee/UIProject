import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form"

export default function Username() {
  return (
    <>
    <div className="box">
    <div className="progress">
        Step 2/3
      </div>
      <Form>
    <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <br></br>
        <Form.Control type="password" placeholder="Password" />
        <br></br>
        Pick a password that is complex, but memorable!
      </Form.Group>
      </Form>
      <a href="/pages/confirmation">
      <Button variant="primary" type="submit">
        Next
      </Button>
      </a>
    </div>
    </>
  )
}
