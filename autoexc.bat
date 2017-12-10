@echo off
@echo off

ng build
git add .
git commit -m "Upd"
@echo on

git push origin Dev
