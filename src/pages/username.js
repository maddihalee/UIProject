import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form"

export default function Username() {
  return (
    <>
    <div className="box">
      <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <br></br>
        <Form.Control type="email" placeholder="Enter email" />
        <br></br>
        <Form.Text className="text-muted">
          We will never share your email with anyone else.
        </Form.Text>
      </Form.Group> 
      </Form>
      <a href="/pages/password">
      <Button variant="primary" type="submit">
        Next
      </Button>
      </a>
    </div>
    </>
  )
}
