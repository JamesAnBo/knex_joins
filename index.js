var config = require('./knexfile').development
var knex = require('knex')(config)

function knexJoin () {
  knex.from('users')
  .innerJoin('user_demographics', 'users.id', 'user_demographics.user_id')
      .then(function(data){
        console.log(data)
      })
      .catch(function(err){
        console.log(err);
      })
      .finally(function(){
        knex.destroy()
      })
}

knexJoin();
