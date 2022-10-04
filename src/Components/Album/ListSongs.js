import { useDispatch, useSelector } from "react-redux";
import { playlistActions } from "../../store/playlist-slice";

const ListSongs = () => {
  const albumData = useSelector(state => state.albums);
  const selected = albumData.selected;
  const albumList = albumData.albums[selected].songs;
  const dispatch = useDispatch();

  const handleClick = (song)=>{
    dispatch(playlistActions.playVideo(song));
  }

  return (
    <div className="songs-container corner-borders">
      {albumList.map(song => (
        <button onClick = {() => {handleClick(song)}}>
          <p>{song.title}</p>
        </button>
      ))}
    </div>
  );
};

export default ListSongs;