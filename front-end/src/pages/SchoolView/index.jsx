import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useHistory } from 'react-router';
import { Table } from 'react-bootstrap';
import { HeaderPrincipal } from '../../components';
import { schoolDetails } from '../../services';

export default function SchoolView() {
  const { id } = useParams();

  const [isLoading, setIsLoading] = useState(false);
  const [schoolShow, setSchoolShow] = useState([]);

  const history = useHistory();

  useEffect(() => {
    const localStorageUser = JSON.parse(localStorage.getItem('user'));
    if (localStorageUser === null) {
      history.push('/login');
    } else {
      setIsLoading(true);
      schoolDetails(id)
        .then((school) => {
          setSchoolShow(school);
          console.log('disparo API', school);
          setIsLoading(false);
        });
    }
  }, [history, id, setIsLoading]);
  return isLoading ? (
    <div>Carregando...</div>
  )
    : (
      <main>
        <HeaderPrincipal />
        Esses são os detalhes da Escola...
        <Table responsive hover borderless size="sm">
          <thead>
            <tr>
              <th>Nome da Turma</th>
              <th>Professor Responsável</th>
            </tr>
          </thead>
          <tbody>
            {schoolShow.map((school) => (
              <div key={school.courseId}>
                {school.course.map((course) => (
                  <tr key={course.name}>
                    <td>
                      {course.name}
                    </td>
                    <td>
                      {course.teacherId}
                    </td>
                  </tr>
                ))}
              </div>
            ))}
          </tbody>
        </Table>
      </main>
    );
}
