import './TicketList.css';

function TicketList({ tickets, onToggleStatus,onDeleteTicket }) {
  return (
    <div className="ticket-list">
      <div className="ticket-list-header">
        <h2>Your tickets</h2>
        <span className="ticket-count">{tickets.length} total</span>
      </div>

      {tickets.length === 0 ? (
        <p className="empty-tickets">No tickets created yet.</p>
      ) : (
        tickets.map((ticket) => (
          <div className="ticket-card" key={ticket.id}>
            <div className="ticket-card-header">
              <h3>{ticket.title}</h3>

              <span
                className={`ticket-status ${
                  ticket.status === 'Open'
                    ? 'status-open'
                    : 'status-resolved'
                }`}
              >
                {ticket.status}
              </span>
            </div>

            <span
              className={`ticket-priority priority-${ticket.priority.toLowerCase()}`}
            >
              {ticket.priority} Priority
            </span>

            <div className="ticket-actions">
            <button
            className="ticket-action"
            onClick={() => onToggleStatus(ticket.id)}
            >
            {ticket.status === 'Open' ? 'Resolve Ticket' : 'Reopen Ticket'}
            </button>

            <button
            className="ticket-delete"
            onClick={() => onDeleteTicket(ticket.id)}
            >
            Delete
            </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default TicketList;