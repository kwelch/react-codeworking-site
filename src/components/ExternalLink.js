import React from 'react';

export default function ExternalLink({ rel = '', children, ...props }) {
  return (
    <a
      target="_blank"
      rel={['noopener', 'noreferrer', rel.split(' ')].join(' ')}
      {...props}
    >
      {children}
    </a>
  );
}
