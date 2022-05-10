# ⚙ OSRS LLS API

An up-to-date REST API with all items that are currently in the live game. 

## 📂 Using the API
*Assignment explanation*

### API endpoints
- Single item: https://osrsllsapi.herokuapp.com/api/getOne/:name
- All items (limited per 1000): https://osrsllsapi.herokuapp.com/api/getAll?limit=1000&page=1&skip=0

### Data format:

Single item data format (https://osrsllsapi.herokuapp.com/api/getOne/Abyssal%20whip):
```
{
  "_id": "6262c6a5737f59b8b722b02a",
  "id": 4151,
  "name": "Abyssal whip",
  "last_updated": "2021-08-05",
  "incomplete": false,
  "members": true,
  "tradeable": true,
  "tradeable_on_ge": true,
  "stackable": false,
  "stacked": null,
  "noted": false,
  "noteable": true,
  "linked_id_item": null,
  "linked_id_noted": 4152,
  "linked_id_placeholder": 14032,
  "placeholder": false,
  "equipable": true,
  "equipable_by_player": true,
  "equipable_weapon": true,
  "cost": 120001,
  ...
}
```

all items data format (https://osrsllsapi.herokuapp.com/api/getAll?page=1):
```
{
  "0": {
    "_id": "6262c6a2737f59b8b722a0eb",
    "id": 6,
    "name": "Cannon base",
    "last_updated": "2021-08-05",
    "incomplete": false,
    "members": true,
    "tradeable": true,
    "tradeable_on_ge": true,
    "stackable": false,
    "stacked": null,
    "noted": false,
    "noteable": true,
    "linked_id_item": null,
    "linked_id_noted": 7,
    "linked_id_placeholder": 17857,
    "placeholder": false,
    "equipable": false,
    "equipable_by_player": false,
    "equipable_weapon": false,
    "cost": 187500,
    "lowalch": 75000,
    "highalch": 112500,
    "weight": 10,
    "buy_limit": 70,
    "quest_item": true,
    "release_date": "2003-05-27",
    "duplicate": false,
    "examine": "The cannon is built on this.",
    "icon": "iVBORw0KGgoAAAANSUhEUgAAACQAAAAgCAYAAAB6kdqOAAACAElEQVR4Xt2W/0oCQRDH3TfpEXob/5AEk0xSBDMz00TMzDRRzCSK6FE3viPjbbN35XlzRA188dey89mZ786ZyfyPMDbQr4QLYGylcr6V/M2XavgAcaUIlQwkgFGr1GajbPbIS7SPEkIlrw6LD3Z4cECSmWKEsfn8iZdgHzGQzBAjdCpUKlVtuVyz1epF0pYhAkPKRHGk2DKEsYXCKZ2yVru0zWbXSxglCaIAwxFUqd3ue4ld1etXBI73OISCd2RsYHq9e1L35s6ORnM7mTzZ+fyFEq/XH3a1eief4Lvp47NttXqabeIIQFg4NYCQdLF4JRAGwmcGQiVTqY4EgsbjhZ3N1gQAmDCgTud22zK5a8IIhwLQcvkWCYQ1bGzlKiF8KCQOAwIogPr9h+3sUQYyNNzCgNg/EOAYCIYfDKZ021IB4uvOMNLQYUAwPkZAKkA4KUyKU7v++Qmo0bi2xeKZtrENbcxAPH92AcJUR7sVq2To6mJjDMThcEbtigLC9y4QhqPytDZ0U7AxWuUOxF2A+DGjCgRjYmNcY3cgRgEBmIHQZhwolzvW8lHgHwZCUgmEVxcI6wCENrtXX6FK4YbeFQhtTuHqG8/QYUDuYwNAWI+qKlbHDUMnhn/iAKGqytVxY/O/6DsgAPM6VgrVCWKz8deEUgzgSu6jHjKhlFz/5+MTaNKOSR+BbmYAAAAASUVORK5CYII=",
    "wiki_name": "Cannon base",
    "wiki_url": "https://oldschool.runescape.wiki/w/Cannon_base",
    "equipment": null,
    "weapon": null
  },
  "1": {
    "_id": "6262c6a2737f59b8b722a0ec",
    "id": 7,
    "name": "Cannon base",
    "last_updated": "2021-08-05",
    "incomplete": false,
    "members": true,
    "tradeable": true,
    "tradeable_on_ge": false,
    "stackable": false,
    "stacked": null,
    "noted": true,
    "noteable": true,
    "linked_id_item": 6,
    "linked_id_noted": null,
    "linked_id_placeholder": null,
    "placeholder": false,
    "equipable": false,
    "equipable_by_player": false,
    "equipable_weapon": false,
    "cost": 187500,
    "lowalch": 75000,
    "highalch": 112500,
    "weight": 10,
    "buy_limit": null,
    "quest_item": true,
    "release_date": "2003-05-27",
    "duplicate": true,
    "examine": "The cannon is built on this.",
    "icon": "iVBORw0KGgoAAAANSUhEUgAAACQAAAAgCAYAAAB6kdqOAAAC/0lEQVR4Xs3W+04TQRQG8PZNeATfh4Q/TCQkNE0QEbG1qQULFGor1GpAhaCxoEElBPECSQmCtxhvxNcZ+WbzLWfPzkIXVsMkJ9t2Znt+O3N2dlOp89/Sxh2u/n/e0ublUsGsLuZtPF/ImZUH120QsbM+bdprFbP9atKB0hdxZrgHIgoghsZsvRg3b57dCiTGd/TpCKJiIdNm7XExhMIREAZBmyujZv3pTTsWRxcI4yX6YH/J/NydPx2KIHzm7BD0brVsQRwbBcJ5v/cWzZ/PrcNYtiDkuNDVZUNnV82bdl41QUhKkLxaHS7Q7kY1AMJngnR21dKBZQCCxY3vTNrffzky0K9B+5v15ECcpZMgGiVhn95KUCseiHUhQXEwGgbQl/d3AqBfHx6dDcQZ6um5FEoaFXKGvm7NJgtCYCnRn8lcCSV3BUG4Cb63mz7o4OMTHxMbJFH4c/T39WXN0FA+BHBhCPrRvucE6ewRzSvIjVbJCUIMDFyziYeHCwHI1PRdiw2BduZOC/L2EcyQBqGvUBj3o1yuWcDMzLxpNhdMvT5nv4+MFAMg7F0BkNgUdXbVvFveBUJwhiSqWm2aRuNhAJS/4T3bODuJgohCuEC12v0QqFicNL29GTs2UZCcJRwJQt0AU6nMWgRACOAAGhur+oUN0N7r2wK07GM6AuEOc4H4fMIY1AiSyvqRINRWNnvVjsXs4LEhZ6jD2UE7Auk6wu/oxx6Uy43apKifKNDgoPcyBxAeG4mBiCIIiVC0ExN1C4gCYVm7uy/ac7BLSxBROrujeSDXshGEPUbWD0E4ShBmEePx2vFtu+GDsAfF2IeCILlsBOHKcRchMQtaggAFCOhEQLjLokB8MSuVpmz9HAfCmERBetnwO0BI4K3/yYGCxi0fAB3uQbH3IdeySRA+487jWwB2cW6eOI87NMYmAnItmwShT76WSBDG8fmVAAgtPPWukBgZGoRNUYIYMUCpFLf140IDZfD5hdlJBNRp08hOsIyjsf+paaQr9Dnnuv0FUUhXB0AcjsoAAAAASUVORK5CYII=",
    "wiki_name": "Cannon base",
    "wiki_url": "https://oldschool.runescape.wiki/w/Cannon_base",
    "equipment": null,
    "weapon": null
  },
  ...
```

## 🔨 Installation
1. Open the terminal, or use the terminal in your IDE

2. Clone the repository
```
git clone https://github.com/KoenHaagsma/OSRS-LLS-API.git
```
3. Go to the cloned repository
```
cd OSRS-LLS-API
```
4. Install all packages
```
npm install || npm i
```
5. Start the application for development
```
npm run dev
```
6. Open de server and go to the browser: [Localhost:4242](http://localhost:4242). If this doesn't work change your port to another portbottom: 'Go live'

## 🧰 Packages/dependecies

### 🧱 Dependecies
- [cors](https://www.npmjs.com/package/cors)
- [dotenv](https://www.npmjs.com/package/dotenv)
- [express](https://www.npmjs.com/package/express)
- [mongoose](https://www.npmjs.com/package/mongoose)

### 🧱 Dev dependecies
- [nodemon](https://www.npmjs.com/package/nodemon)

## 🔖 License
[![license](https://img.shields.io/github/license/DAVFoundation/captain-n3m0.svg?style=flat-square)]()
