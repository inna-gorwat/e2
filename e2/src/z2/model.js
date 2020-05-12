import mongoose from 'mongoose';

const videoSchema = new mongoose.Schema({
    title: {
        type:String,
        required: true
    },
    text:"",
    shortDescribe:"",
    date:date,
    count:0
});

const Video = mongoose.model("Video", videoSchema);

export default Video;