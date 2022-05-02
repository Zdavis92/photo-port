import React from "react";
import {capitalizeFirstLetter} from "../../utils/helpers";
import photo from "../../assets/small/commercial/0.jpg";

function Gallery() {
    const currentCatgory = {
        name: "commercial",
        description: "Photos of grocery stores, food trucks, and other commercial projects"
    };

    return (
        <section>
            <h1>{capitalizeFirstLetter(currentCatgory.name)}</h1>
            <p>{currentCatgory.description}</p>
            <div className="flex-row">
                <img 
                src={photo}
                alt="Commercial Example"
                className="img-thumbnail mx-1"
                />
            </div>
        </section>
    );
};

export default Gallery;