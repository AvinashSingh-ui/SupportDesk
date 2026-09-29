import {useState} from 'react'

function TicketForm({onAddTicket}) {
    const [message,setMessage]=useState('');
    const [title,setTitle]=useState('');
    const [priority,setPriority]=useState('Medium');

    const handleSubmit = (e) => {
    e.preventDefault();
    onAddTicket({title,priority});
    setMessage('Ticket created successfully!');
    setTitle('');
    setMessage('');
};
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder='e.g. Laptop not connecting to Wi-fi' value={title} onChange={(e)=>setTitle(e.target.value)} required/>

            <select value={priority} onChange={(e)=>setPriority(e.target.value)}>
                <option>Low</option>
                <option>Medium</option>
                <option>High</option>
            </select>

            <button type="submit">Submit</button>
        </form>
        {message && <p>{message}</p>}
      
    </div>
  )
}

export default TicketForm
