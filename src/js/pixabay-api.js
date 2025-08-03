import axios from 'axios';

export function getImagesByQuery(query) {
    return axios.get("https://pixabay.com/api/",{
	params: {
		key:"51605494-583685eee7aa4d922c38f5bf9",
            q: query,
            image_type: "photo",
            orientation: "horizontal",
        safesearch:true
	}
    }).then(response => response.data)
    .catch(error => {
      throw new Error('Error fetching images');
    })
}