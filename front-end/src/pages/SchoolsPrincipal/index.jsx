import React, { useEffect, useState } from 'react';
import { useHistory, Link } from 'react-router-dom';
import { Table } from 'react-bootstrap';
import { HeaderPrincipal } from '../../components';
import { schoolList } from '../../services';

export default function SchoolsPrincipal() {
  const [isLoading, setIsLoading] = useState(false);
  const [schoolsList, setSchoolsList] = useState([]);

  const history = useHistory();

  useEffect(() => {
    const localStorageUser = JSON.parse(localStorage.getItem('user'));
    if (localStorageUser === null) {
      history.push('/login');
    } else {
      setIsLoading(true);
      schoolList()
        .then((schools) => {
          setSchoolsList(schools);
          console.log(schools);
          setIsLoading(false);
        });
    }
  }, [history, setIsLoading]);

  return isLoading ? (
    <div>Carregando...</div>
  )
    : (
      <main>
        <HeaderPrincipal />
        <section>
          Escolas Cadastradas no Sistema
          <Table responsive hover borderless size="sm">
            <tbody>
              {schoolsList.map((school) => (
                <tr key={school.id}>
                  <Link to={`/home/diretoria/escolas/${school.id}`}>
                    <td>
                      {school.id}
                    </td>
                    <td>
                      {school.name}
                    </td>
                  </Link>
                </tr>
              ))}
            </tbody>
          </Table>
        </section>
      </main>
    );
}
