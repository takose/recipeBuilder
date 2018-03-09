# Recipe Editor & Player
## Getting started
```
$ npm install
$ npm run start
```

## composition
<a href="https://gyazo.com/d2650bd08b22c2f67c27892c0df03d69"><img src="https://i.gyazo.com/d2650bd08b22c2f67c27892c0df03d69.png" alt="https://gyazo.com/d2650bd08b22c2f67c27892c0df03d69" width="400"/></a>

## conversations
### frontend - ConnectionServer
#### path
request:
```
users/state:update
```
response:
```
users/state:update/return
```

#### content
e.g.)
```
{
  deviceId: 'ff',
  states: {
    power: 0,
    time: 0,
  },
}
```

### ConnectionServer - deviceServer
#### path
request:
```
devices/state:update
```
response:
```
devices/state:update/return
```

#### content
request:

e.g.)
```
{
  power: 0,
  time: 0,
}
```

response:

e.g.)
```
{
  deviceId: 'ff',
}
```
