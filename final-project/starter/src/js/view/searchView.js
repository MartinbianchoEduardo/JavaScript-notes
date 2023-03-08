class SearchView {
  #parentElement = document.querySelector('.search');

  getQuery() {
    this.#clearInput();
    return this.#parentElement.querySelector('.search__field').value;
  }

  #clearInput() {
    this.#parentElement.querySelector('.search__field').value = '';
  }

  addHandlerSearch(handler) {
    const searchBtn = this.#parentElement.querySelector('.search__btn');
    searchBtn.addEventListener('click', function (e) {
      e.preventDefault();
      handler();
    });
  }
}

export default new SearchView();
