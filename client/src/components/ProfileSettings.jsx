import styled from "styled-components";
import { User, Settings, LogOut, ChevronDown } from "lucide-react";
import PropTypes from "prop-types";

const ProfileSettings = ({ username, onLogout }) => {
  return (
    <ProfileDropdown>
      <ProfileTrigger>
        <Avatar>
          <User size={18} />
        </Avatar>
        <UserInfo>
          <Username>{username}</Username>
          <ChevronDown size={14} />
        </UserInfo>
      </ProfileTrigger>

      <DropdownMenu>
        <MenuItem>
          <User size={16} />
          <span>Profile</span>
        </MenuItem>
        <MenuItem>
          <Settings size={16} />
          <span>Settings</span>
        </MenuItem>
        <Divider />
        <MenuItem onClick={onLogout}>
          <LogOut size={16} />
          <span>Logout</span>
        </MenuItem>
      </DropdownMenu>
    </ProfileDropdown>
  );
};

const ProfileDropdown = styled.div`
  position: relative;
  display: inline-block;
`;

const ProfileTrigger = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  background: none;
  border: none;
  color: #fff;
  cursor: pointer;
  padding: 6px;
  border-radius: 6px;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
`;

const Avatar = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: #2a2a2a;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #333;
`;

const UserInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;

const Username = styled.span`
  font-size: 0.9rem;
  font-weight: 500;
`;

const DropdownMenu = styled.div`
  position: absolute;
  top: calc(100% + 8px);
  right: 0;
  background-color: #1a1a1a;
  border: 1px solid #333;
  border-radius: 8px;
  min-width: 180px;
  padding: 6px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  opacity: 0;
  visibility: hidden;
  transform: translateY(-8px);
  transition: all 0.2s ease;

  ${ProfileDropdown}:hover & {
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
  }
`;

const MenuItem = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  width: 100%;
  padding: 8px 12px;
  border: none;
  background: none;
  color: #fff;
  font-size: 0.9rem;
  text-align: left;
  cursor: pointer;
  border-radius: 4px;
  transition: background-color 0.2s ease;

  svg {
    color: #666;
  }

  &:hover {
    background-color: #2a2a2a;

    svg {
      color: #fff;
    }
  }
`;

const Divider = styled.div`
  height: 1px;
  background-color: #333;
  margin: 6px 0;
`;

ProfileSettings.propTypes = {
  username: PropTypes.string.isRequired,
  onLogout: PropTypes.func.isRequired,
};

export default ProfileSettings;
