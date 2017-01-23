const NM_API_URL = 'http://music.163.com/api';

export const userId = 40652589;

export async function getUserPlaylists(uid = userId) {
  let res = null;
  try {
    res = await $.ajax({
      url: `${NM_API_URL}/user/playlist/`,
      data: {
        uid,
        limit: 1000,
        offset: 0
      }
    });
  } catch (e) {
    throw e;
  }

  if (res.code === 200) {
    return res.playlist;
  } else {
    throw new Error(`Response with error code: ${res.code}`);
  }
}

export async function getPlaylist(id) {
  let res = null;
  try {
    res = await $.ajax({
      url: `${NM_API_URL}/playlist/detail`,
      data: {
        id
      }
    });
  } catch (e) {
    throw e;
  }

  if (res.code === 200) {
    return res.result;
  } else {
    throw new Error(`Response with error code: ${res.code}`);
  }
}
