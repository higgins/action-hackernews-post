# action-hackernews-post
A Github action to post to news.ycombinator.com

## Guidelines
As a reminder, read through [HN's submission
guidelines](https://news.ycombinator.com/newsguidelines.html) to
confirm your integration adheres

## Inputs

## `HN_USERNAME`

**Required**
The hackernews username you want to post as.
Set this in your repository secrets

## `HN_PASSWORD`

**Required**
The password for the hackernews user.
Set this in your repository secrets

## `POST_TITLE`

The title as it will be displayed on news.ycombinator.com.

## `POST_URL`

The URL to post to HN.

## Example usage

uses: higgins/action-hackernews-post@v1.0.0
with:
  HN_USERNAME: ${{ secrets.HN_USERNAME }}
  HN_PASSWORD: ${{ secrets.HN_PASSWORD }}
  POST_TITLE: "An clock where every second is user submitted content"
  POST_URL: https://24HourHomepage.com
