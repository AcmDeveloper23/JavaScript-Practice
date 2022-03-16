import View from "./View";
import icons from "../../img/icons.svg";

class ResultsView extends View {
    _parentElement = document.querySelector(".results");

    _generateMarkup() {
        return `
        ${this._data.map((res) => (
            `<li class="preview">
                <a class="preview__link preview__link--active" href="#${res.id}">
                    <figure class="preview__fig">
                        <img src=${res.image_url} alt=${res.title} />
                    </figure>
                    <div class="preview__data">
                        <h4 class="preview__title">${res.title}</h4>
                        <p class="preview__publisher">${res.publisher}</p>
                        <div class="preview__user-generated">
                            <svg>
                                <use href="${icons}#icon-user"></use>
                            </svg>
                        </div>
                    </div>
                </a>
            </li>`
        ))
            }
        `;
    }
}

export default new ResultsView();