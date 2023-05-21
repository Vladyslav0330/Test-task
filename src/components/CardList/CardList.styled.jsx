import styled from 'styled-components';

export const StyledList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;

export const StyledListItem = styled.li`
  margin: 0;
  padding: 0;
  margin-bottom: 20px;
`;

export const LoadMoreBtn = styled.button`
  position: absolute;
  left: 50%;
  transform: translate(-50%, -50%);
  margin-top: 25px;
  padding: 10px 20px;
  border: 1px solid #ccc;
  border-radius: 4px;
  color: #333;
  font-weight: bold;
  cursor: pointer;
  background-color: #f1f1f1;
  margin-bottom: 20px;
`;
