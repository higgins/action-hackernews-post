# action-hackernews-post
**Unofficial**
A Github action to post to [news.ycombinator.com](https://news.ycombinator.com)

Uses [@lukakerr](https://github.com/lukakerr)'s [hkn](https://github.com/lukakerr/hkn) go module to
login and post to HN

## Guidelines
As a reminder, read through [HN's submission
guidelines](https://news.ycombinator.com/newsguidelines.html) to
confirm your integration adheres

## Inputs

Do not store your login credentials directly in your workflow
file. Store them in an encrypted, secure manner.

**EG:** Github secrets: Settings > Secrets > Actions

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

## Example usage, static file

```
uses: higgins/action-hackernews-post@v1.0.1
with:
  HN_USERNAME: ${{ secrets.HN_USERNAME }}
  HN_PASSWORD: ${{ secrets.HN_PASSWORD }}
  POST_TITLE: "A clock where every second is user submitted content"
  POST_URL: https://24HourHomepage.com
```
