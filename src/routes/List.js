import styled from "styled-components";

const ListTemplate = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`;

const List = () => {
  return (
    <ListTemplate>
      <h2 className="title">List</h2>
    </ListTemplate>
  );
};

export default List;
