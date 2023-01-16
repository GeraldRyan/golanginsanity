# golanginsanity
golang tutorial

### day 1  
Set up a domain and register it with a server, e.g linode.  
There is a learning curve with Linode but it is worth it!  

It also really helps to get SSH working. It makes the dev experience much better. I got it working even on WSL.   
It also helps to get sftp working. As always, there's a vscode extention for it.   
This is another bit of learning curve but gives you superpowers and is totally worth it.  
(see the example_config directory)  
  
In the server, install and configure nginx and letsencrypt (apt install, etc).   
This is not a tutorial btw, just a summary or outline. You must figure things out on your own.   

### day 2

Installed mongodb into the server as well as mysql and phpmyadmin as seen from some of the config files.  
This is not a tutorial, just a glorified commit message so you know what's going on behind the scenes or for review. 

### day 3

Installed Node and Go.  
Ran our first hello world go package gws.go

### day 4

Installed Redis; added ip via ifconfig and added auth to /etc/redis/redis.conf

## day 5

Installed all the npm/node/react libraries manually (see package.json) and built up a simple hello world react app page manually. Commented out nginx config pointing to index. See the start command in package.json. This uses parcel to build app and locate it into the dist folder, which nginx is already serving. 

## day 6 

Implement context that will later be used. Remember `npm run start` rebuilds (and runs) the application on linode via the powerful parcel library that does all this magic under the hood. 

styled-components are a thing, in react, and they use tagged template literals (tagged templates), which are a thing- namely which are a function that is invoked with \`\` instead of (). Example for styled components is just this:

```javascript
const StyledApp = styled.div`
border: 1px solid #f00;`;
```

See the Mozilla docs for more information. In this case, styled returns a react component, class, function or object of some sort that can be used just as any other JSX component can. 

In our case, from a version-space perspective, the app was failing to build with `npm run start` / parcel due to a dependency error with `react-is`, which is apparantly a component testing framework, to determine if a component or object or variable is a react component. It is a plumbing tool that styled used, but for some reason wasn't declared, so `npm install react-is` solved the build fail errror. 

`react-json-view` is a powerful way to display json objects on the front end. 

## day 7