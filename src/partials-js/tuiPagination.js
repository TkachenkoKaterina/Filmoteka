import Pagination from 'tui-pagination';
import axios from 'axios';
export function pagination(totalItems, currentPage) {
  const paginationEl =
    '<div id="tui-pagination-container" class="tui-pagination"></div>';
  document
    .querySelector('#gallery')
    .insertAdjacentHTML('beforeend', paginationEl);
  const options = {
    totalItems: totalItems,
    itemsPerPage: 20,
    visiblePages: 5,
    page: currentPage,
    centerAlign: true,
    firstItemClassName: 'tui-first-child',
    lastItemClassName: 'tui-last-child',
    template: {
      page: '<a href="#" class="tui-page-btn">{{page}}</a>',
      currentPage:
        '<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',
      moveButton:
        '<a href="#" class="tui-page-btn tui-{{type}}">' +
        '<span class="tui-ico-{{type}}">{{type}}</span>' +
        '</a>',
      disabledMoveButton:
        '<span class="tui-page-btn tui-is-disabled tui-{{type}}">' +
        '<span class="tui-ico-{{type}}">{{type}}</span>' +
        '</span>',
      moreButton:
        '<a href="#" class="tui-page-btn tui-{{type}}-is-ellip">' +
        '<span class="tui-ico-ellip">...</span>' +
        '</a>',
    },
  };

  return new Pagination(
    document.querySelector('#tui-pagination-container'),
    options
  );
}
export function changePage(urlApi, pageN) {
  return axios.get(urlApi, { params: { page: pageN } });
}
