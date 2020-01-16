const videoanalyser = require('./video-analyser')
const fs = require('fs')
const dvr17 = './1D42C600_243830.MP4'
const dvr19 = './27D3DC00.MP4'
var mainWindow;
var tmp;

 videoanalyser.default.analyseVideo(dvr17, async function(err,result){
                
        if(err)
        {
            console.error(err)
            return err
        }
        //console.log(result)
        tmp = result
        fs.writeFileSync("dvr17.json", JSON.stringify(result), 'utf8');
        return await result 
    }) 

setTimeout(function () {
  console.log(tmp)
    }, 100)

/*
 analyseVideo(analyseQueue.pop(), function (err, result) {
    
                // Finished so no need to timeout
                clearTimeout(analyseTimeout);

                processing = false;
                getMainWindow().webContents.send('analysed-video', result);
                processQueue();
            });

module.exports.default =  {
//export default {
    analyseVideo: analyseVideo,
    fileExists: fileExists,
    register: register,
    findAtoms: findAtoms
};

 */