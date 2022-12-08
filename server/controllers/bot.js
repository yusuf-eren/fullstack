export const sendMessageController = (req, res) => {
  if (!req.body.message || req.body.message === '') return res.sendStatus(400);

  const date = new Date().getTime();
  const { message } = req.body;
  try {
    return res.status(200).json({ message, date, sender: 'echoBot' });
  } catch (error) {
    // I added this line if the error is not coming from
    // a fetch request we should handle it with 500 or 403
    return res.status(error.status || 500).send(error);
  }
};
