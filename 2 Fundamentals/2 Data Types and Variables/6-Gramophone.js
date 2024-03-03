function gramophone(band, album, song)
{
    let duration = Math.ceil((album.length * band.length) * song.length / 2 / 2.5);
    console.log(`The plate was rotated ${duration} times.`)
}

gramophone('Black Sabbath', 'Paranoid', 'War Pigs');
gramophone('Rammstein', 'Sehnsucht', 'Engel');