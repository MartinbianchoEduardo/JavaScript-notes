import View from './View';
class SearchView extends View {
  _parentElement = document.querySelector('.search');

  addHandlerSearch(handler) {
    const searchBtn = this._parentElement.querySelector('.search__btn');
    searchBtn.addEventListener('click', function (e) {
      e.preventDefault();
      handler();
    });
  }
}

export default new SearchView();
