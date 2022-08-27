# ToDo_list api

####  `About`

> Hi there this is an api using mongoDB,express,node.js. 
> This api is used to house and ceate tasks :memo: 


---

## How to make calls

- link to use https://todoli-api.herokuapp.com

| Features          | Route to use               |
| ----------------- |:----------------------- |
| Get the full list(GET) | /api/listitems  |
| Get a single task on list(GET)| /api/listitems/:id |
| Add a new task(POST) | /api/listitems     |
| Delete a task(DELETE)| /api/listitems/:id   | 
| Edit an existing task(PUT)| /api/listitems/:id |
 
---

## 🗒️ Example of return info
```
  {
      _id:630851c3ecf76ea77be2c71d
      task:"pick up school supplies"
      isComplete:false
  }
    
```
