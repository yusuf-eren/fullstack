function MessageQueue({ message, sender, date }) {

    let botResponse = (<div className="item">
        <div className="icon">
            <i className="fa fa-user"></i>
        </div>
        <div className="msg">
            <p>{message}</p>
        </div>
    </div>)

    let clientResponse = (<div className="item right">
        <div className="msg">
            <p>{message}</p>
        </div>
    </div>)
    return (sender === 'echoBot') ? botResponse : clientResponse
}

export default MessageQueue;