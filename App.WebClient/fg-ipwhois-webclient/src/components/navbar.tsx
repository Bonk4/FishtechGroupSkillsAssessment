import React from "react";

export class NavBar extends React.Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container">
                    <a className="navbar-brand" href="#">Fishtech Group Skills Assessment</a>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav navbar-right ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link" href="https://www.linkedin.com/in/dominic-brazeel-a6922584/"
                                    target="_blank">
                                    By Dominic Brazeel
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}