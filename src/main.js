import {createSiteTitleRoutDatesCostTemplate} from './view/route-dates-cost.js';
import {createSiteMenuTemplate} from './view/site-menu.js';
import {createSiteFiltersTemplate} from './view/filters.js';
import {createSiteSortingTemplate} from './view/sorting.js';
import {createListTemplate} from './view/list.js';
import {createListPointsTemplate} from './view/list-points.js';
import {createNewEditPointTemplate} from './view/content-new-edit-point.js';
import {createListEmptyTemplate} from './view/list-empty.js';

const render = (container, template, place) => {
  container.insertAdjacentHTML(place, template);
};

const siteHeaderElement = document.querySelector('.page-header');
const siteTitleRoutDatesCostElement = siteHeaderElement.querySelector('.trip-main');
const siteMenuElement = siteHeaderElement.querySelector('.trip-controls__navigation');
const siteFiltersElement = siteHeaderElement.querySelector('.trip-controls__filters');
const siteMainElement = document.querySelector('.page-body__page-main');
const siteSortingElement = siteMainElement.querySelector('.trip-events');
const siteListElement = siteMainElement.querySelector('.trip-events');
const siteListEmptyElement = siteMainElement.querySelector('.trip-events');

render(siteTitleRoutDatesCostElement, createSiteTitleRoutDatesCostTemplate(), 'afterBegin');
render(siteMenuElement, createSiteMenuTemplate(), 'beforeend');
render(siteFiltersElement, createSiteFiltersTemplate(), 'beforeend');
render(siteSortingElement, createSiteSortingTemplate(), 'beforeend');
render(siteListElement, createListTemplate(), 'beforeend');

const siteNewEditPointElement = siteMainElement.querySelector('.trip-events__list');
const siteListPointsElement = siteMainElement.querySelector('.trip-events__list');
render(siteNewEditPointElement, createNewEditPointTemplate(), 'afterBegin');
render(siteListPointsElement, createListPointsTemplate(), 'beforeend');
render(siteListEmptyElement, createListEmptyTemplate(), 'beforeend');
