// ==UserScript==
// @name         Refined Aneo Progessi
// @namespace    http://tampermonkey.net/
// @version      0.0.0
// @description  UserScript that enhances the Progessi of Aneo
// @author       Estéban Soubiran (https://github.com/barbapapazes)
// @license      MIT
// @match        https://aneo.progessi.com/**
// @icon         https://www.google.com/s2/favicons?sz=64&domain=progessi.com
// @grant        none
// ==/UserScript==

(function () {
  'use strict';
  let waitingLoading;

  function hideUselessData() {
    // on /home/control/timesheetByLine
    const unityPerDay = document.querySelectorAll('div.infocell > div:nth-child(2)')
    unityPerDay.forEach((item) => { item.style.display = "none" })

    const emptyLabel = document.querySelector('div.fc-totals > div.fc-info > div > div:nth-child(1)')
    if (emptyLabel) emptyLabel.style.display = "none"

    const dLabel = document.querySelector('div.fc-totals > div.fc-info > div > div:nth-child(2)')
    if (dLabel) dLabel.style.display = "none"

    const emptyDay = document.querySelectorAll('div.fc-totals > div > div:nth-child(3)')
    emptyDay.forEach((item) => { item.style.display = "none" })

    const hourTotal = document.querySelector('div.fc-totals > div.fc-info > div > div:nth-child(3)')
    if (hourTotal) hourTotal.style.display = "none"

    const hLabel = document.querySelector('div.fc-totals > div.fc-info > div > div:nth-child(4)')
    if (hLabel) hLabel.style.display = "none"

    const emptyHour = document.querySelectorAll('div.fc-totals > div > div:nth-child(4)')
    emptyHour.forEach((item) => { item.style.display = "none" })

    const firstActions = document.querySelector("#content-main-section > div.ng-scope > div > div > form > div:nth-child(1)")
    if (firstActions) firstActions.style.display = "none"

    const searchBar = document.getElementById('search-bar')
    if (searchBar) searchBar.style.display = "none"

    const badgeNotifications = document.querySelector("#notification_count")
    if (badgeNotifications) badgeNotifications.style.display = "none"

    // on /home/control/main
    const stops = document.querySelector("[ofbiz-portal-portlet-id=DASHBOARD_HOME_P04]")
    if (stops) stops.style.display = "none"
    const trombi = document.querySelector("[ofbiz-portal-portlet-id=DASHB_TROMBI_WELCOME]")
    if (trombi) trombi.style.display = "none"
    const projects = document.querySelector("[ofbiz-portal-portlet-id=DASHB_PRJ_WELCOME]")
    if (projects) projects.style.display = "none"
    const fav = document.querySelector("[ofbiz-portal-portlet-id=DASHBOARD_HOME_FAV]")
    if (fav) fav.style.display = "none"
    const documents = document.querySelector("[ofbiz-portal-portlet-id=DASHBOARD_HOME_P09]")
    if (documents) documents.style.display = "none"
    const pRate = document.querySelector("[ofbiz-portal-portlet-id=DASHB_P_RATE_WELCOME]")
    if (pRate) pRate.style.display = "none"
    const stDoc = document.querySelector("[ofbiz-portal-portlet-id=DASHB_ST_DOC_WELCOME]")
    if (stDoc) stDoc.style.display = "none"
    const expensya = document.querySelector("[ofbiz-portal-portlet-id=DASHBOARD_EXPENSYA]")
    if (expensya) expensya.style.display = "none"

    const header = document.querySelector("body > div.page-wrapper > div.page-header.navbar.navbar-fixed-top > div > div.hor-menu.hidden-sm.hidden-xs > ul")
    const aExpensya = document.createElement('a')
    aExpensya.href = "https://app.expensya.com/Portal/#/Login"
    aExpensya.textContent = "Expensya"
    aExpensya.class = "dropdown-toggle"
    const liHeader = document.createElement('li')
    liHeader.append(aExpensya)
    header.append(liHeader)

    const vacations = document.querySelector("#portalContainer_HOME_INT_PROFILE_grid-stack > div:nth-child(3) > div > div > div > div.tile-info")
    if (vacations) vacations.style.display = "none"

    clearInterval(waitingLoading)
  }

  waitingLoading = setTimeout(() => {
    hideUselessData()
  }, 50)
})();
