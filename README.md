# Test GetDevices from browser by using Agora library

For now on Google Chrome `getDevices` is work perfectly but on **Safari it's still mystery** because it's always return empty string of `deviceId`

# How to run

I made this project from `react-reate-app` but you no need to run any `npm` command if you just want to check you just run this command

```shell
docker-compose up -d --build
```

then go to your browserand open link `127.0.0.1` or `localhost` and open console to check about result (sometime you need to wait quite longer than usual but it's not over 3 minutes)

if you want to check or edit code you can go to this file `src/App.js` I believe you will understand immediately if you have a background of `ReactJS`

# Extra

If you want to run in your local without `Docker` just run

```shell
npm ci // install all dependecies first (optional)s
npm start // run developement server with watch mode
```

Thanks
