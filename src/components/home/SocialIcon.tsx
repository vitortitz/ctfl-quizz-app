import React from "react";

interface LayoutProps {
  link?: string;
  icon: string;
  label: string;
}

const SocialIcon = (props: LayoutProps) => {
  const { link, icon, label } = props;
  {
    /* monta o componentes dos icones :) */
  }
  return (
    <a target="_blank" aria-label={label} rel="noopener noreferrer" href={link}>
      <i className={icon} aria-hidden="true" />
    </a>
  );
};

export default SocialIcon;
