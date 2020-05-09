import React from 'react';
import { Table } from 'reactstrap';
import { compareSync } from 'bcryptjs';
import { Link } from 'react-router-dom';
import TLoader from '../../utils/TLoader';

const MyTasksTable = (props) => {
  const mytemptasks = props.tasks;

  const taskSection = () => {
    if (props.tab == 2 || props.tab == 4) {
      return mytemptasks.work_data.map((task, id) => (
        <tbody>
          <tr key={id}>
            <td scope='row' className='mytasks-date'>
              {new Date(task.taskDetails[0].date).toDateString()}
            </td>

            <Link className='clear-a' to={`/w/${task._id}`}>
              <td>
                <a href='#'>I want someone to {task.taskDetails[0].headline}</a>
              </td>
            </Link>

            <th>{task.taskDetails[0].taskpoints}</th>
            <td>
              <a
                href='#'
                onClick={() => props.setProposal(task.taskDetails[0])}
              >
                View (
                {task.proposals ? task.taskDetails[0].proposals.length : 0})
              </a>
            </td>
            <td>
              <i class='fas fa-pencil-alt disabled'></i>
            </td>
          </tr>
        </tbody>
      ));
    }
    return mytemptasks.tasks_data.map((task, id) => (
      <tbody>
        <tr key={id}>
          <td scope='row' className='mytasks-date'>
            {new Date(task.date).toDateString()}
          </td>

          <Link className='clear-a' to={`/t/${task._id}`}>
            <td>
              <a href='#'>I want someone to {task.headline}</a>
            </td>
          </Link>

          <th>{task.taskpoints}</th>
          <td>
            <a href='#' onClick={() => props.setProposal(task)}>
              View ({task.proposals ? task.proposals.length : 0})
            </a>
          </td>
          <td>
            {props.tab == 5 ? (
              <i class='fas fa-pencil-alt disabled'></i>
            ) : (
              <Link to={`/e/${task._id}`}>
                <a href='#'>
                  <i class='fas fa-pencil-alt'></i>
                </a>
              </Link>
            )}
          </td>
        </tr>
      </tbody>
    ));
  };
  console.log(mytemptasks);
  if (!mytemptasks) {
    return (
      <div className=''>
        <Table className='mytasks-table'>
          <thead>
            <tr>
              <th className='mytasks-date-h'>Date</th>
              <th>Title</th>
              <th>Points</th>
              <th>Proposals</th>
              <th>Actions</th>
            </tr>
          </thead>
        </Table>
        <div className='taskv-loader mx-auto' style={{ height: '20vh' }}>
          <TLoader colored={true} />
        </div>
      </div>
    );
  }
  // if (mytemptasks.tasks_data.length == 0) {
  //   return (
  //     <div className=''>
  //       <Table className='mytasks-table'>
  //         <thead>
  //           <tr>
  //             <th className='mytasks-date-h'>Date</th>
  //             <th>Title</th>
  //             <th>Points</th>
  //             <th>Proposals</th>
  //             <th>Actions</th>
  //           </tr>
  //         </thead>
  //       </Table>
  //       <div className=' mx-auto'>No Tasks Available</div>
  //     </div>
  //   );
  // }
  return (
    <div className=''>
      <Table className='mytasks-table'>
        <thead>
          <tr>
            <th className='mytasks-date-h'>Date</th>
            <th>Title</th>
            <th>Points</th>
            <th>Proposals</th>
            <th>Actions</th>
          </tr>
        </thead>
        {taskSection()}
      </Table>
    </div>
  );
};

export default MyTasksTable;
