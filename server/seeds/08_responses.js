
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('responses').del()
    .then(function () {
      // Inserts seed entries
      return knex('responses').insert([
        {review_id: 1,
          question: 'What is the headline?',
          response: 'x',
          questionType: 'short'
        },
        {review_id: 1,
          question: 'Briefly summarize this article in 1­2 sentences',
          response: 'xs',
          questionType: 'long'
        },
        {review_id: 1,
          question: 'What is the author\'s name?',
          response: 'xd',
          questionType: 'short'
        },
        {review_id: 1,
          question: 'What information can you find about the author?',
          response: 'xf',
          questionType: 'long'
        },
        {review_id: 1,
          question: 'Is the author credible?',
          response: 'xg',
          questionType: 'yesNo'
        },
      ]);
    });
};
