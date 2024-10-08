import React, { useState, useEffect, useRef } from 'react';

interface CollapsableProps {
  title: React.ReactNode;
  children: React.ReactNode;
}

export function Collapsable({ title, children }: CollapsableProps) {
  const [Collapsed, SetCollapsed] = useState<boolean>(false);
  const ref = useRef<HTMLDivElement>(null);
  const [MaxHeight, SetMaxHeight] = useState<string>('none');

  useEffect(() => {
    function UpdateMaxHeight() {
      if (ref.current) {
        SetMaxHeight(Collapsed ? '0' : `${ref.current.scrollHeight}px`);
      }
    }
    UpdateMaxHeight();
    window.addEventListener('resize', UpdateMaxHeight);

    return () => {
      window.removeEventListener('resize', UpdateMaxHeight);
    };
  }, []);

  return (
    <div id="collapsable">
      <h3
        onClick={() => {
          SetCollapsed(!Collapsed);
        }}
      >
        {title}{' '}
        <i
          className={`fas fa-chevron-down color ${!Collapsed ? 'shown' : ''}`}
          id="arrow"
        />
      </h3>
      <div
        id="collapsable-wrapper"
        className={!Collapsed ? 'shown' : ''}
        ref={ref}
        style={{ maxHeight: Collapsed ? '0' : MaxHeight }}
      >
        {children}
      </div>
      <hr />
    </div>
  );
}
