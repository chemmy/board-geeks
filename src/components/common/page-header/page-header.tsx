import React, { ReactElement } from 'react';
import './styles.scss';

interface PageHeaderProps {
  headerImage: string;
  pageTitle: string;
  opacity?: string;
}

const PageHeader = ({ headerImage, pageTitle, opacity }: PageHeaderProps): ReactElement => {
  const getOverlayOpacity = () => {
    return { opacity: opacity ?? '0' };
  };

  return (
    <div className="page-header">
      <img className="background-image" src={headerImage} />
      <h2 className="page-title">{pageTitle}</h2>
      <div className="overlay" style={getOverlayOpacity()} />
    </div>
  );
};

export default PageHeader;
