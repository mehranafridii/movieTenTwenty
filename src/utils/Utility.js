import api from '../constants/Api.constants';

const Utility = {
  getImageUrl: function (filePath) {
    if (!filePath) return null; // Return null if filePath is not provided
    return `${api.IMAGE_BASE_URL}original${filePath}`;
  },
};

export default Utility;
