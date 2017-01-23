import moment from 'moment';
import 'moment-duration-format';
import React, { PropTypes } from 'react';

import '../res/track-table.scss';

export default function TrackTable(props) {
  function renderItem(track, index) {
    return (<tr id={track.id} key={track.id}>
      <td className="index">{index + 1}</td>
      <td className="name">{track.name}</td>
      <td className="artist">{track.artists[0].name}</td>
      <td className="album">{track.album.name}</td>
      <td className="duration">{moment.duration(track.duration, 'ms').format('mm:ss', { forceLength: true, trim: false })}</td>
    </tr>);
  }

  function renderItems() {
    return props.tracks.map((track, index) => renderItem(track, index));
  }

  return (
    <table className="nm-track-table">
      <thead>
        <tr>
          <th className="index" />
          <th className="name">音乐标题</th>
          <th className="artist">表演者</th>
          <th className="album">专辑</th>
          <th className="duration">时长</th>
        </tr>
      </thead>
      <tbody>
        {renderItems()}
      </tbody>
    </table>
  );
}

TrackTable.propTypes = {
  tracks: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string
  }))
};

TrackTable.defaultProps = {
  tracks: []
};
