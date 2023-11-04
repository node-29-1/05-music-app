const Album = require('./Album');
const Artist = require('./Artist');
const Genre = require('./Genre');
const Song = require('./Song');

Artist.belongsToMany(Genre, { through: "ArtistsGenres" });
Genre.belongsToMany(Artist, { through: "ArtistsGenres" });


Artist.hasMany(Album);
Album.belongsTo(Artist);


Album.hasMany(Song);
Song.belongsTo(Album);


Song.belongsToMany(Artist, { through: "SongsArtists" });
Artist.belongsToMany(Song, { through: "SongsArtists" });


Song.belongsToMany(Genre, { through: "SongsGenres" });
Genre.belongsToMany(Song, { through: "SongsGenres" });
