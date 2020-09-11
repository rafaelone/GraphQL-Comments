import React, { useCallback } from 'react';
import './App.css';
import Form from './components/Form';
import Comment from './components/Comment';

import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';

const GET_COMMENTS = gql`
  query {
    getComments {
      id
      name
      content
    }
  }
`;

function App() {
  const { loading, error, data, refetch } = useQuery(GET_COMMENTS);

  const handleAddComent = useCallback(() => {
    refetch();
  }, [refetch]);

  if (error) return <p>Pô, deu ruim demais</p>;

  return (
    <>
      <h1>GraphQL Comments</h1>
      <Form onAddCommnet={handleAddComent} />
      {loading ? (
        'Carregando...'
      ) : (
        <section className="comments">
          {data.getComments.map((comment: IComment) => (
            <Comment
              key={comment.id}
              name={comment.name}
              description={comment.content}
            />
          ))}
        </section>
      )}
    </>
  );
}

export default App;
