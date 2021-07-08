import express, { Express, RequestHandler }  from 'express';

const app: Express = express();
const PORT = 5000;
app.get('/list/dog/images', (req, res) => {
    // console.log(request)
    res.send('response from get');
});

app.post('/upload/dog/image', (req, res) => {
    console.log(req.body)
    res.send(" response from post ")
})

function start() {
	try {
		app.listen(PORT, () => {console.log(`App has been started on port ${PORT}...`)})
	} catch(e) {
		console.log("Server Error", e.message)
		process.exit(1)
	}
}

start()