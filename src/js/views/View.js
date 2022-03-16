import icons from "../../img/icons.svg";

export default class View {
    _data;
    render(data) {
        this._data = data;
        const markup = this._generateMarkup();
        this._clear();
        this._insertMarkup(markup);
    }

    _clear() {
        this._parentElement.innerHTML = "";
    }

    _insertMarkup(markup) {
        this._parentElement.insertAdjacentHTML("afterbegin", markup);
    }

    renderSpinner() {
        const markup = `
          <div class="spinner">
            <svg>
              <use href="${icons}#icon-loader"></use>
            </svg>
          </div>
        `
        this._clear();
        this._insertMarkup(markup);
    }

    renderError(errorMsg) {
        const markup = `
            <div class="error">
                <div>
                <svg>
                    <use href="${icons}_icon-alert-triangle"></use>
                </svg>
                </div>
                <p>${errorMsg || this._errorMessage}</p>
            </div>
        `;
        this._clear();
        this._insertMarkup(markup);
    }

    renderMessage(successMsg) {
        const markup = `
            <div class="message">
            <div>
            <svg>
                <use href="${icons}_icon-smile"></use>
            </svg>
            </div>
            <p>${successMsg}</p>
        </div>
        `;
        this._clear();
        this._insertMarkup(markup);
    }
}