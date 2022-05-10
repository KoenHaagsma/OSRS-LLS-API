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

## 🧰 Packages/dependecies

### 🧱 Dependecies
- [Package name]()
### 🧱 Dev dependecies
- [Package name]()

## 📑 Sources
- [Bronnen]()

## 🔖 License
[![license](https://img.shields.io/github/license/DAVFoundation/captain-n3m0.svg?style=flat-square)]()
