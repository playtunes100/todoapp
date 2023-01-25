import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Stack from 'react-bootstrap/Stack';

export const Task = (props) => {
    return (
        <div id= {"task "+props.id.toString()} className="Task">
              <Stack direction="horizontal" gap={3}>
                  <span className={props.isCompleted ? "Complete" : "NotComplete" }>{props.taskValue}</span>
                  <Form.Check className='ms-auto' type={'checkbox'} size="sm" onChange={() => props.completeTask(props.id)}></Form.Check>
                  <Button className='' variant="danger" size="sm" onClick={() => props.deleteTask(props.id)}>Delete</Button>{' '}
              </Stack>
        </div>
    )
}