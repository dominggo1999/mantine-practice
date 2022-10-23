import React from 'react';
import SimpleTreeView from '.';
import { treeData } from './treeData';
import type { ParentLabel } from '.';

const Label = ({ label }: ParentLabel) => {
  return (
    <a
      tabIndex={-1}
      href="#"
    >{label}
    </a>
  );
};

export const Default = () => {
  return (
    <SimpleTreeView
      treeData={treeData}
      parentLabel={<Label />}
    />
  );
};

export const meta = {
  title: 'Simple Tree View',
};
