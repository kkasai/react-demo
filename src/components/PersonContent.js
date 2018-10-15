import React, { Fragment } from 'react';
import PersonRegister from './PersonRegister';
import PersonList from './PersonList';
import PersonContext from '../context/Person'

const PersonContent = () => (
  <PersonContext.Consumer>
    {({getPersonList}) => (
      <Fragment>
        <PersonRegister getPersonList={getPersonList} />
        <PersonList />
      </Fragment>

    )}
  </PersonContext.Consumer>
);

export default PersonContent;