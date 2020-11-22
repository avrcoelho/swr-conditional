import { useState } from "react";
import useSWR from "swr";

export default function Home() {
  const [showClients, setShowClients] = useState(false);
  const [selectedClient, setSelectedClient] = useState(null);

  const { data: clients } = useSWR(showClients ? "/api/clients" : null);

  // não vai retornar os dados caso selectedClient for null, false, undefined
  const { data: client } = useSWR(
    () => `/api/clients/${selectedClient}/orders`
  );

  return (
    <div>
      <h1>Clients</h1>

      <button
        onClick={() => {
          setShowClients((prevState) => !prevState);
          setSelectedClient(null);
        }}
      >
        Showing clients: {String(showClients)}
      </button>

      <h2>Client</h2>
      {client && <pre>{JSON.stringify(client, null, 2)}</pre>}

      <h2>List Ccients</h2>
      {clients &&
        clients.map((item) => (
          <p>
            {item.id} - {item.first_name} {item.last_name}{" "}
            <button onClick={() => setSelectedClient(item.id)}>Select</button>
          </p>
        ))}
    </div>
  );
}
