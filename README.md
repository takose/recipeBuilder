# Recipe Editor & Player
## Getting started
```
$ npm install
$ npm run start
```

## conversations
### frontend - connectionServer
#### path
```
request:
users/state:update
response:
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

### connectionServer - deviceServer
#### path
```
request:
devices/state:update
response:
devices/state:update/return
```

#### content
##### request
e.g.)
```
{
  power: 0,
  time: 0,
}
```

##### responnse
e.g.)
```
{
  deviceId: 'ff',
}
```
