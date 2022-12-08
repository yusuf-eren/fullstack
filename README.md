# Test Case

## Note Before Starting

I wanted to clarify a few things before starting.

- I tried to simulate response time for a normal bot. So I saved the time when user entered something. Then saved another time when the response end. So the response dates are looking more realistic and most importantly it can be sorted by chronological(I included this solution too).

- I can not decided what to choose between localStorage and sessionStorage because It is supposed to show previous messages too (line 29 `assignment.md`). So I decided to go with localStorage because it is impossible to show previous data in local storage. One more option is saving in DB. I thought about this too but again, in `assignment.md`, it is a task on the client side. So I removed this idea too.

- I especially wanted to clarify second one because I know the concept of the system design but there is no option for me when the instructions already declared :)

If any improvement requests or unexplained parts contact me at;
[erenyusuf170@gmail.com](mailto:erenyusuf170@gmail.com)

# How to install?

### Run command in the main directory;

```
npm install
```

### Then run;

```
npm run install:all
```

# How to start?

### Run the command to start on your local;

```
npm run start
```

### Now you can go to `http://localhost:3000` and use the app

## Optional: Docker

```
npm run dockerize
```

### Run your app on Docker

```
npm run docker
```

### You can go to `http://localhost:3000` to view the application
