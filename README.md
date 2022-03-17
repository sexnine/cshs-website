New website for cshs.dev

## Development
Clone the repo `git clone https://github.com/sexnine/cshs-website.git`

Change into the project directory `cd cshs-website/`

Install packages `npm i`

Run a dev server with `npm run dev` (or `npm run serve` to bind to 0.0.0.0)

## Side note:
If you run into this shitass error
```
listen EACCES: permission denied 0.0.0.0:3000
```
It's probably docker eating up all your ports (bro i kid you not docker took up every port jetbrains tried to bind to and couldnt open up my mfing ide) and it's probably time to restart your computer lol

If the above doesn't work and your on windows, run `net stop winstat` and then `net start winstat` as adminstator in the terminal :)
