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
  padding: 8rem 1rem 6rem;
  background-color: #0a0a0a;
  min-height: 100vh;
  margin-top: 5rem;

  @media (max-width: 768px) {
    padding: 7rem 1rem 4rem;
  }
`;

const AboutHeader = styled.div`
  text-align: center;
  max-width: 800px;
  margin: 0 auto 5rem;
  padding: 0 1rem;

  @media (max-width: 768px) {
    margin: 2rem auto 3rem;
  }
`;

const Title = styled.h1`
  font-size: 3.5rem;
  margin-bottom: 2rem;
  color: rgba(255, 255, 255, 0.85);
  letter-spacing: -0.02em;

  @media (max-width: 768px) {
    font-size: 2.5rem;
    margin-bottom: 1.5rem;
  }

  @media (max-width: 480px) {
    font-size: 2rem;
    margin-bottom: 1rem;
  }
`;

const Description = styled.p`
  font-size: 1.3rem;
  color: rgba(255, 255, 255, 0.7);
  line-height: 1.6;
  max-width: 600px;
  margin: 0 auto 3rem;

  @media (max-width: 768px) {
    font-size: 1.1rem;
    padding: 0 1rem;
    margin-bottom: 2rem;
  }
`;

const TeamGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 2rem;
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem;

  @media (max-width: 1400px) {
    grid-template-columns: repeat(4, 1fr);
    gap: 1.5rem;
  }

  @media (max-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 1.5rem;
    padding: 0 1.5rem;
  }

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.25rem;
    padding: 0 1rem;
  }

  @media (max-width: 600px) {
    grid-template-columns: repeat(1, 1fr);
    max-width: 400px;
    gap: 2rem;
  }
`;

const TeamCard = styled.div`
  background: #111111;
  border-radius: 12px;
  overflow: hidden;
  border: 1px solid #222;
  transition: all 0.3s ease;
  height: 100%;
  max-width: 260px;
  margin: 0 auto;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  &:hover {
    transform: translateY(-5px);
    border-color: rgba(255, 255, 255, 0.3);
    box-shadow: 0 10px 20px rgba(255, 255, 255, 0.05);
  }

  @media (max-width: 600px) {
    max-width: 100%;
  }
`;

const ImageWrapper = styled.div`
  width: 100%;
  height: 200px;
  position: relative;
  overflow: hidden;

  &:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0.3) 100%
    );
  }

  @media (max-width: 768px) {
    height: 180px;
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
  background: linear-gradient(
    to bottom,
    rgba(17, 17, 17, 0.95),
    rgba(17, 17, 17, 1)
  );
`;

const MemberName = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
  color: #fff;
  font-weight: 600;
`;

const MemberRole = styled.p`
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.85);
  margin-bottom: 1rem;
  font-weight: 500;
  letter-spacing: 0.5px;
`;

const MemberBio = styled.p`
  font-size: 0.9rem;
  color: #999;
  line-height: 1.5;
  margin-bottom: 1.5rem;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  height: 4em;
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  padding-top: 0.5rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
`;

const SocialIcon = styled.a`
  color: #666;
  font-size: 1.1rem;
  transition: all 0.3s ease;
  padding: 0.5rem;
  border-radius: 50%;

  &:hover {
    color: rgba(255, 255, 255, 0.85);
    transform: translateY(-2px);
    background: rgba(255, 255, 255, 0.1);
  }
`;

export default AboutUs;
