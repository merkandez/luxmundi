import styled from 'styled-components';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const teamMembers = [
  {
    name: 'Jenny Tello',
    role: 'Fotógrafa Principal',
    image: 'http://localhost:8080/uploads/jenny.svg',
    bio: 'Desde Perú, ha recorrido su país y muchos otros, buscando capturar la esencia de cada lugar que visita. Su amor por la fotografía le permite contar historias visuales que capturan la cultura, las tradiciones y la naturaleza de los rincones más remotos del planeta. Para ella, cada viaje es una oportunidad para crear imágenes que transmitan la belleza de lo inesperado.',
    social: {
      twitter: '#',
      linkedin: 'https://www.linkedin.com/in/jennytellogarc%C3%ADa/',
      github: 'https://github.com/jennyfer85',
    },
  },
  {
    name: 'Juliana Amorim',
    role: 'Directora Creativa',
    image: 'http://localhost:8080/uploads/juliana.svg',
    bio: 'De Brasil, ve los viajes como una forma de conectar con la naturaleza y las culturas indígenas. Su amor por la fotografía de paisajes y fauna le permite mostrar la biodiversidad de su país natal y el resto del mundo. Juliana está convencida de que los viajes nos enseñan a respetar y cuidar el medio ambiente, y busca transmitir este mensaje a través de sus imágenes.',
    social: {
      twitter: '#',
      linkedin: 'https://www.linkedin.com/in/julianaamrm/',
      github: 'https://github.com/juamrm',
    },
  },
  {
    name: 'César Mercado',
    role: 'Guía de Viaje',
    image: 'http://localhost:8080/uploads/cesar.svg',
    bio: 'Desde España, tiene una profunda admiración por la arquitectura y la historia de los lugares que visita. Su cámara es su herramienta para inmortalizar tanto las maravillas antiguas como las modernas, reflejando la evolución del paisaje humano. La fotografía es su forma de contar cómo los viajes transforman y enriquecen nuestras vidas.',
    social: {
      twitter: '#',
      linkedin: 'https://www.linkedin.com/in/cesarmercadoh/',
      github: 'https://github.com/merkandez',
    },
  },
  {
    name: 'Mónica Serna',
    role: 'Escritora de Contenido',
    image: 'http://localhost:8080/uploads/monica.svg',
    bio: 'De Paraguay, es una viajera incansable que cree que cada lugar tiene una historia que contar. Su pasión por la fotografía de retratos y paisajes urbanos la lleva a capturar la esencia de las ciudades y la gente que las habita. Mónica busca reflejar la diversidad cultural y humana de los destinos que explora, mostrando la riqueza que se encuentra en cada rincón del mundo.',
    social: {
      twitter: '#',
      linkedin: 'https://www.linkedin.com/in/monicasernasantander/',
      github: 'https://github.com/monicaSernaS',
    },
  },
  {
    name: 'Jhon Smith',
    role: 'Instructor de Fotografía',
    image: 'http://localhost:8080/uploads/jhon.svg',
    bio: 'De Colombia, tiene un enfoque único al capturar la vida cotidiana y los momentos espontáneos de las personas. Su pasión por los viajes lo ha llevado a explorar diferentes partes de América Latina y más allá, y en cada destino, busca encontrar la conexión humana en su máxima expresión. A través de sus fotos, Jhon invita a otros a ver el mundo desde una perspectiva más auténtica y cercana..',
    social: {
      twitter: '#',
      linkedin: 'https://www.linkedin.com/in/jhon-smith-grisales/',
      github: 'https://github.com/Yamete-Kudasai',
    },
  },
];

function AboutUs() {
  return (
    <AboutWrapper>
      <AboutHeader>
        <Title>Nuestro Equipo</Title>
        <Description>
          En Lux Mundi, nuestro equipo está formado por cinco personas con una
          profunda pasión por los viajes y la fotografía, que nos une en la
          misión de compartir el mundo a través de nuestros ojos y cámaras.
        </Description>
      </AboutHeader>
      <TeamGrid>
        {teamMembers.map((member, index) => (
          <TeamCard key={index}>
            <ImageWrapper>
              <MemberImage src={member.image} alt={member.name} />
            </ImageWrapper>
            <CardContent>
              <MemberName>{member.name}</MemberName>
              <MemberRole>{member.role}</MemberRole>
              <MemberBio>{member.bio}</MemberBio>
              <SocialLinks>
                <SocialIcon href={member.social.twitter}>
                  <FaTwitter />
                </SocialIcon>
                <SocialIcon href={member.social.linkedin}>
                  <FaLinkedin />
                </SocialIcon>
                <SocialIcon href={member.social.github}>
                  <FaGithub />
                </SocialIcon>
              </SocialLinks>
            </CardContent>
          </TeamCard>
        ))}
      </TeamGrid>
    </AboutWrapper>
  );
}

const AboutWrapper = styled.div`
  padding: 4rem 1rem;
  background-color: #0a0a0a;
  min-height: 100vh;

  @media (max-width: 768px) {
    padding: 2rem 1rem;
  }
`;

const AboutHeader = styled.div`
  text-align: center;
  max-width: 800px;
  margin: 0 auto 3rem;
  padding: 0 1rem;

  @media (max-width: 768px) {
    margin: 0 auto 2rem;
  }
`;

const Title = styled.h1`
  font-size: 3rem;
  margin-bottom: 1.5rem;
  color: #fff;

  @media (max-width: 768px) {
    font-size: 2rem;
    margin-bottom: 1rem;
  }
`;

const Description = styled.p`
  font-size: 1.2rem;
  color: #999;
  line-height: 1.6;
`;

const TeamGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 1.5rem;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 1rem;
  }
`;

const TeamCard = styled.div`
  background: #111111;
  border-radius: 4px;
  overflow: hidden;
  border: 1px solid #222;
  transition: all 0.3s ease;
  max-width: 300px;
  margin: 0 auto;

  &:hover {
    transform: translateY(-5px);
    border-color: #333;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  }
`;

const ImageWrapper = styled.div`
  width: 100%;
  height: 240px;

  @media (max-width: 768px) {
    height: 200px;
  }
`;

const MemberImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;

  ${TeamCard}:hover & {
    transform: scale(1.05);
  }
`;

const CardContent = styled.div`
  padding: 1.5rem;
`;

const MemberName = styled.h3`
  font-size: 1.4rem;
  margin-bottom: 0.5rem;
  color: #fff;
`;

const MemberRole = styled.p`
  font-size: 1rem;
  color: #666;
  margin-bottom: 1rem;
  font-weight: 500;
`;

const MemberBio = styled.p`
  font-size: 0.9rem;
  color: #999;
  line-height: 1.6;
  margin-bottom: 1.5rem;
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
`;

const SocialIcon = styled.a`
  color: #666;
  font-size: 1.2rem;
  transition: all 0.3s ease;

  &:hover {
    color: #fff;
    transform: translateY(-2px);
  }
`;

export default AboutUs;
