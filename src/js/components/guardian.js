export default class Guardian {
  constructor({ element, data }) {
    this.element = element;
    this.data = data.response;

    this._render();
  }
  _render() {
    this.element.innerHTML = `
      <div class="app__title">
        The Guardian News
      </div>
      <div class="app__content">
        <ul class="app__list">
          ${this.data.results.map(item => {
            return `<li class="app__item"><div>${item.webTitle}</div><div class="app__item-icon"><img class="arrow-icon"src="../../img/arrow.svg"></div></li>`
          }).join('')}
        </ul>
      </div>
    `
  }
}