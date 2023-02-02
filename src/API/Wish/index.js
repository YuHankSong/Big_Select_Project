import axios from "axios";

class Wish {
  FindAll() {
    return new Promise((resolve, reject) => {
      axios
        .post("http://localhost:8000/Wish/FindAll")
        .then((res) => {
          resolve(res.data);
        })
        .catch((err) => reject(err));
    });
  }

  Register(param) {
    return new Promise((resolve, reject) => {
      axios
        .post("http://localhost:8000/Wish/Register", param)
        .then((res) => {
          resolve(res.data);
        })
        .catch((err) => reject(err));
    });
  }
}

export default new Wish();
