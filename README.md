# action-hackernews-post
A Github action to post to news.ycombinator.com

## Guidelines
As a reminder, read through [HN's submission
guidelines](https://news.ycombinator.com/newsguidelines.html) to
confirm your integration adheres

## Inputs

## `who-to-greet`

**Required** The name of the person to greet. Default `"World"`.

## Outputs

## `time`

The time we greeted you.

## Example usage

uses: actions/hello-world-docker-action@v1
with:
  who-to-greet: 'Mona the Octocat'
