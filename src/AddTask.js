import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Stack from 'react-bootstrap/Stack';

export const AddTask = (props) => {
    return (
        <div className='AddTask'>
        <Stack direction="horizontal" gap={3}>
          <Form.Control className='me-auto' type="text" placeholder="Add Item" onChange={props.updateText}/>
          <Button variant='primary' onClick={props.addTask}>Add</Button>
        </Stack>
      </div>
    )
}