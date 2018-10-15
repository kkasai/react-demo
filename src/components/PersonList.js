import React from 'react';
import PersonContext from '../context/Person';

const PersonList = () => (
  <PersonContext.Consumer>
    {({personList}) => (
      <div>
        <table>
          <thead>
          <tr>
            <th>name</th>
            <th>age</th>
          </tr>
          </thead>
          <tbody>
          {personList.map(person => (
            <tr key={person.id}>
              <td>{person.name}</td>
              <td>{person.age}</td>
            </tr>
          ))}
          </tbody>
        </table>
      </div>
    )}
  </PersonContext.Consumer>
);

export default PersonList;
