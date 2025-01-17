```javascript
db.collection.updateOne({"_id":ObjectId("someId")},{
  $inc:{counter:1},
  $setOnInsert:{counter:0} //Initialize if doesn't exist
});
```