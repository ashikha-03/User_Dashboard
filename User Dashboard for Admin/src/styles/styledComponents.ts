import styled from 'styled-components';


export const NavBarContainer = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px 40px;
  background-color: #2c858a;
  box-shadow: 0 4px 8px rgba(29, 192, 197, 0.1);
  position: sticky;
  top: 0;
  z-index: 100;
`;

export const NavLink = styled.a`
  color: white;
  font-size: 16px;
  text-decoration: none;
  padding: 12px 20px;
  border-radius: 5px;
  transition: background-color 0.3s ease, transform 0.2s ease;

  &:hover {
    background-color: #555;
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(1px);
  }
`;

export const UserCardContainer = styled.div`
  background-color: #fff;
  padding: 20px;
  margin: 20px;
  border-radius: 12px;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 300px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 10px 18px rgba(0, 0, 0, 0.2);
  }
`;


export const Button = styled.button`
  padding: 10px 20px;
  background-color: #4CAF50;  
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;

  &:hover {
    background-color: #45a049;  
    transform: translateY(-2px);
  }

  &:active {
    background-color: #388e3c;  // Darker green when clicked
    transform: translateY(1px);
  }
`;


export const TableContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  gap: 20px;
  padding: 20px;
`;

export const UserProfileContainer = styled.div`
  padding: 30px;
  border: 1px solid #ddd;
  max-width: 600px;
  margin: auto;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  background-color: #f9f9f9;
`;

export const ProfileTitle = styled.h2`
  font-size: 28px;
  color: #333;
  text-align: center;
  margin-bottom: 20px;
  font-weight: 600;
`;

export const ProfileDetail = styled.p`
  font-size: 16px;
  color: #555;
  line-height: 1.5;
  margin-bottom: 15px;
  font-weight: 400;
`;

export const SettingsContainer = styled.div`
  padding: 30px;
  text-align: center;
  background-color: #f4f4f4;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  }
`;

export const Input = styled.input`
  padding: 12px;
  font-size: 16px;
  margin: 10px 0;
  width: 100%;
  border-radius: 5px;
  border: 1px solid #ddd;

  &:focus {
    border-color: #4CAF50;
    outline: none;
  }
`;

export const Select = styled.select`
  padding: 12px;
  font-size: 16px;
  margin: 10px 0;
  width: 100%;
  border-radius: 5px;
  border: 1px solid #ddd;

  &:focus {
    border-color: #4CAF50;
    outline: none;
  }
`;

export const Option = styled.option`
  font-size: 16px;
  padding: 12px;
`;

export const Card = styled.div`
  background-color: #fff;
  padding: 20px;
  margin: 10px;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: 250px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 10px 18px rgba(0, 0, 0, 0.2);
  }
`;

export const CardTitle = styled.h3`
  font-size: 20px;
  color: #333;
  margin-bottom: 10px;
`;

export const CardContent = styled.p`
  font-size: 16px;
  color: #555;
`;
