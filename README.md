# wba-build-hash

Demo repository for a build hash bug in webpack-bundle-analyzer
https://github.com/webpack-contrib/webpack-bundle-analyzer/issues/297

## Steps
- clone repo
- `npm i`
- `npm run build`
- See error in console:
`Error parsing bundle asset "/xxx/wba-build-hash/dist/[hash]/main.js": no such file`
- Hover over `src` on the WBA page -> parsed/gziped sizes are 0