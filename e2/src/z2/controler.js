import Video from "./model"

const videoControler = {
    //отримати всі
    async get: function (request, response) {
        try {
            const list = await Video.find(makeQueryObject(req.query));
            response.send(list);
        }
            catch(error){
            response.status(500).send(error);
        }
    
    },
    
    async getByCount(req,res){
        function makeQueryObject(query){
            let result = {};        
            if (query.data){
                result.data = {"$gte":(query.count)};
            }   
            return result; 
        }
        try {
            const list = await Video.findByData.findByData(makeQueryObject(req.params.count));
            response.send(list);
        }
            catch(error){
            response.status(500).send(error);
        }
    },

    async post (req, res) {
    try {
        const video = new video(req.body);
        await video.save();
        res.send(video);

        } catch (error) {
        res.status(500).send(error);
        }
    },
    async delete (req, res) {
        try {
            const video = await Video.findByIdAndDelete(req.params.id);
            if (!video)
                res.status(404).send("Not found");
            res.send(video);
        } catch (error) {
            res.status(500).send(error);
        }
    },

    async patch(req, res) {
        try {
            const video = await Video.findByIdAndUpdate(req.params.id, req.body,  {new: true});
            if (!video)
                res.status(404).send("Not found");
            await Video.save();
            res.send(video);
        } catch (error) {
            res.status(500).send(error);
        }
    }
}

export default videoControler;