npx express-generator --view=pug seointro

npx npm-check-updates -u
or
npm install -g npm-check-updates
ncu
ncu -u
npm install

change directory: > cd seointro

install dependencies: > npm install

MacOS or Linux
DEBUG=myapp:* npm start
windows
set DEBUG=seointro:* & npm run dev

https://github.com/coreybutler/nvm-windows/releases
nvm-setup.exe
nvm version
nvm list available
nvm install 16.20.0
nvm install 22.13.1
nvm use 22.13.1
node -v
echo 22.13.1 > .nvmrc
nvm use 22.11.0
nvm list
nvm uninstall 22.12.0

npm ls inflight glob
npm outdated
npm update

git add .
git commit -m "check required environment variables"
git push origin main