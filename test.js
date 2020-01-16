const videoanalyser = require('./video-analyser')
const dvr17 = './1D42C600_243830.MP4'
const dvr19 = './27D3DC00.MP4'
//console.log(videoanalyser)
//console.log(videoanalyser.default.analyseVideo)

tmp =  videoanalyser.default.analyseVideo(dvr19)

console.log(tmp)
/*

module.exports.default =  {
//export default {
    analyseVideo: analyseVideo,
    fileExists: fileExists,
    register: register,
    findAtoms: findAtoms
};

 */