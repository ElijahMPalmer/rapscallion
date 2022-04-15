In order to merge branch with conflicts!!

Git pull from master
Git merge 'branch you want to merge' --no-ff rapscallion/'branch you want to merge'

Step 1: From your project repository, bring in the changes and test.

git fetch origin
git checkout -b loginbuttons origin/loginbuttons
git merge master
Step 2: Merge the changes and update on GitHub.

git checkout master
git merge --no-ff loginbuttons
git push origin master

