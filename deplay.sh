#!/usr/bin/env sh

Set —e

# build
npm run build

# navigate into the build output directory
cd build

# place .nojekyll to bypass Jekyll processing
echo > .nojekyll

# if you are deploying to a custom domain
# echo ‘www.example.com' > CNAME
git init
git checkout -main
git add -A
git commit -m 'deploy'


# if you are deploying to https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git main


cd -