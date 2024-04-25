import { useCallback, useEffect, useState } from "react";
import logo from "../images/logo2.png";
import { useNavigate } from "react-router-dom";
import services from "../services";
import Song from "../types/song.type";
import AudioPlayer from "./Audioplayer";
import Playlist from "./Playlist";


export default function MusicList() {
  const [playlistSongs, setPlaylistSongs] = useState<Song[]>([]);
  const [musics, setMusics] = useState<Song[]>([]);
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const searchSongs = useCallback(async () => {       
    try {
      const musicData = await services.searchSongs(search);
      setMusics(musicData);
    } catch (error) {
      console.error('Error searching songs:', error);
    }
  }, [search]);
  
  const fetchPlaylist = async () => {
    try {
      const playlistData = await services.getPlaylist();
      setPlaylistSongs(playlistData);
    } catch (error) {
      console.error('Error fetching playlist:', error);
    }
  };

  useEffect(() => {
    if (!localStorage.getItem("token")) return navigate("/");
    searchSongs();
    fetchPlaylist();
  }, [navigate, searchSongs]);

  const addToPlaylist = (music: Song) => {    
    services.addToPlaylist(music).then((data) => {
      alert("Song added to playlist!");
      setPlaylistSongs(data);
    });
  };

  const onRemoveFromPlaylist = (song: Song) => {
    services.removeFromPlaylist(song).then((data) => {
      alert("Song removed from playlist!");
      setPlaylistSongs(data);
    });
  };

  const [songPlaying, setSongPlaying] = useState<Song | null>(null);

  return (
    <div style={{ paddingBottom: 150 }}>
      <div className="container" style={{ marginBottom: 100 }}>
        <div className="d-flex align-items-center gap-5">
          <img src={logo} alt="Logo" width={60} />
          <form
            className="flex-grow-1"
            onSubmit={(e) => {
              e.preventDefault();
              searchSongs();
            }}
          >
            <input
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Search music"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </form>
         
          <div>
            <button
              onClick={() => {
                localStorage.removeItem("token");
                navigate("/");
              }}
              type="button"
              className="btn btn-outline-primary"
            >
              Logout
            </button>
          </div>
        </div>

        <h2 className="h2 mt-5">Songs you may like</h2>

        <table className="table mt-5 text-center table-bordered">
          <thead>
            <tr>
              <th scope="col">Index</th>
              <th scope="col">Title</th>
              <th scope="col">Release Date</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {musics.map((song, index) => (
              <tr key={`row-${index}`}>
                <th className="align-middle" scope="row">
                  {index + 1}
                </th>
                <td className="align-middle">{song.title}</td>
                <td className="align-middle">{song.releaseDate}</td>
                <td>
                  <button
                    type="button"
                    className="btn btn-sm btn-primary"
                    onClick={() => addToPlaylist(song)}
                  >
                    <i className="bi bi-plus-circle fs-5"></i>
                  </button>
                
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Playlist
        songs={playlistSongs}
        onRemove={onRemoveFromPlaylist}
        onPlay={(song) => {
          setSongPlaying(song);
        }}
      />

      <AudioPlayer song={songPlaying} playlist={playlistSongs} />
    </div>
  );
}







































































































































































































































































