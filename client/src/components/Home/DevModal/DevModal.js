import React from "react";
import "./DevModal.css";

const DevModal = () => (
    <div id="id01" class="modal">
      <span onclick="document.getElementById('id01').style.display='none'" class="close" title="Close Modal">&times;</span>

     
      <form class="modal-content animate" id="login" action="index.html">
        <div class="imgcontainer">
          <img src="assets/images/avatar.png" alt="Avatar" class="avatar">
        </div>
        <div class="container">
          <div class="row">
            <label for="uname">
              <b>Email</b>
            </label>
            <input type="text" placeholder="Enter Email" name="uname" id="ln-email" required>
          </div>

          <div class="row">
            <label for="psw">
              <b>Password</b>
            </label>
            <input type="password" placeholder="Enter Password" name="psw" id="ln-password" required>
          </div>

          <div class="row">
            <button type="submit">Login</button>
            <label>
              <input type="checkbox" checked="checked" name="remember">
              <a style="color:black">Remember me</a>
            </label>

            <div class="row">
              <button type="button" onclick="document.getElementById('id01').style.display='none'" class="cancelbtn">Cancel</button>
            </div>
          </div>
        </div>
      </form>
    </div>
);

export default DevModal