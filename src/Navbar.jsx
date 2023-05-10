import React from "react";
import { render } from "react-dom";
import 'bootstrap/dist/js/bootstrap.min';

function Navbar(){
    return(
        <nav class="navbar navbar-dark bg-dark">
                <div class="container-fluid">
                        <a class="navbar-brand" href="#">Chrome Extension</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                              <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="#">Compose Email</a>
                            </li>
                            <li class="nav-item">
                            <a class="nav-link" href="#">Calendar Scheduling</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
    )
}

export default Navbar;