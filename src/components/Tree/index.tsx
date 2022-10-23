import React from 'react';
import TreeView, { flattenTree } from 'rat-forked';
import { StyledTree } from './styles';

const folder = {
  name: 'Stories',
  children: [
    {
      name: 'Accordion',
      children: [
        { name: 'Accordion' },
        { name: 'Danger' },
      ],
    },
    {
      name: 'Button',
      children: [
        { name: 'Pimary' },
        { name: 'Warning' },
      ],
    },
  ],
};

const data = flattenTree(folder);

const Tree = () => (
  <StyledTree>
    <TreeView
      expandOnKeyboardSelect
      data={data}
      className="basic"
      aria-label="basic example tree"
      // eslint-disable-next-line react/no-unstable-nested-components
      nodeRenderer={({
        element, getNodeProps, level,
      }) => {
        console.log(element, level);

        return (
          <div
            {...getNodeProps()}
            style={{ paddingLeft: 20 * (level - 1) }}
          >
            {element.name}
          </div>
        );
      }}
    />
  </StyledTree>
);
export default Tree;
