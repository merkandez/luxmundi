import styled from "styled-components";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { User, Settings, LogOut } from "lucide-react";
import { Link } from "react-router-dom";

const ProfileSettings = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { icon: <User size={16} />, label: "Mi Perfil", link: "/profile" },
    { icon: <Settings size={16} />, label: "Ajustes", link: "/settings" },
  ];

  return (
    <Container>
      <ProfileButton onClick={() => setIsOpen(!isOpen)}>
        <UserAvatar>
          <User size={20} />
        </UserAvatar>
      </ProfileButton>

      <AnimatePresence>
        {isOpen && (
          <>
            <Backdrop
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
            />
            <MenuWrapper
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              <UserInfo>
                <Avatar>
                  <User size={24} />
                </Avatar>
                <div>
                  <UserName>John Doe</UserName>
                  <UserEmail>john@example.com</UserEmail>
                </div>
              </UserInfo>

              <MenuItems>
                {menuItems.map((item, index) => (
                  <MenuItem key={index} as={Link} to={item.link}>
                    {item.icon}
                    <span>{item.label}</span>
                  </MenuItem>
                ))}
              </MenuItems>

              <Divider />

              <LogoutButton onClick={() => console.log("Logout")}>
                <LogOut size={16} />
                <span>Logout</span>
              </LogoutButton>
            </MenuWrapper>
          </>
        )}
      </AnimatePresence>
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  z-index: 100;
`;

const ProfileButton = styled.button`
  background: transparent;
  border: none;
  padding: 0;
  cursor: pointer;
  transition: transform 0.2s ease;

  &:hover {
    transform: translateY(-1px);
  }
`;

const UserAvatar = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  transition: all 0.2s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.15);
    border-color: rgba(255, 255, 255, 0.3);
  }

  @media (max-width: 768px) {
    width: 36px;
    height: 36px;
  }
`;

const Backdrop = styled(motion.div)`
  position: fixed;
  inset: 0;
  background: transparent;
  z-index: -1;
`;

const MenuWrapper = styled(motion.div)`
  position: absolute;
  top: calc(100% + 12px);
  right: 0;
  background: rgba(26, 26, 26, 0.95);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  min-width: 240px;
  overflow: hidden;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);

  @media (max-width: 768px) {
    min-width: 220px;
  }

  @media (max-width: 480px) {
    min-width: 200px;
    position: fixed;
    left: 1rem;
    right: 1rem;
    width: auto;
  }
`;

const UserInfo = styled.div`
  padding: 1rem;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
`;

const Avatar = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
`;

const UserName = styled.h3`
  color: #fff;
  font-size: 0.95rem;
  font-weight: 500;
  margin: 0;
`;

const UserEmail = styled.p`
  color: rgba(255, 255, 255, 0.6);
  font-size: 0.85rem;
  margin: 0;
`;

const MenuItems = styled.div`
  padding: 0.5rem;
`;

const MenuItem = styled(Link)`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.75rem 1rem;
  color: #fff;
  text-decoration: none;
  border-radius: 8px;
  transition: all 0.2s ease;

  svg {
    color: rgba(255, 255, 255, 0.6);
  }

  &:hover {
    background: rgba(255, 255, 255, 0.1);
  }
`;

const Divider = styled.div`
  height: 1px;
  background: rgba(255, 255, 255, 0.1);
  margin: 0.25rem 0;
`;

const LogoutButton = styled.button`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.75rem 1rem;
  color: #fff;
  background: transparent;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease;
  font-size: 0.95rem;

  svg {
    color: currentColor;
  }

  &:hover {
    background: rgba(255, 255, 255, 0.15);
    color: #fff;
  }
`;

export default ProfileSettings;
