import Card from './Card';
import styled from 'styled-components'


const CardPost = () => {
  
  return (
      <CardContainer>
          {posts.map((post) => (
              <Card
                  key={post.id}
                  title={post.title}
                  description={post.description}
                  image={post.image || "https://via.placeholder.com/160x160"}
              />
          ))}
      </CardContainer>
  );
};

export default CardPost;

const CardContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 1rem;
    padding: 1rem;
`;