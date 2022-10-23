import React, { ReactElement, useState } from 'react';

interface TreeChild {
  label: string
  key: string
  data: Object
}

interface TreeParent {
  label: string
  key: string
  children: TreeChild[]
}

interface SimpleTreeViewProps {
  treeData?: TreeParent[]
  parentLabel?: ReactElement<any>;
}

export interface ParentLabel {
  label?: string
}

const ParentLabelWrapper = ({ parentLabel, treeItem }: { parentLabel: ReactElement<any>, treeItem: TreeParent }) => {
  const [open, setOpen] = useState(false);

  return (
    <li
      tabIndex={-1}
      role="treeitem"
      key={treeItem.key}
      aria-expanded={open}
    >
      <div
        tabIndex={0}
        role="treeitem"
        onClick={() => setOpen(!open)}
      >
        {React.cloneElement(parentLabel as React.ReactElement<any>, {
          label: treeItem.label,
        })}
      </div>

      {
        open && (

          <ul role="group">
            {
              treeItem.children?.map((child) => {
                return (
                  <li
                    role="treeitem"
                    tabIndex={-1}
                    key={child.key}
                  >
                    <a
                      href="#"
                      tabIndex={-1}
                    >
                      {child.label}
                    </a>
                  </li>
                );
              })
            }
          </ul>
        )
      }
    </li>
  );
};

const SimpleTreeView = ({ treeData, parentLabel }: SimpleTreeViewProps) => {
  return (
    <ul role="tree">
      {treeData?.map((treeItem) => {
        if (!treeItem.children.length) return;

        return (
          <ParentLabelWrapper
            parentLabel={parentLabel as ReactElement<any>}
            treeItem={treeItem}
            key={treeItem.key}
          />
        );
      })}
    </ul>
  );
};

export default SimpleTreeView;
