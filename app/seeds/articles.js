
exports.seed = knex =>
  knex('articles').del()
    .then(() =>
      knex('articles').insert([
        {
          id: 1,
          headline: 'The Point of No Return: Climate Change Nightmares Are Already Here',
          url: 'http://www.rollingstone.com/politics/news/the-point-of-no-return-climate-change-nightmares-are-already-here-20150805'
        }, {
          id: 2,
          headline: 'Breitbart\'s James Delingpole says reef bleaching is \'fake news\', hits peak denial',
          url: 'https://www.theguardian.com/environment/planet-oz/2017/mar/24/breitbarts-james-delingpole-says-reef-bleaching-is-fake-news-hits-peak-denial'
        }, {
          id: 3,
          headline: 'Climate change fail: California hammered with rain, snow after alarmists predicted disaster',
          url: 'http://www.theblaze.com/news/2017/03/25/climate-change-fail-california-hammered-with-rain-snow-after-alarmists-predicted-disaster/'
        }, {
          id: 4,
          headline: 'Changing our attitude to Climate Change',
          url: 'http://www.redpepper.org.uk/changing-our-attitude-to-climate-change/'
        }, {
          id: 5,
          headline: 'Powdered Vaccines Could Potentially Save 100,000 Children Each Year',
          url: 'https://futurism.com/powdered-vaccines-could-potentially-save-100000-children-each-year/'
        }, {
          id: 6,
          headline: 'What the top U.S. health official should be saying on vaccines',
          url: 'https://www.washingtonpost.com/news/to-your-health/wp/2017/03/22/what-the-top-u-s-health-official-should-be-saying-on-vaccines/?utm_term=.566d9cd4c546',
        }, {
          id: 7,
          headline: 'HOW RUSSIA PULLED OFF THE BIGGEST ELECTION HACK IN U.S. HISTORY',
          url: 'http://www.esquire.com/news-politics/a49791/russian-dnc-emails-hacked/'
        }, {
          id: 8,
          headline: 'Russian Espionage Piggybacks on a Cybercriminal’s Hacking',
          url: 'https://www.nytimes.com/2017/03/12/world/europe/russia-hacker-evgeniy-bogachev.html?_r=0'
        }, {
          id: 9,
          headline: 'Think Tank: Cyber Firm at Center of Russian Hacking Charges Misread Data',
          url: 'http://www.voanews.com/a/crowdstrike-comey-russia-hack-dnc-clinton-trump/3776067.html'
        }, {
          id: 10,
          headline: 'Fresh Doubts about Russian ‘Hacking’',
          url: 'https://consortiumnews.com/2017/03/08/fresh-doubts-about-russian-hacking/'
        }
      ]),
knex.raw('SELECT setval(\'articles_id_seq\', (SELECT MAX(id) FROM articles))')
);
