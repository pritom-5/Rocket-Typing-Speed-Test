export default function errorHandler(err, req, res, next) {
	// get err status from err
	const errMessage = err.message;
	// get message from err
	const errStatus = err.status || 400;

	console.log(errMessage, errStatus);

	res.status(errStatus).json({ status: errStatus, message: errMessage });
}
