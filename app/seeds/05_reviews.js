
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('reviews').del()
    .then(function () {
      // Inserts seed entries
      return knex('reviews').insert([
        {id: 1,
          student_id: 2,
          answers: {
            publisher_name: 'Sprocket', // references to questions rather than "publisher_name, etc"
            author: 'your mom',
            headline: 'I like fish',
            published_date: '01/03/1983',
            summary: 'Fish are tasty',
            sources: 'My mouth',
            ads: 'minimal',
            objectivity: 'none',
            page_design: 'no',
            spelling: 'lots',
            article_type: 'opinion',
            credibility_rating: 3,
            reputablity_rating: 4,
            citation_rating: 2,
            headline_rating: 5
            }
          },
      ]);
    });
};
