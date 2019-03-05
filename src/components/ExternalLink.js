import React from 'react';

export default function ExternalLink({ rel = '', children, ...props }) {
  // eslint-disable-next-line jsx-a11y/anchor-has-content
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
