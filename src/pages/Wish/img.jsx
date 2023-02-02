import React, { Component, useState } from "react";

function Upload() {
  const [Img, setImg] = useState("https://picsum.photos/200");

  const handleChange = (e) => {
    console.log(e.target.files);
    setImg(e.target.files[0]);
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
    // Creating an object of formData
    const formData = new FormData();

    // Adding our image to formData
    formData.append("image", Img);
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
        setImg(data.data.link);
      })
      .catch((err) => alert("Failed") && console.log(err)); // Handling error\
  };

  return (
    <div>
      imageupload
      <input type="file" onChange={handleChange} />
      <button onClick={onFileUpload}>submit</button>
      <img src={Img} />
    </div>
  );
}
export default Upload;
