import axios from "axios";

class User {
  Find(param) {
    return new Promise((resolve, reject) => {
      axios
        .post("http:://localhost:8000/User/Find", param)
        .then((res) => resolve(res.data))
        .catch((err) => reject(err));
    });
  }
}

export default new User();
