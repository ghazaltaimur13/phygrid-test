import { styled } from "styled-components";

export const ListContainer = styled.div`
  padding: 10px;
`;

export const UserItem = styled.div`
  display: flex;
  align-items: center;
  padding: 20px;
  margin: 5px;
  background-color: #f0f0f0;
`;

export const UserImage = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50px;
  margin-right: 15px;
`;

export const UserName = styled.span`
  font-size: 16px;
`;

export const NoData = styled.div`
  font-size: 20px;
  margin: 25px;
  font-weight: 600;
`;

export const NextButton = styled.button`
    margin-top: 1rem;
    padding: 0.5rem 1rem;
    background-color: #7fb900;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    &:hover {
        background-color: #d0e5a3;
    }
`;