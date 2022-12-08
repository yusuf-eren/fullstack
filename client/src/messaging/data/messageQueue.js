const messageQueue = (allMessages) => {
  return allMessages.sort(function (prev, next) {
    return prev.date - next.date;
  });
};

export default messageQueue;
