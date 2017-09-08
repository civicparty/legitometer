
exports.seed = function(knex, Promise) {
  return Promise.join(
    knex('articles').del(),
    knex('articles').insert([
      {
        casefile_id: 1,
        article: {
          publisher: 'Boston Globe',
          headline: 'Why Weather Forecasters Question Climate Change',
          url: 'https://www.bostonglobe.com/metro/2017/02/13/why-weather-forecasters-question-climate-science/h93iEPs3YSwxPLJ58gWCxJ/story.html',
          type: 'Analysis',
        }
      }, {
        casefile_id: 1,
        article: {
          publisher: 'New York Times',
          headline: 'Earth Sets a Temperature Record for Third Straight Year',
          url: 'https://www.nytimes.com/2017/01/18/science/earth-highest-temperature-record.html',
          type: 'Analysis',
        }
      }, {
        casefile_id: 1,
        article: {
          publisher: 'EPA',
          headline: 'Understanding the Link Between Climate Change and Extreme Weather',
          url: 'https://www.epa.gov/climate-change-science/understanding-link-between-climate-change-and-extreme-weather',
          type: 'Analysis',
        }
      }, {
        casefile_id: 1,
        article: {
          publisher: 'Scientific American',
          headline: 'Storm Warnings: Extreme Weather is a Product of Climate Change',
          url: 'https://www.scientificamerican.com/article/extreme-weather-caused-by-climate-change/',
          type: 'Analysis',
        }
      }, {
        casefile_id: 1,
        article: {
          publisher: 'Mother Jones',
          headline: 'Climate Change Means Fewer Days of Perfect Weather',
          url: 'http://www.motherjones.com/environment/2017/01/climate-change-research-noaa-princeton-mild-weather',
          type: 'Analysis',
        }
      }, {
        casefile_id: 1,
        article: {
          publisher: 'Smithsonian Tween Tribune',
          headline: 'Warmer Weather is the New Normal',
          url: 'https://www.tweentribune.com/article/tween56/warmer-temperatures-are-new-normal/',
          type: 'Analysis',
        }
      }, {
        casefile_id: 1,
        article: {
          publisher: 'PBS NewsHour Extra',
          headline: 'Is Climate Change to Blame for Extreme Weather?',
          url: 'http://www.pbs.org/newshour/extra/daily_videos/is-climate-change-to-blame-for-extreme-weather/',
          type: 'Analysis',
        }
      }, {
        casefile_id: 1,
        article: {
          publisher: 'New York Times',
          headline: 'A Conservative Case for Climate Action',
          url: 'https://www.nytimes.com/2017/02/08/opinion/a-conservative-case-for-climate-action.html',
          type: 'Opinion',
        }
      }, {
        casefile_id: 1,
        article: {
          publisher: 'CNN',
          headline: 'Changing Opinions on Climate Change from a CNN Meteorologist',
          url: 'http://www.cnn.com/2016/08/24/opinions/chad-myers-climate-change-weather/ ',
          type: 'Opinion',
        }
      }, {
        casefile_id: 1,
        article: {
          publisher: 'Washington Post',
          headline: 'Climate Change is Here - and Worse Than We Thought',
          url: 'https://www.washingtonpost.com/opinions/climate-change-is-here--and-worse-than-we-thought/2012/08/03/6ae604c2-dd90-11e1-8e43-4a3c4375504a_story.html',
          type: 'Opinion',
        }
      }, {
        casefile_id: 1,
        article: {
          publisher: 'Teen Vogue',
          headline: 'Climate Change Doesn\'t Care Who You Voted For',
          url: 'http://www.teenvogue.com/story/climate-change-partisan-donald-trump-thigh-high-politics',
          type: 'Opinion',
        }
      }, {
        casefile_id: 1,
        article: {
          publisher: 'Daily Mail',
          headline: 'Exposed: How World Leaders Were Duped Into Investing Billions Over Manipulated Global Warming Data',
          url: 'http://www.dailymail.co.uk/sciencetech/article-4192182/World-leaders-duped-manipulated-global-warming-data.html',
          type: 'Fake',
        }
      }, {
        casefile_id: 1,
        article: {
          publisher: 'The Onion',
          headline: 'Climate Change Deniers Present Graphic of What Earth Must Look Like For Them to Believe',
          url: 'http://www.theonion.com/article/climate-change-deniers-present-graphic-description-51129',
          type: 'Satire',
        }
      }, {
        casefile_id: 1,
        article: {
          publisher: 'Politico',
          headline: 'Urging Action to Fight Climate Change',
          url: 'http://www.politico.eu/sponsored-content/urging-action-to-fight-climate-change/',
          type: 'Sponsored',
        }
      }, {
        casefile_id: 1,
        article: {
          publisher: 'Austin Monitor',
          headline: 'Austin Energy Makes Good on Energy Efficiency Goals',
          url: 'http://www.austinmonitor.com/stories/2017/01/austin-energy-makes-good-energy-efficiency-goals/',
          type: 'Local',
        }
      }, {
        casefile_id: 2,
        article: {
          publisher: 'Boston Globe',
          headline: 'Mish Michaels loses WGBH science job - because she doesn’t believe in vaccines',
          url: 'https://www.bostonglobe.com/lifestyle/names/2017/02/08/newly-hired-wgbh-science-reporter-loses-job-over-anti-vaccine-views/thk5uuucpFRivibPehLNPK/story.html',
          type: 'Analysis',
        }
      }, {
        casefile_id: 2,
        article: {
          publisher: 'Scientific American',
          headline: 'Straight Talk About Vaccinations',
          url: 'https://www.scientificamerican.com/article/straight-talk-about-vaccination/  ',
          type: 'Analysis',
        }
      }, {
        casefile_id: 2,
        article: {
          publisher: 'New York Times',
          headline: 'Not Up for Debate: The Science Behind Vaccination',
          url: 'https://www.nytimes.com/2015/09/18/upshot/not-up-for-debate-the-science-behind-vaccination.html',
          type: 'Analysis',
        }
      }, {
        casefile_id: 2,
        article: {
          publisher: 'The Washington Post',
          headline: 'New global coalition launched to create vaccines, prevent epidemics',
          url: 'https://www.washingtonpost.com/news/to-your-health/wp/2017/01/18/new-global-coalition-launched-to-create-new-vaccines-prevent-epidemics/?utm_term=.24d2e9fcf340',
          type: 'Analysis',
        }
      }, {
        casefile_id: 2,
        article: {
          publisher: 'The Washington Post',
          headline: 'Trump energizes anti-vaccine movement in Texas',
          url: 'https://www.washingtonpost.com/national/health-science/trump-energizes-the-anti-vaccine-movement-in-texas/2017/02/20/795bd3ae-ef08-11e6-b4ff-ac2cf509efe5_print.html',
          type: 'Analysis',
        }
      }, {
        casefile_id: 2,
        article: {
          publisher: 'Mother Jones',
          headline: 'How Many People Aren’t Vaccinating their Kids in your State?',
          url: 'http://www.motherjones.com/environment/2014/02/vaccine-exemptions-states-pertussis-map',
          type: 'Analysis',
        }
      }, {
        casefile_id: 2,
        article: {
          publisher: 'Smithsonian Tween Tribune',
          headline: 'Scientists See the World Differently than We Do',
          url: 'https://www.tweentribune.com/article/tween56/scientists-see-world-differently-we-do/ ',
          type: 'Analysis',
        }
      }, {
        casefile_id: 2,
        article: {
          publisher: 'PBS NewsHour Extra',
          headline: 'Scientists Test New Ebola Vaccine Under Tough Conditions',
          url: 'http://www.pbs.org/newshour/extra/daily_videos/scientists-test-new-ebola-vaccine-under-tough-conditions/ ',
          type: 'Analysis',
        }
      }, {
        casefile_id: 2,
        article: {
          publisher: 'The Chicago Tribune',
          headline: 'Donald Turmp and the anti-vaxxer conspiracy theorists',
          url: 'http://www.chicagotribune.com/news/opinion/commentary/ct-donald-trump-anti-vaxxer-20170116-story.html',
          type: 'Opinion',
        }
      }, {
        casefile_id: 2,
        article: {
          publisher: 'Nature',
          headline: 'Trump’s vaccine-commission idea is biased and dangerous',
          url: 'http://www.nature.com/news/trump-s-vaccine-commission-idea-is-biased-and-dangerous-1.21310',
          type: 'Opinion',
        }
      }, {
        casefile_id: 2,
        article: {
          publisher: 'Slate',
          headline: 'Endangering the herd',
          url: 'http://www.slate.com/articles/news_and_politics/jurisprudence/2013/08/anti_vaxxers_why_parents_who_don_t_vaccinate_their_kids_should_be_sued_or.html',
          type: 'Opinion',
        }
      }, {
        casefile_id: 2,
        article: {
          publisher: 'Dr. William Mount',
          headline: 'FBI Raid on CDC HQ Atlanta - Confirmed',
          url: 'http://archive.is/xWQSb',
          type: 'Fake',
        }
      }, {
        casefile_id: 2,
        article: {
          publisher: 'Global Research',
          headline: 'The Zika Virus, the Brazilian Microcephaly Outbreak. Covering-up Another Iatrogenic Disorder',
          url: 'http://www.globalresearch.ca/the-zika-virus-the-brazilian-microcephaly-outbreak-covering-up-another-latrogenic-disorder/5506097',
          type: 'Fake',
        }
      }, {
        casefile_id: 2,
        article: {
          publisher: 'Health Nut News',
          headline: 'CDC Proposes Rule to Detain Anyone',
          url: 'http://www.healthnutnews.com/cdc-proposes-rule-to-apprehend-and-detain-anyone/ ',
          type: 'Fake',
        }
      }, {
        casefile_id: 2,
        article: {
          publisher: 'The Onion',
          headline: 'I Don’t Vaccinate My Child Because It’s My Right to Decide What Eliminated Diseases Come Roaring Back',
          url: 'http://www.theonion.com/blogpost/i-dont-vaccinate-my-child-because-its-my-right-to--37839',
          type: 'Satire',
        }
      }, {
        casefile_id: 2,
        article: {
          publisher: 'io9',
          headline: 'How Anti-Vaxxers Ruined Disneyland for Themselves (And Everyone Else)',
          url: 'http://io9.gizmodo.com/how-anti-vaxxers-ruined-disneyland-for-themselves-and-1680970446',
          type: 'Popular/Blog',
        }
      }, {
        casefile_id: 2,
        article: {
          publisher: 'Teen Vogue',
          headline: 'This 12 Year Old Went Viral After “Exposing” The LInk Between Vaccines and Autism',
          url: 'http://www.teenvogue.com/story/autism-vaccine-link-12-year-old-viral-video',
          type: 'Popular/Blog',
        }
      }, {
        casefile_id: 2,
        article: {
          publisher: 'Biopharma DealMakers',
          headline: 'Independently creating global vaccines',
          url: 'https://biopharmadealmakers.nature.com/channels/222-infectious-diseases/documents/6582-valneva-profile-june-2016',
          type: 'Sponsored',
        }
      }, {
        casefile_id: 2,
        article: {
          publisher: 'Austin Chronicle',
          headline: 'Bad Science Marches at the Legislature',
          url: 'http://www.austinchronicle.com/daily/news/2015-03-06/bad-science-marches-at-the-legislature/ ',
          type: 'Local',
        }
      }]) // end insert
    ); // end join
  }; // end function
