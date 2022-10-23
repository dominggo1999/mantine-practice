import styled from '@emotion/styled';

export const StyledTree = styled.div`
  max-width: 300px;
  border-right: 1px solid #a09f9f;
  min-height: 100vh;
  user-select: none;

  .basic.tree {
    list-style: none;
    margin: 0;
    padding: 20px;
  }

  .basic .tree-node,
  .basic .tree-node-group {
    list-style: none;
    margin: 0;
    padding: 0;
  }
  
  .basic .tree-node {
    cursor: pointer;
  }
`;
