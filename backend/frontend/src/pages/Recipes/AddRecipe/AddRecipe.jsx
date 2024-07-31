import React, { useState } from "react";
import "../../../pages/Recipes/AddRecipe/AddRecipe.scss";

function AddRecipe() {
  const [image, setImage] = useState(null);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("No message herer");

  const uploadAxios = async () => {
    try {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("img", image);
      formData.append("message", message);

      const response = await Axios.post(
        "http://127.0.0.1:8000/api/DiseaseBreakdownAndDetect/",
        formData,
        {
          withCredentials: true, // Important for sending cookies
        }
      );

      console.log(response);
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  const submitForm = (e) => {
    e.preventDefault();

    uploadAxios();

    console.log("submitted");
    // console.log(image);
  };
  return (
    <div class="wrapper">
      <div className="add-recipe-form">
        <h2>Add Recipe</h2>

        <form action="#">
          <div class="input-box">
            <input type="text" placeholder="Name of food" required />
          </div>
          <div class="input-box">
            <textarea type="textArea" placeholder="Name of food" required />
          </div>
        
          
          <div class="input-box button">
            <input type="Submit" value="Add Now" />
          </div>
          <div class="text">
            <h3>
              Already have an account? <a href="#">Login now</a>
            </h3>
          </div>
        </form>
      </div>

      <div className="upload-component">
        <form onSubmit={submitForm} style={{ all: "unset" }}>
          <h1>Upload image</h1>

          {image && (
            <div className="uploaded-view">
              <img alt="not found" src={URL.createObjectURL(image)} />
              <br />

              <button
                style={{ background: "#E36868" }}
                type="button"
                onClick={() => {
                  setImage(null);
                  document.querySelector(".uploadIcon").style.display = "block"; // when image is removed the defualt logo returns
                }}
              >
                Remove
              </button>
            </div>
          )}

          <br />
          <br />

          <input
            className="uploadIcon"
            type="file"
            name="myImage"
            onChange={(event) => {
              console.log(event.target.files[0]);
              setImage(event.target.files[0]);
              document.querySelector(".uploadIcon").style.display = "none"; // so i stop seeing the defualt logo after image is loaded
            }}
          />
        </form>
      </div>
    </div>
  );
}

export default AddRecipe;
