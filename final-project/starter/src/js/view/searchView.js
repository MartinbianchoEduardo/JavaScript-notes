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

  getQuery() {
    const query = this._parentElement.querySelector('.search__field').value;
    this._clearInput();
    return query;
  }

  _clearInput() {
    this._parentElement.querySelector('.search__field').value = '';
  }
}

export default new SearchView();
