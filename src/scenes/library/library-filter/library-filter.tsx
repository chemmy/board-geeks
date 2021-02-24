import React from 'react';
import { OptionType } from 'types/common';
import './styles.scss';

import SearchInput from 'components/form/search-input/search-input';
import CheckboxGroup from 'components/form/checkbox-group/checkbox-group';
import InputNumber from 'components/form/integer-range/integer-range';
import Dropdown from 'components/form/dropdown/dropdown';
import TagsSelector from 'components/form/tags-selector/tags-selector';

const LibraryFilter = () => {
  const gameStatusList: OptionType[] = [
    { value: 1, label: 'Owned' },
    { value: 2, label: 'Wishlist' },
  ];

  const publishersList: OptionType[] = [
    { value: 0, label: 'All' },
    { value: 1, label: 'Oink Games' },
    { value: 2, label: 'Repos Production' },
  ];

  const tagsList: OptionType[] = [
    { value: 1, label: 'Cooperative' },
    { value: 2, label: 'Bluffing' },
    { value: 3, label: '2 Teams' },
    { value: 4, label: 'Individual' },
    { value: 5, label: 'Discussion' },
    { value: 6, label: 'Board' },
    { value: 7, label: 'Card' },
  ];

  return (
    <div className="library-filter">
      <h4 className="filter-header">Library Filters</h4>

      <div className="filters">
        <div className="filter-groups main-filters">
          <SearchInput />
          <CheckboxGroup options={gameStatusList} />
        </div>

        <div className="filter-groups secondary-filters">
          <InputNumber label="Players Count" />
          <InputNumber label="Play Time (mins)" />
          <Dropdown label="Publisher" options={publishersList} defaultValue={publishersList[0].value} />
          <TagsSelector label="Tags" options={tagsList} />
        </div>
      </div>
    </div>
  );
};

export default LibraryFilter;
