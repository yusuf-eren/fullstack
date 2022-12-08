function MessageQueue({ message, sender, date }) {

    const d = new Date(date);

    let botResponse = (<div className="item">
        <div className="icon">
            <i className="fa fa-user"></i>
        </div>
        <div className="msg">
            <p>{message}</p>
            <span className="send-time">{`${d.getHours()}:${d.getMinutes()}`}</span>
        </div>
    </div>)

    let clientResponse = (<div className="item right">
        <div className="msg">
            <p>{message}</p>
            <span className="send-time-right">{`${d.getHours()}:${d.getMinutes()}`}</span>
        </div>
    </div>)
    return (sender === 'echoBot') ? botResponse : clientResponse
}

export default MessageQueue;