import styled from "styled-components";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const teamMembers = [
  {
    name: "John Doe",
    role: "Lead Photographer",
    image: "https://source.unsplash.com/random/400x400/?portrait,1",
    bio: "Professional photographer with 10 years of experience in landscape and travel photography.",
    social: {
      twitter: "#",
      linkedin: "#",
      github: "#",
    },
  },
  {
    name: "Jane Smith",
    role: "Creative Director",
    image: "https://source.unsplash.com/random/400x400/?portrait,2",
    bio: "Award-winning creative director specializing in visual storytelling and brand identity.",
    social: {
      twitter: "#",
      linkedin: "#",
      github: "#",
    },
  },
  {
    name: "Mike Johnson",
    role: "Travel Guide",
    image: "https://source.unsplash.com/random/400x400/?portrait,3",
    bio: "Experienced travel guide with extensive knowledge of global destinations and cultures.",
    social: {
      twitter: "#",
      linkedin: "#",
      github: "#",
    },
  },
  {
    name: "Sarah Williams",
    role: "Content Writer",
    image: "https://source.unsplash.com/random/400x400/?portrait,4",
    bio: "Professional writer passionate about travel, photography, and storytelling.",
    social: {
      twitter: "#",
      linkedin: "#",
      github: "#",
    },
  },
  {
    name: "David Brown",
    role: "Photography Instructor",
    image: "https://source.unsplash.com/random/400x400/?portrait,5",
    bio: "Photography educator with expertise in teaching both technical and artistic aspects.",
    social: {
      twitter: "#",
      linkedin: "#",
      github: "#",
    },
  },
];

function AboutUs() {
  return (
    <AboutWrapper>
      <AboutHeader>
        <Title>Our Team</Title>
        <Description>
          Meet the passionate individuals behind Lux Mundi who make your
          photography journey exceptional.
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
