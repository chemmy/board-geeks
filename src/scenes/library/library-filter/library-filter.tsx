import React, { useState } from 'react';
import { CheckboxValueType } from 'antd/lib/checkbox/Group';

import SearchInput from 'components/form/search-input/search-input';
import CheckboxGroup from 'components/form/checkbox-group/checkbox-group';
import IntegerRange from 'components/form/integer-range/integer-range';
import Dropdown from 'components/form/dropdown/dropdown';
import TagsSelector from 'components/form/tags-selector/tags-selector';
import Button from 'components/form/button/button';

import { gameStatusList, publishersList, tagsList } from 'mock-data/options-list';
import { OptionValueType } from 'types/options';
import { DefaultNumberType } from 'types/input';
import './styles.scss';

const LibraryFilter = () => {
  const defaultPublisher = publishersList[0].value;
  const defaultGameStatus = [gameStatusList[0].value];

  const [searchString, setSearchString] = useState('');
  const [gameStatus, setGameStatus] = useState(defaultGameStatus as CheckboxValueType[]);
  const [playersMin, setPlayersMin] = useState(undefined as DefaultNumberType);
  const [playersMax, setPlayersMax] = useState(undefined as DefaultNumberType);
  const [timeMin, setTimeMin] = useState(undefined as DefaultNumberType);
  const [timeMax, setTimeMax] = useState(undefined as DefaultNumberType);
  const [publisher, setPublisher] = useState(defaultPublisher);
  const [tags, setTags] = useState([] as OptionValueType[]);

  const clear = () => {
    setSearchString('');
    setGameStatus(defaultGameStatus);
    setPlayersMin(undefined);
    setPlayersMax(undefined);
    setTimeMin(undefined);
    setTimeMax(undefined);
    setPublisher(defaultPublisher);
    setTags([]);
  };

  const search = () => {
    const filters = {
      searchString,
      gameStatus,
      players: { min: playersMin, max: playersMax },
      time: { min: timeMin, max: timeMax },
      publisher,
      tags,
    };
    console.log('filters', filters);
  };

  return (
    <div className="library-filter">
      <h4 className="filter-header">Library Filters</h4>

      <div className="filters">
        <div className="filter-groups main-filters">
          <SearchInput value={searchString} onChange={setSearchString} onSearch={() => search()} />
          <CheckboxGroup
            value={gameStatus}
            options={gameStatusList}
            onChange={(checkedValues) => setGameStatus(checkedValues)}
          />
        </div>

        <div className="filter-groups secondary-filters">
          <IntegerRange
            label="Players Count"
            from={playersMin}
            to={playersMax}
            setFrom={setPlayersMin}
            setTo={setPlayersMax}
          />
          <IntegerRange label="Play Time (mins)" from={timeMin} to={timeMax} setFrom={setTimeMin} setTo={setTimeMax} />
          <Dropdown
            value={publisher}
            label="Publisher"
            options={publishersList}
            defaultValue={defaultPublisher}
            onChange={(selected) => setPublisher(selected)}
          />
          <TagsSelector label="Tags" value={tags} options={tagsList} onChange={(selected) => setTags(selected)} />
        </div>
      </div>

      <div className="filter-action">
        <Button onClick={clear} secondary reversed text="Reset" />
        <Button onClick={search} primary text="Search" />
      </div>
    </div>
  );
};

export default LibraryFilter;
