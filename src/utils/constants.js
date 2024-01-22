export const LOGO = "https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";
export const USER_AVATAR = "https://wallpapers.com/images/hd/netflix-profile-pictures-5yup5hd2i60x7ew3.jpg";
export const BACKGROUND_IMG = "https://assets.nflxext.com/ffe/siteui/vlv3/16006346-87f9-4226-bc25-a1fb346a2b0c/9662d0fd-0547-4665-b887-771617268815/IN-en-20240115-popsignuptwoweeks-perspective_alpha_website_large.jpg";

export const API_OPTIONS = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer '+process.env.REACT_APP_TMDB_KEY
  }
};

export const IMAGE_CDN_URL = "https://image.tmdb.org/t/p/w400";

export const SUPPORTED_LANG= [
  {
    identifier: 'en',
    name: 'english'
  },
  {
    identifier: 'telugu',
    name: 'తెలుగు'
  },
  {
    identifier: 'spanish',
    name: 'española'
  }
]

export const OPEN_AI_KEY = process.env.REACT_APP_OPEN_AI_KEY