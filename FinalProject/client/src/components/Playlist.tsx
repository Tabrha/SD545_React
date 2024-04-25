import Song from "../types/song.type";


export default function Playlist({
  songs,
  onRemove,
  onPlay,
}: {
  songs: Song[];
  onRemove: (song: Song) => void;
  onPlay: (song: Song) => void;
}) {
  const removeFromPlaylist = async (music: Song) => {
    onRemove(music);
  };
  
  return (
    <>
      <div className="container" >
       
        <h2 className="h2 mb-5">Your Playlist</h2>

        <table className="table text-center table-bordered">
          <thead>
            <tr>
              <th scope="col">Index</th>
              <th scope="col">Title</th>
              <th scope="col">Release Date</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {songs.map((song, index) => (
              <tr key={`row-${index}`}>
                <th className="align-middle" scope="row">
                  {index + 1}
                </th>
                <td className="align-middle">{song.title}</td>
                <td className="align-middle">{song.orderId}</td>
                <td>
                  <button
                    type="button"
                    className="btn btn-sm text-danger"
                    onClick={() => removeFromPlaylist(song)}
                  >
                    <i className="bi bi-dash-circle-fill fs-3" />
                  </button>
                  <button
                    type="button"
                    onClick={() => onPlay(song)}
                    className="btn text-primary"
                  >
                    <i className="bi bi-play-circle-fill fs-4"></i>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
