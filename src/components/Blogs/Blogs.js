import React from 'react';
import './Blog.css';

const Blogs = () => {
    return (
        <div className="main-article" id="blogs">
            <h1>Latest Article</h1>
            <div className="row">
                <div className="col-lg-4 col-md-3 col-sm-12 hover-block">
                    <img
                        src="https://1.bp.blogspot.com/-NCAzd8XF3rY/YOBU0ocjN-I/AAAAAAAACW4/DKZ1q1rCxTQWzU8t4Gp1ySRazypVJZziwCLcBGAsYHQ/s880/javascript-string-methods.jpeg"
                        alt=""
                    />
                    <h3 className='mt-4'>
                        JavaScript String Methods
                    </h3>
                    <p>
                        Today I am telling you about the most important JavaScript string methods with explanations and examples...
                    </p>

                    <div className="d-flex">
                        <a href="https://dev.to/feroj7/javascript-string-methods-54b5" target="_blank"> <button className="articleButton">
                            Read More <i className="fas fa-arrow-right ms-1"></i>
                        </button></a>
                    </div>

                </div>
                <div className="col-lg-4 col-md-3 col-sm-12 hover-block">
                    <img
                        src="https://res.cloudinary.com/practicaldev/image/fetch/s--qp2_fkwW--/c_imagga_scale,f_auto,fl_progressive,h_900,q_auto,w_1600/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/vjvy6qlfb1xvwmg5ldry.png"
                        alt=""
                    />
                    <h3>
                        Explanation of JavaScript "this" keyword
                    </h3>
                    <p>
                        this keyword is mostly used in object-oriented programming. Most of the beginners are confused with this keyword...
                    </p>
                    <div className="d-flex">
                        <a href="https://dev.to/feroj7/explanation-of-javascript-this-keyword-578j" target="_blank">
                            <button className="articleButton">
                                Read More <i className="fas fa-arrow-right ms-1"></i>
                            </button>
                        </a>
                    </div>
                </div>
                <div className="col-lg-4 col-md-3 col-sm-12 hover-block">
                    <img
                        className="imgName"
                        src="https://miro.medium.com/max/1400/1*70MsV7-_uAmAJANBqHGVIg.png"
                        alt=""
                    />
                    <h3>
                        Explanation on mongodb CRUD operations
                    </h3>
                    <p>
                        Mongodb is used to store data that is a NoSQL database. Mongodb is a document-oriented database...
                    </p>
                    <div className="d-flex">
                        <a href="https://dev.to/feroj7/explanation-on-mongodb-crud-operations-480n" target="_blank">
                            <button className="articleButton">
                                Read More <i className="fas fa-arrow-right ms-1"></i>
                            </button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blogs;