import Song from "../types/song.type";
import { http } from "./axios";

const services = {
  login(username: string, password: string) {
    return http
      .post("/auth/login", {
        username,
        password,
      })
      .then((response) => {
        localStorage.setItem("token", response.data.accessToken);
        return response.data;
      });
  },

  getPlaylist() {
    return http
      .get("/playlist", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((response) => response.data);
  },

  searchSongs(search: string) {
    return http
      .get(`/music?search=${search}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((response) => response.data);
  },

  addToPlaylist(music: Song) {
    return http
      .post(
        "/playlist/add",
        {
          songId: music.id,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      )
      .then((response) => response.data);
  },

  removeFromPlaylist(music: Song) {
    return http
      .post(
        "/playlist/remove",
        { songId: music.songId },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      )
      .then((response) => response.data);
  },
};

export default services;
