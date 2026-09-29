import { useState } from "react";
import TicketForm from "./components/TicketForm";
import TicketList from "./components/TicketList";
import "./App.css";

function App() {
  const [tickets, setTickets] = useState([]);

  const handleTicket = (newTicket) => {
    setTickets((prev) => [
      ...prev,
      {
        ...newTicket,
        id: Date.now(),
        status: "Open",
      },
    ]);
  };

  const handleToggleStatus = (id) => {
    setTickets((prev) =>
      prev.map((ticket) =>
        ticket.id === id
          ? {
              ...ticket,
              status:
                ticket.status === "Open" ? "Resolved" : "Open",
            }
          : ticket
      )
    );
  };

  const openTickets = tickets.filter(
    (ticket) => ticket.status === "Open"
  ).length;

  const resolvedTickets = tickets.length - openTickets;

  const handleDeleteTicket = (id) => {
  setTickets((prevTickets) =>
    prevTickets.filter((ticket) => ticket.id !== id)
  );
};

  return (
    <div className="app-container">
      <header className="dashboard-header">
        <div className="header-content">
          <div className="brand">
            <div className="brand-icon">
              <i className="fa-solid fa-headset"></i>
            </div>

            <div>
              <h1>SupportDesk</h1>
              <p>IT Support Management</p>
            </div>
          </div>

          <div className="header-badge">
            <span className="online-dot"></span>
            Dashboard
          </div>
        </div>
      </header>

      <main className="dashboard-main">
        <section className="welcome-section">
          <div>
            <p className="eyebrow">WORKSPACE</p>
            <h2>Support overview</h2>
            <p className="welcome-text">
              Create, track, and manage your support tickets.
            </p>
          </div>

          <div className="welcome-icon">
            <i className="fa-solid fa-layer-group"></i>
          </div>
        </section>

        <section className="stats-grid">
          <article className="stat-card">
            <div className="stat-icon total-icon">
              <i className="fa-solid fa-ticket"></i>
            </div>
            <div>
              <p>Total tickets</p>
              <h3>{tickets.length}</h3>
            </div>
          </article>

          <article className="stat-card">
            <div className="stat-icon open-icon">
              <i className="fa-regular fa-clock"></i>
            </div>
            <div>
              <p>Open tickets</p>
              <h3>{openTickets}</h3>
            </div>
          </article>

          <article className="stat-card">
            <div className="stat-icon resolved-icon">
              <i className="fa-solid fa-check"></i>
            </div>
            <div>
              <p>Resolved</p>
              <h3>{resolvedTickets}</h3>
            </div>
          </article>
        </section>

        <section className="dashboard-grid">
          <div className="form-card">
            <div className="section-heading">
              <div>
                <p className="eyebrow">NEW REQUEST</p>
                <h2>Create a ticket</h2>
              </div>
              <i className="fa-solid fa-pen-to-square heading-icon"></i>
            </div>

            <TicketForm onAddTicket={handleTicket} />
          </div>

          <div className="tickets-section">
            <div className="section-heading tickets-heading">
              <div>
                <p className="eyebrow">TICKET MANAGEMENT</p>
                <h2>Your tickets</h2>
              </div>

              <span className="ticket-count">
                {tickets.length} total
              </span>
            </div>

            <TicketList
              tickets={tickets}
              onToggleStatus={handleToggleStatus}
              onDeleteTicket={handleDeleteTicket}
            />
          </div>
        </section>

        <footer className="dashboard-footer">
          <span>SupportDesk</span>
          <span>Simple support. Clear solutions.</span>
        </footer>
      </main>
    </div>
  );
}

export default App;