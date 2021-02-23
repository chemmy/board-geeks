import React, { ReactElement } from 'react';

import PageHeader from 'components/common/page-header/page-header';
import GamesList from 'components/games-list/games-list';
import headerImage from 'assets/images/page-headers/game-library.jpg';
import LibraryFilter from './library-filter/library-filter';
import './styles.scss';

const Library = (): ReactElement => {
  return (
    <div className="page page-library">
      <PageHeader pageTitle="Game Library" opacity="0.3" headerImage={headerImage} />

      <div className="page-content">
        <div className="filter-section">
          <LibraryFilter />
        </div>
        <div className="items-section">
          <GamesList />
        </div>
      </div>
    </div>
  );
};

export default Library;
