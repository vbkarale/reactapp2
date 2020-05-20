import React, { Component } from 'react';

export default class Content extends Component {

    render() {
        return (
            <div class="content-wrapper">
                <div class="container d-flex justify-content-center align-items-center mt-5">
                    <div class="row">
                        <div class="col-md-1"></div>
                        <div class="col-md-10">
                            <div class="card">
                                <div class="card-body mt-4">
                                    <div class="row">
                                        <div class="col-md-6">

                                            <h1 class="font2 text-left ml-4">Explore the multiverse</h1>
                                            <p class="card-text text-success text-left mt-3 font ml-4">Sed feugiat amet aliquam</p>
                                            <p class="card-text text-left text-muted  mt-3 ml-4">Lorem ipsum sed dolor sit feugiat amet consectetur elit. Praesent etiam nibh sed tellus egestas congue. Aenean ornare velit lacus et varius enim proin aliquam facilisis ante sed etiam congue. Lorem et ipsum dolor amet nullam consequat.</p>
                                        </div>

                                        <div id="content-desktop" class="vl"></div>
                                        <div id="content-mobile">
                                        </div>
                                        <div class="col-md-6">

                                            <p class="font3 text-center">Sign up today</p>
                                            <p class="card-text text-muted text-center">Aenean ornare velit lacus et varius enim<br></br> proin aliquam facilisis ante.</p>
                                            <form>
                                                <div class="form-group mx-auto col-md-10">
                                                    <input type="text" class="form-control form-control-lg" id="inputEmail4" placeholder="Name"></input>
                                                </div>
                                                <div class="form-group mx-auto col-md-10">
                                                    <input type="email" class="form-control form-control-lg" id="inputPassword4" placeholder="Email"></input>
                                                </div>
                                                <div class="form-group mx-auto col-md-10">
                                                    <button class="btn btn-success btn-lg btn-block">Submit</button>
                                                </div>

                                                <p class="card-text text-muted font-italic mt-4">Aenean lorem ipsum ornare velit lacus.</p>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                         
                        <div class="form-group mt-4 right">
                            <a href="https://www.twitter.com" class="text-muted "><span class="fa-stack s1">
                                <i class="far fa-circle fa-stack-2x"></i>
                                <i class="fab fa-twitter fa-stack-1x"></i>
                            </span></a>
                            <a href="https://www.facebook.com" class="text-muted"><span class="fa-stack s1">
                                <i class="far fa-circle fa-stack-2x"></i>
                                <i class="fab fa-facebook fa-stack-1x"></i>
                            </span></a>
                            <a href="https://www.instagram.com" class="text-muted"><span class="fa-stack s1">
                                <i class="far fa-circle fa-stack-2x"></i>
                                <i class="fab fa-instagram fa-stack-1x"></i>
                            </span></a>
                            <a href="#" class="text-muted"><span class="fa-stack fa-1x s1">
                                <i class="far fa-circle fa-stack-2x"></i>
                                <i class="fas fa-envelope fa-stack-1x"></i>
                            </span></a>
                        </div>

                    </div>
                </div>
            </div>

        )

    }

}