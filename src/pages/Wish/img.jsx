import React, { Component, useState } from "react";

function Upload() {
  const [Img, setImg] = useState([]);

  const handleChange = (e) => {
    console.log(e.target.files.length);
    let newImgs = [...Img];
    for (let i = 0; i < e.target.files.length; i++) {
      newImgs.push(e.target.files[i]);
    }
    setImg(newImgs);
    console.log(Img);
  };

  //上傳至imgur api
  const onFileUpload = async () => {
    // Client ID
    const clientId = "e0266d9857a9290",
      auth = "Client-ID " + clientId;
    var myHeaders = {
      // Setting header
      Authorization: auth,
      Accept: "application/json",
    };

    Img.map(async (img) => {
      // Creating an object of formData
      const formData = new FormData();

      // Adding our image to formData
      formData.append("image", img);
      var requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: formData,
        redirect: "follow",
      };
      // Making the post request
      await fetch("https://api.imgur.com/3/image/", requestOptions)
        .then((response) => response.json()) // Handling success
        .then((data) => {
          console.log(data.data.link);
        })
        .catch((err) => alert("Failed") && console.log(err)); // Handling error\
    });
  };

  return (
    <div>
      imageupload
      <input type="file" onChange={handleChange} multiple />
      <button onClick={onFileUpload}>submit</button>
      <img src={Img} />
    </div>
  );
}
export default Upload;
