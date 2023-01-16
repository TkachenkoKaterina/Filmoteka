// import Pagination from 'tui-pagination';
export function pagination(totalPages, currentPage) {
  const paginationEl =
    '<div id="tui-pagination-container" class="tui-pagination"></div>';
  document
    .querySelector('#gallery')
    .insertAdjacentHTML('beforeend', paginationEl);
  const options = {
    totalItems: totalPages,
    itemsPerPage: 9,
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

  // const pagination = new Pagination('tui-pagination-container', options);
}
