# Zinc test app

Example test application for testing `Embedded Zinc` component

The component itself is documented in the code:

https://github.com/ServiceMax-Engineering/zinc-react-components/blob/master/src/components/Zinc/Zinc.js#L134

See the `ZincWrapper` component for an usage example.

## postMessage data examples:

You can send `postMessage` data to Zinc application by pasting JSON payloads to text areas in this test application.

### postData

If this component property changes, the payload is sent to the Zinc application as is.

Its up to you if you want to use this property, or the more specific properties (postNavigateToData etc) documented below.

The Zinc app expects the object to have `type` and `payload` properties. For example:

```
{
  "type": "navigate",
  "payload": {
    "zinc-route": "/conversation/24083"
  }
}
```

Currently following types are supported by the Zinc app:

- navigate
- send-route
- compose

### postNavigateToData

If this property changes, the component will send `navigate` message to the Zinc app.

Example object:
```
{
  "zinc-route": "/conversation/13759/attachment/385977"
}
```

### handlePostConversationChange

If this property changes, the component will send `compose` message to the Zinc app.

This will create a new conversation with given recipients.

See parameter documentation at:
https://community.servicemax.com/s/article/Zinc-How-to-Use-Conversation-Deep-Links

Example object:
```
{
  body: 'this is a message',
  create: true,
  external_id: 'smax-workorder-a3o3N000000KYIKQA4',
  participants: ['foo@bar.com', 'bar@foo.com'],
  reuse_hotline: true,
  title: 'Work order 123'
}
```
### postRouteMessageData

If this property changes, the component will send `send-route` message to the Zinc app, and a new
route message will get sent to the recipient.

```
{
  "recipient": "badger@tapfoo.io",
  "route": {
    "stops": [
      {
        "label": "home",
        "latitude": "31.2179015",
        "longitude": "121.4407185",
        "name": "Starting Location"
      },
      {
        "label": "1",
        "latitude": "31.144528",
        "longitude": "121.421028",
        "name": "Meeting",
        "start": "2022-04-22T10:00:00+0800"
      },
      {
        "label": "2",
        "latitude": "31.196134",
        "longitude": "121.592041",
        "name": "[WO-00011218] ServiceMax",
        "start": "2022-04-22T13:00:00+0800"
      }
    ],
    "polylines": [
      "{fp}Di{edVF?nAC[kDI_AWeCGk@UsBGo@dAUjAYrEqAj@OpA_@hDcA~@YnG_Ar@Ir@Gz@EjAGtA?fDvBr@^|FjEhUdO`@V`HrE|B~ArE|Cl@^h@^hJnGd@Zv@h@`Ar@`ErC`BjAtB`BvAp@h@PbAV`Cd@b@HvH`Bx@Xv@PpK`C`@JNBlGdAvId@t@GdX`B~@FhF`@pCNlAH~{A`KdFv@~E|AzC`BNLdCtBpClCzEfFxDhEHJRRJL~[l]^`@LNVSRS~FmEdIcGfIgGpDmCNK~BSl@EnAGfLq@bBKrAOnA_@DVFVBJVlAf@hCLh@cD|@aAVEb@?RLx@XdBQLSPQT????OPCX\\bBrEyAI]o@YBIq@oD]iBbD}@Mi@g@iCWmACKGWEWr@WdFkBdAi@^[^[j@i@bAaAl@i@n@c@r@]t@YnIaC`@Kn@SIWKg@AEOu@}@cFAKCKwAgICOgCyO_AiFg@{CCMyA_GkAqDo@mBsFcNkDqJiAmD[gAoAoEy@sDu@qD[sBMiBGwBCaC@sC@}B@_C@eC?cCCsBGsBQmC_@{EsCqX[wCYoDu@mHwAgQiAgPCSc@aF{BmYgBmTyAcRYcEs@{JMgEKsDMqGCaAEuBMiHa@oRQ{HIkFW{LUkKSeKUoM]wOQ_IYkGWoCYoCq@}E}@aFcAuEyDkPqOaq@wFcVmCiLkDeOy@iDy@gDeDyNkAmFqIq_@mBqKs@mEi@}DaDeYYkDq@mIq@}Kw@oPyA{UsAoLsAmHeD{QmBkKwBiJeAiEuCeJa@uAu@eCw@{CeCqIqCgJmDmLgAuDyAuGYkBc@iCeAyHsBgPWoBGsBk@wFkBeO[cCYaBe@gBGUyAJi@B}EN_ADgADe@@K?YBmL^g@@Q@e@@}HXg@@g@BwCHmADuCJ}CJaY|@iGRu@BO@e@@mM`@i@BA?E?A?D\\@T@X\\lHDv@Dx@Dp@Fz@BZDZTtBaBYCAGAmJXDhADbC??"
    ]
  }
}
```

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`
