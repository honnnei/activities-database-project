# activities-database-project #

## Helder & Hanna

### PLAN ###

1. postgres as database
2. Database: London
3. Decide on tables- 1 table called 'activity'
4. seed the activity table with 3 activities

5. Decided on routes
 - get all activities
 - get a partciular activity by id
 - get the names of the types of activity
 - get activity by:
    - event
    - location
    - price
 - delete an activity
 - update an activity   
    
    
### Installation: ###
- npm install

### Challenges
- PUT does not update the data if it is passed an 'id' property --> added error messages and status 422

### Struggles
- creating a foreign key on id
- creating a foreign key on 'location' property

### What we learned
- to use pg Admin
- to connect to the postgres database
- to create migrations
- to create seeds
- to test api routes with mocha & chai
- 