
import { useState } from 'react';
import Employee from './components/Employee';
import './index.css';

function App() {
  const [employees, setEmployees] = useState([
    {
      name: 'Edward', role: 'Developer', image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
      name: 'John', role: 'Intern', image: 'https://images.pexels.com/photos/2282520/pexels-photo-2282520.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      name: 'Lina', role: 'Designer', image: 'https://images.pexels.com/photos/3201694/pexels-photo-3201694.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      name: 'Sara', role: 'Manager', image: 'https://images.pexels.com/photos/5999914/pexels-photo-5999914.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      name: 'Dave', role: 'Customer Success', image: 'https://images.pexels.com/photos/3778680/pexels-photo-3778680.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      name: 'Susie', role: 'Sales Head', image: 'https://images.pexels.com/photos/14634933/pexels-photo-14634933.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      name: 'Christine', role: 'Designer', image: 'https://images.pexels.com/photos/14634929/pexels-photo-14634929.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      name: 'Alex', role: 'Marketing Head', image: 'https://images.pexels.com/photos/14634935/pexels-photo-14634935.jpeg?auto=compress&cs=tinysrgb&w=800'
    }
  ])
  return (
    <div className='App'>
      <div className='flex flex-wrap' justify-center>
        {
          employees.map((employee, index) => (
            <Employee name={employee.name} role={employee.role} image={employee.image} key={index} />
          ))
        }
      </div>
    </div>
  );
}

export default App;
