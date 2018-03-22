class SingleShow {
    constructor(show) {
        this.id = show.id;
        this.name = show.name;
        this.originalImage = show.image.original;
        this.seasons = show._embedded.seasons;
        this.cast = show._embedded.cast;
        this.summary = show.summary;
    }
}

export { SingleShow };