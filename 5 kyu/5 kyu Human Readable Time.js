function humanReadable (seconds) {
    let hours = Math.floor(seconds/3600);
    seconds -= hours*3600;

    const minutes = Math.floor(seconds/60);
    seconds -= minutes*60;

    return `${hours > 9 ? hours : '0' + hours}:${minutes > 9 ? minutes : '0' + minutes}:${seconds > 9 ? seconds : '0' + seconds}`
};