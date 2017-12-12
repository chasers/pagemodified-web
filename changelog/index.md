---
layout: default
title: Change Log
slug: changelog
path: ../

meta-title: Change Log
meta-description: Importnat software change notes for Page Modified.

rangeslider: true
---

<div class="topo-bg">
  <div class="slide page-header">
    <div class="inner">
      <h1>Change Log</h1>
      <p>“My mama always used to tell me: if you can’t find something to live for, you best find something to die for.” – Tupac</p>
      <a class="button large" href="#cta-box" rel="scrollTo" data-scrollTo="signup">Use Page Modified Free</a>
    </div>
  </div>
</div>

## Pagemodified Changelog
## v0.10.0
  * New domains dashboard
  * Mobile and Desktop screenshots
  * Headless Chrome Browser
  * Favicons
  * Status code graph
  * Screenshots in header on Dashboard
  * Updated styles for navigation
  * Chrome running on dedicated server
  * Tags page matches new domain dashboard
  * Archived Domains View
  * Filter and Search styling
  * Push new screen shots over websocket to update header and background
  * Archived domains have greyed out screenshots
  * Fixed an issue with being able to hot upgrade the system
  * Icons for crawl stop/finished/crashed in crawl history

## v0.9.3
  * retry timeout domains up to 5 times
  * retry column in UI
  * added custom pool for every crawl
  * add number of pool connections to admin interface

## v0.9.2
  * Fixed Redirect Chain issues
    * Images
    * Relative Links
  * Fixed UTF-8 Issue
  * Fixed nil content type error
  * Fixed robots trying to process external external links
  * Remove newlines from urls found on pages

## v0.9.1
  * Redirect Chains

## v0.9.0
  * Properly handle nofollow in links
  * Properly handle X-Robots-Tag header
  * Properly handle Meta Robots Tags
  * Add word count to URLs
  * Add content hash to URLs
  * Update Filters (thin content, duplicate content)
  * Clean up API fields that are no longer used
  * General Performance Updates

## v0.8.0
  * All initial API endpoints rolled out
  * Plans available
  * Move url processing to its own serparte queue
  * Handle lower case content-type bug
  * Better validation on new domains
  * Database pagination, sorting, filtering and search in Interface
  * Pagination added to API
  * Edit account information

## v0.7.2
  * Full auth on API with domain checking
  * callback url on user profile and fired at end of crawl
  * Ability to update password on user profile

## v0.7.1:
  * Initial auth on API. API-Key must be sent in header

## v0.7.0:
  * Domain Dashboard with streaming updates
  * API Beta launched
  * Ping now set to 30 second intervals
  * Updated layout on domain edit and create page

## v0.6.3:
  * Add redirect url on 300 redirects
  * Allow horizontal table scrolling in History Show view

## v0.6.2:
  * Page size for each url and external links
  * Page download time for each url and external links
  * Title character count for url and external links
  * Description character count for url and external links
  * Added tooltips to crawl icons
  * Updated login page to specify email not username
  * Add content type to the history show page

## v0.6.1:
  * Fix crawled finished email being sent repeatedly
  * Fixed issue on crawls with no previous history or robots.txt

## v0.6.0:
  * Robots.txt always checked
  * Robots.txt stored
  * Robots.txt diff alert
  * Robots.txt diff view

## v0.5.1:

  * Table sorting added to history view

## v0.5.0:

  * Canonical Column add to layout
  * <link rel="canonical" href="example.com"> parsed on each page of the crawl
  * URL "Found On" added
  * Pop up all pages the url was linked from
  * Pagination of the found on view