const galerieImage = document.getElementById("allImages")

let titre = "";
let imgSource = "";
let monImage = getImage(titre, imgSource);

galerieImage.innerHTML = monImage;

function getImage(titre, urlImage){
    titre = sanitizeHtml(titre);
    urlImage = sanitizeHtml(urlImage);

    return `<div class="col p-3">
            <div class="image-card text-white">
                <img src="${urlImage}" class="image-fixed rounded w-100"/>
                <p class="titre-image">${titre}</p>
                <div class="action-image-buttons" data-show="admin" >
                    <button type="button" class="btn btn-outline-light"><i class="bi bi-pencil-square" data-bs-toggle="modal" data-bs-target="#EditionPhotoModal"></i></button>
                    <button type="button" class="btn btn-outline-light"><i class="bi bi-trash" data-bs-toggle="modal" data-bs-target="#DeletePhotoModal"></i></button>
                </div>
            </div>
        </div>`;
}