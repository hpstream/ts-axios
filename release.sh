#!/usr/bin/env sh
set -e
echo "please choose argument [major|minor|patch]: "
read argument
if [ $argument != 'major' ] && [ $argument != 'minor' ] && [ $argument != 'patch' ]
then 
  echo "argument $argument is not correct,you should choose [major|minor|patch]"
  exit;
fi
read -p "choose $argument - are you sure? (y/n)" -n 1 -r
echo  # (optional) move to a new line
if [[ $REPLY =~ ^[yY]$ ]]
then
  echo "Releasing $argument ..."

  npm run release
  npm run changelog
  git add -A
  git commit -m '[build] changelog'
  npm run gh-release
  # commit
  #git add -A
  #git commit -m "[build] $VERSION"
  #npm version $VERSION --message "[release] $VERSION"
  #git push origin master
  #git tag $VERSION
  #git push --follow-tags origin master

  # publish
  # npm publish
fi
