export const resolvers = {
  Query: {
    movies: () => {
      return [
        {
          plot: "The story of Easy Company of the US Army 101st Airborne division and their mission in WWII Europe from Operation Overlord through V-J Day.",
          genres: ["Action", "Drama", "History"],
          runtime: 705,
          cast: [
            "Scott Grimes",
            "Matthew Leitch",
            "Damian Lewis",
            "Ron Livingston",
          ],
          poster:
            "https://m.media-amazon.com/images/M/MV5BMTI3ODc2ODc0M15BMl5BanBnXkFtZTYwMjgzNjc3._V1_SY1000_SX677_AL_.jpg",
          title: "Band of Brothers",
          fullplot:
            'This is the story of "E" Easy Company, 506th Regiment of the 101st Airborne Division from their initial training starting in 1942 to the end of World War II. They parachuted behind enemy lines in the early hours of D-Day in support of the landings at Utah beach, participated in the liberation of Carentan and again parachuted into action during Operation Market Garden. They also liberated a concentration camp and were the first to enter Hitler\'s mountain retreat in Berchtesgaden. A fascinating tale of comradeship that is, in the end, a tale of ordinary men who did extraordinary things.',
          languages: ["English", "Dutch", "French", "German", "Lithuanian"],
          released: "2001-09-09T00:00:00.000Z",
          rated: "TV-MA",
          lastupdated: "2015-08-31 00:04:34.187000000",
          year: 2001,
          countries: ["UK", "USA"],
          type: "series",
        },
        {
          plot: "A comprehensive survey of the American Civil War.",
          genres: ["Documentary", "History", "War"],
          runtime: 680,
          cast: [
            "Sam Waterston",
            "Julie Harris",
            "Jason Robards",
            "Morgan Freeman",
          ],
          poster:
            "https://m.media-amazon.com/images/M/MV5BZDc1NzI2MGEtZDA2Yy00ZWExLTgwYmItNjU3N2QyYmM0MzYwXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SY1000_SX677_AL_.jpg",
          title: "The Civil War",
          fullplot:
            "This highly acclaimed mini series traces the course of the U.S. Civil War from the abolitionist movement through all the major battles to the death of President Lincoln and the beginnings of Reconstruction. The story is mostly told in the words of the participants themselves, through their diaries, letters, and Visuals are usually still photographs and illustrations of the time, and the soundtrack is likewise made up of war-era tunes played on period instruments. Several modern-day historians offer periodic comment and insight on the war's causes and events.",
          languages: ["English"],
          released: "1990-09-23T00:00:00.000Z",

          lastupdated: "2015-09-01 00:13:15.693000000",
          year: 1990,
          countries: ["USA"],
          type: "series",
        },
        {
          plot: "Astronomer Carl Sagan leads us on an engaging guided tour of the various elements and cosmological theories of the universe.",
          genres: ["Documentary"],
          runtime: 60,
          cast: ["Carl Sagan"],
          poster:
            "https://m.media-amazon.com/images/M/MV5BMTY4MGQyNjgtMzdmZS00MjQ5LWIyMzItYjYyZmQzNjVhYjMyXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SY1000_SX677_AL_.jpg",
          title: "Cosmos",
          fullplot:
            'Astronomer Dr. Carl Sagan is host and narrator of this 13-hour series that originally aired on Public Broadcasting Stations in the United States. Dr. Sagan describes the universe in a way that appeals to a mass audience, by using Earth as a reference point, by speaking in terms intelligible to non-scientific people, by relating the exploration of space to that of the Earth by pioneers of old, and by citing such Earth legends as the Library of Alexandria as metaphors for space-related future events. Among Dr. Sagan\'s favorite topics are the origins of life, the search for life on Mars, the infernal composition of the atmosphere of Venus and a warning about a similar effect taking place on Earth due to global pollution and the "greenhouse effect", the lives of stars, interstellar travel and the effects of attaining the speed of light, the danger of mankind technologically self-destructing, and the search, using radio technology, for intelligent life in deep space.',
          languages: ["English"],
          released: "1980-09-28T00:00:00.000Z",

          lastupdated: "2015-08-29 00:00:33.733000000",
          year: 1980,
          countries: ["USA", "UK"],
          type: "series",
        },
      ]
    },
  },
}
