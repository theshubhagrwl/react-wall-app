import * as actionTypes from "./actionTypes";

// Start fetching the images
export const start = () => {
  return {
    type: actionTypes.IMAGE_START,
  };
};

// When we have got the images
export const success = (data) => {
  return {
    type: actionTypes.IMAGE_SUCCESS,
    data: data,
  };
};

// If there is a error
export const fail = (error) => {
  return {
    type: actionTypes.IMAGE_FAIL,
    error: error,
  };
};

// Function for fetching the images, return Promise<{data, after}>
export const fetchImages = (after = null) => {
    return (dispatch) => {
        dispatch(start())
    return fetch(`https://www.reddit.com/r/wallpapers.json?limit=25&raw_json=1&count=25&after=${after}`).then(
      (res) =>
        res.json().then((response) => {
          let newArr = [];
          response.data.children.map((item) => {
            try {
              if (item.data.preview && item.data.preview.images[0].resolutions[3]) {
                const parent_img = item.data.preview.images[0].resolutions[3].url;
                newArr.push({
                  id: item.data.id,
                  title: item.data.title,
                  thumbnail: item.data.thumbnail,
                  url: item.data.url,
                  author: item.data.author,
                  small_img: parent_img,
                  res: item.data.preview.images[0].resolutions,
                });
              }
              
            } catch (e) {
              console.log(e);
              dispatch(fail(e))
            }
          });
          dispatch(success({data: [newArr], after: response.data.after}));
        })
    );
    }
}